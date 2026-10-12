// Fetches the most recently played track from Spotify.
// Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN (scope: user-read-recently-played).
// Returns null when unconfigured or on any error, so the page simply hides the pill.

export type LastPlayed = { title: string; artist: string; url: string; playedAt: string }

export async function getLastPlayed(): Promise<LastPlayed | null> {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) return null

  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: SPOTIFY_REFRESH_TOKEN }),
    })
    if (!tokenRes.ok) return null
    const { access_token } = await tokenRes.json()

    const res = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    if (!res.ok) return null
    const item = (await res.json()).items?.[0]
    if (!item) return null

    return {
      title: item.track.name,
      artist: item.track.artists.map((a: { name: string }) => a.name).join(", "),
      url: item.track.external_urls.spotify,
      playedAt: item.played_at,
    }
  } catch {
    return null
  }
}
