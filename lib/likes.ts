// Post likes, stored in Upstash Redis over its REST API.
// Needs UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (or the KV_REST_API_* names Vercel's integration sets).
// Each post keeps a set of visitor ids, so a visitor can only like a post once and the count is the set's size.

type Command = (string | number)[]

function config() {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN
  return url && token ? { url, token } : null
}

export const likesEnabled = () => config() !== null

// Runs commands in one round trip and returns each result
async function pipeline(commands: Command[]): Promise<unknown[]> {
  const cfg = config()
  if (!cfg) throw new Error("Likes are not configured")
  const res = await fetch(`${cfg.url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${cfg.token}` },
    body: JSON.stringify(commands),
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`Redis request failed: ${res.status}`)
  return (await res.json()).map((r: { result: unknown }) => r.result)
}

const key = (postId: number) => `likes:post:${postId}`

export type LikeState = { count: number; liked: boolean }

export async function getLikes(postId: number, visitor?: string): Promise<LikeState> {
  const [count, member] = await pipeline([
    ["SCARD", key(postId)],
    ["SISMEMBER", key(postId), visitor ?? ""],
  ])
  return { count: Number(count), liked: Boolean(visitor) && Number(member) === 1 }
}

export async function setLiked(postId: number, visitor: string, liked: boolean): Promise<LikeState> {
  const [, count] = await pipeline([
    [liked ? "SADD" : "SREM", key(postId), visitor],
    ["SCARD", key(postId)],
  ])
  return { count: Number(count), liked }
}
