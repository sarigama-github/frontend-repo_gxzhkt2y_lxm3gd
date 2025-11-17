import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const Hero = ({ onCTAClick }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/70 to-[#0A0A0A] pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-14 text-white">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide text-white/80 ring-1 ring-white/15">
          Launching Milano, Feb 2026
          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#00D9FF]" />
        </p>
        <h1
          className="font-display leading-[0.95] text-[clamp(2.5rem,8vw,5rem)] font-semibold text-white drop-shadow-sm"
        >
          Milano, senza traffico. Sempre.
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-[1.125rem]">
          MyRide porta i moto taxi a Milano. Sicuro, veloce, 50% più conveniente.
        </p>
        <div className="mt-8 flex w-full flex-wrap items-center gap-4">
          <button
            onClick={onCTAClick}
            className="h-12 min-w-[200px] rounded-full bg-[#FFCC00] px-6 text-black font-semibold ring-0 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]/60"
          >
            Get Early Access
          </button>
          <a
            href="#social"
            className="h-12 rounded-full px-6 inline-flex items-center justify-center text-white/80 ring-1 ring-white/15 hover:bg-white/5"
          >
            Perché MyRide?
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
