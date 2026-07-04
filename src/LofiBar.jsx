import './LofiBar.css'

// Decorative ambient player — not wired to real audio.
// Signature element: ties "lofi music / rainy afternoon" brief to a persistent,
// quiet detail rather than a one-off banner.
export default function LofiBar() {
  return (
    <div className="lofi-bar" aria-hidden="true">
      <div className="lofi-eq">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>
      <span className="mono lofi-text">now playing — rainy afternoon lo-fi mix</span>
      <span className="mono lofi-text lofi-text--dim">seed: {new Date().getFullYear()}</span>
    </div>
  )
}
