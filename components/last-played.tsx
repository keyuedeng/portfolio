import { getLastPlayed } from "@/lib/spotify"
import { TimeAgo } from "@/components/time-ago"

export async function LastPlayed() {
  const track = await getLastPlayed()
  if (!track) return null

  return (
    <aside
      aria-label="Last played on Spotify"
      className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-line-soft px-[11px] py-[5px] font-mono text-[11px] text-muted"
    >
      <span aria-hidden="true" className="tracking-[1px] whitespace-pre text-faint">▂▄▃▅▂</span>
      <span>last played</span>
      <a href={track.url} target="_blank" rel="noreferrer">
        {track.title} — {track.artist}
      </a>
      <TimeAgo iso={track.playedAt} />
    </aside>
  )
}
