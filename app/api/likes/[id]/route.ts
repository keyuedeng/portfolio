import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { blogPosts } from "@/lib/blog-data"
import { getLikes, likesEnabled, setLiked } from "@/lib/likes"

type Context = { params: Promise<{ id: string }> }

// Anonymous visitor id, kept in a cookie so each browser counts once per post
const VISITOR_COOKIE = "visitor"

async function resolve(ctx: Context) {
  const id = Number((await ctx.params).id)
  return blogPosts.some((p) => p.id === id) ? id : null
}

export async function GET(_req: Request, ctx: Context) {
  if (!likesEnabled()) return NextResponse.json({ error: "disabled" }, { status: 503 })
  const id = await resolve(ctx)
  if (id === null) return NextResponse.json({ error: "not found" }, { status: 404 })

  const visitor = (await cookies()).get(VISITOR_COOKIE)?.value
  try {
    return NextResponse.json(await getLikes(id, visitor))
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }
}

// POST likes the post, DELETE removes the like
async function toggle(ctx: Context, liked: boolean) {
  if (!likesEnabled()) return NextResponse.json({ error: "disabled" }, { status: 503 })
  const id = await resolve(ctx)
  if (id === null) return NextResponse.json({ error: "not found" }, { status: 404 })

  const jar = await cookies()
  let visitor = jar.get(VISITOR_COOKIE)?.value
  if (!visitor) {
    visitor = crypto.randomUUID()
    jar.set(VISITOR_COOKIE, visitor, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365 * 2,
      path: "/",
    })
  }

  try {
    return NextResponse.json(await setLiked(id, visitor, liked))
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }
}

export const POST = (_req: Request, ctx: Context) => toggle(ctx, true)
export const DELETE = (_req: Request, ctx: Context) => toggle(ctx, false)
