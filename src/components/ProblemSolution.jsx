const Card = ({ title, subtitle }) => (
  <div className="rounded-2xl bg-[#141414] p-6 ring-1 ring-white/10">
    <h3 className="text-white text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{subtitle}</p>
  </div>
)

const ProblemSolution = () => {
  return (
    <section className="bg-[#0A0A0A] py-16" id="problems">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold text-white">Soluzione, non scuse.</h2>
          <p className="mt-2 text-white/60">Riduci i costi, taglia i tempi, libera la città.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card title="Taxi costosi" subtitle="MyRide fino al 50% più economico" />
          <Card title="Lenti nel traffico" subtitle="Con la moto salti ogni coda" />
          <Card title="Disponibilità limitata" subtitle="Servizio 24/7 in tutta Milano" />
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
