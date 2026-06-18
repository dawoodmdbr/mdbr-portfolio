export default function MobileBlock() {
  return (
    <div
      style={{ minHeight: '100vh', background: 'var(--bg)' }}
      className="flex flex-col items-center justify-center px-8 text-center gap-6"
    >
      <span style={{ fontSize: '2.5rem' }}>🖥️</span>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl tracking-tight" style={{ color: 'var(--white)' }}>
          Desktop recommended
        </h1>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--muted)' }}>
          This portfolio is built for desktop. Open it on a laptop for the full experience.
        </p>
      </div>
      <div
        className="font-mono text-xs px-4 py-2 rounded-lg"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          color: 'var(--muted)',
        }}
      >
        mdbr.vercel.app
      </div>
    </div>
  )
}
