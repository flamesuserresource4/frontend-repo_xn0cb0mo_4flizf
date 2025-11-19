import { Star, Truck, Lock, Sparkles } from 'lucide-react'

export function CategoryGrid() {
  const categories = [
    { name: 'Electronics' },
    { name: 'Fashion' },
    { name: 'Home & Kitchen' },
    { name: 'Beauty & Personal Care' },
    { name: 'Accessories' },
    { name: 'Trending Items' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-white text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((c) => (
          <button key={c.name} className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white py-6 font-semibold">
            {c.name}
          </button>
        ))}
      </div>
    </section>
  )
}

export function FeatureBanners() {
  const items = [
    { title: 'New Arrivals', desc: 'Fresh picks just in', color: '#1A73E8' },
    { title: 'Best Sellers', desc: 'Most loved products', color: '#FFB800' },
    { title: 'Deals of the Day', desc: 'Limited-time offers', color: '#ffffff' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-4">
      {items.map((i) => (
        <div key={i.title} className="rounded-2xl p-6 bg-white/10 border border-white/10 text-white">
          <div className="text-2xl font-bold" style={{color: i.color}}>{i.title}</div>
          <div className="text-blue-100 mt-1">{i.desc}</div>
        </div>
      ))}
    </section>
  )
}

export function TrustBadges(){
  const badges = [
    { icon: Truck, label: 'Fast Delivery' },
    { icon: Lock, label: 'Secure Checkout' },
    { icon: Star, label: 'Top Rated' },
    { icon: Sparkles, label: 'Exclusive Deals' },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map(({icon:Icon,label}) => (
          <div key={label} className="rounded-xl bg-white/10 border border-white/10 text-white p-4 flex items-center gap-3">
            <Icon size={18} className="text-[#FFB800]" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
