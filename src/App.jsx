import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'

function App() {
  const scrollToCTA = () => {
    const el = document.getElementById('cta-bar')
    if (el) el.classList.remove('translate-y-full')
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero onCTAClick={scrollToCTA} />
      <ProblemSolution />
      <SocialProof />
      <Features />
      <FinalCTA />
      <footer className="bg-[#0A0A0A] py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} MyRide s.r.l. · Milano · P.IVA 00000000000
      </footer>
    </div>
  )
}

export default App
