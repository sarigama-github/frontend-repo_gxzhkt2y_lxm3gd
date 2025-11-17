import { useEffect, useRef, useState } from 'react'

const FinalCTA = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
  const [tsReady, setTsReady] = useState(false)

  useEffect(() => {
    const check = () => {
      if (window.turnstile) setTsReady(true)
    }
    const id = setInterval(check, 300)
    return () => clearInterval(id)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (!siteKey) {
      setLoading(false)
      setStatus({ ok: false, message: 'Turnstile non configurato' })
      return
    }

    try {
      if (!window.turnstile) throw new Error('Turnstile non disponibile')
      const token = await window.turnstile.execute(siteKey, { appearance: 'invisible' })
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/waitlist/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Errore di invio')
      setStatus({ ok: true, count: data.count })
      setEmail('')
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-[#0A0A0A] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">Pronto a guidare il cambiamento?</h2>
          <p className="mt-2 text-white/70">Iscriviti alla lista d'attesa. Ti avviseremo appena apriamo.</p>
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="h-12 flex-1 rounded-full bg-[#141414] px-5 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/60"
            />
            <button
              type="submit"
              disabled={loading || !tsReady}
              className="h-12 rounded-full bg-[#FFCC00] px-6 text-black font-semibold hover:brightness-95 disabled:opacity-50"
            >
              {loading ? 'Invio...' : 'Get Early Access'}
            </button>
          </form>
          {status && (
            <div className={`mt-3 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
              {status.ok ? `Iscrizione confermata. In lista: ${status.count}` : status.message}
            </div>
          )}
        </div>
      </section>

      <div id="cta-bar" className="fixed inset-x-0 bottom-0 z-50 translate-y-full transition-transform duration-300">
        <div className="mx-auto max-w-4xl px-4 pb-4">
          <div className="rounded-2xl bg-[#141414] p-3 ring-1 ring-white/10 shadow-lg">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                className="h-12 flex-1 rounded-full bg-black/40 px-5 text-white placeholder-white/40 focus:outline-none"
              />
              <button type="submit" disabled={loading || !tsReady} className="h-12 rounded-full bg-[#FFCC00] px-6 text-black font-semibold">
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinalCTA
