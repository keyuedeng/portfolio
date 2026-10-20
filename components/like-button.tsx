"use client"

import { useEffect, useState } from "react"
import type { LikeState } from "@/lib/likes"

// Heart toggle under a post. Renders nothing until the count loads, and nothing at all if likes aren't configured.
export function LikeButton({ postId }: { postId: number }) {
  const [state, setState] = useState<LikeState | null>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    fetch(`/api/likes/${postId}`)
      .then((res) => (res.ok ? res.json() : null))
      .then(setState)
      .catch(() => {})
  }, [postId])

  if (!state) return null

  const toggle = async () => {
    const previous = state
    const liked = !state.liked
    // Update straight away, then settle on whatever the server says
    setState({ liked, count: state.count + (liked ? 1 : -1) })
    setPending(true)
    try {
      const res = await fetch(`/api/likes/${postId}`, { method: liked ? "POST" : "DELETE" })
      setState(res.ok ? await res.json() : previous)
    } catch {
      setState(previous)
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={pending}
      aria-pressed={state.liked}
      aria-label={state.liked ? "Unlike this post" : "Like this post"}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[13px] transition-colors disabled:cursor-default ${
        state.liked ? "border-accent text-accent" : "border-line text-muted hover:border-accent hover:text-accent"
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill={state.liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M12 20.5s-7.5-4.6-7.5-10.3A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.6c0 5.7-7.5 10.3-7.5 10.3Z" />
      </svg>
      <span>{state.count}</span>
    </button>
  )
}
