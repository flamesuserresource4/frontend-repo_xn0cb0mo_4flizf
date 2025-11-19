import { ShoppingCart, Search, User, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 text-white">
        <button className="md:hidden p-2 rounded hover:bg-white/10"><Menu size={20} /></button>
        <div className="text-xl font-extrabold tracking-tight"><span className="text-[#1A73E8]">Saaz</span> <span className="text-[#FFB800]">International</span></div>
        <div className="flex-1 hidden md:flex items-center gap-2 mx-4">
          <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 flex-1">
            <Search size={18} className="text-blue-200" />
            <input placeholder="Search products, brands and more" className="bg-transparent outline-none flex-1 placeholder-blue-200/70" />
          </div>
        </div>
        <button className="p-2 rounded hover:bg-white/10"><User size={20} /></button>
        <button className="p-2 rounded hover:bg-white/10 relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 text-[10px] bg-[#FFB800] text-slate-900 rounded-full w-4 h-4 grid place-items-center">0</span>
        </button>
      </div>
    </header>
  )
}
