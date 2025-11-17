import { useEffect, useState } from 'react'

const Stat = ({ label, value }) => (
  <div className="rounded-2xl bg-[#141414] p-6 ring-1 ring-white/10 text-center">
    <div className="text-3xl font-semibold text-white">{value}</div>
    <div className="mt-1 text-white/60">{label}</div>
  </div>
)

const Testimonial = ({ quote, name, role, img }) => (
  <div className="rounded-2xl bg-[#141414] p-6 ring-1 ring-white/10">
    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="h-12 w-12 rounded-full object-cover" />
      <div>
        <div className="text-white font-medium">{name}</div>
        <div className="text-white/60 text-sm">{role}</div>
      </div>
    </div>
    <p className="mt-4 text-white/80">“{quote}”</p>
  </div>
)

const SocialProof = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/waitlist/count`)
        const data = await res.json()
        setCount(data.count || 0)
      } catch (e) {
        setCount(0)
      }
    }
    fetchCount()
  }, [])

  return (
    <section className="bg-[#0A0A0A] py-16" id="social">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">Fidato da studenti e professionisti</h2>
          <p className="mt-2 text-white/60">Collaborazioni con atenei milanesi. Feedback reali, zero pose.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Stat label="In lista d'attesa" value={count.toLocaleString('it-IT')} />
          <Stat label="Soddisfazione attesa" value="97%" />
          <Stat label="Partner Universitari" value="Polimi · Bocconi" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Testimonial quote="Finalmente un modo rapido per attraversare i Navigli alle 8!" name="Giulia" role="Studentessa, Polimi" img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
          <Testimonial quote="Costo giusto, percorsi sicuri. Lo userò ogni giorno." name="Marco" role="Junior Designer" img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
          <Testimonial quote="Per appuntamenti in centro è imbattibile." name="Sara" role="Consulente" img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  )
}

export default SocialProof
