import { useEffect, useRef, useState } from 'react'

const Helmet3D = () => {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 500)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/10 flex items-center justify-center">
      <div className="pointer-events-none select-none text-white/60">
        {mounted ? 'Interactive Helmet (placeholder)' : 'Loading 3D...'}
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-[#0A0A0A] py-16" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">Velocità, controllo, sicurezza</h2>
          <p className="mt-2 text-white/60">Tecnologia trasparente per guadagnare minuti ogni giorno.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Helmet3D />
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#141414] p-6 ring-1 ring-white/10">
              <div className="text-white font-semibold">ETA in tempo reale</div>
              <p className="mt-2 text-white/70">Calcoliamo l'arrivo via traffico live. Provalo nella mappa.</p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-black/40">
                <iframe
                  title="Mappa Milano"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.842063219096!2d9.189981!3d45.464203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDUuNDY0MjAzLCA5LjE4OTk4MQ!5e0!3m2!1sit!2sit!4v1700000000000"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="rounded-2xl bg-[#141414] p-6 ring-1 ring-white/10">
              <div className="text-white font-semibold">Sicurezza prima di tutto</div>
              <p className="mt-2 text-white/70">Caschi igienizzati, assicurazione completa, piloti certificati.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
