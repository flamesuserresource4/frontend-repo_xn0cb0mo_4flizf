import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { CategoryGrid, FeatureBanners, TrustBadges } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <FeatureBanners />
      <CategoryGrid />
      <TrustBadges />

      <footer className="mt-10 py-10 text-center text-blue-100">
        <div className="text-2xl font-extrabold"><span className="text-[#1A73E8]">Saaz</span> <span className="text-[#FFB800]">International</span></div>
        <p className="mt-2">The trusted way to shop smart.</p>
      </footer>
    </div>
  )
}

export default App
