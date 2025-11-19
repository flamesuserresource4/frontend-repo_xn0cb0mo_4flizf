import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full flex items-center justify-center text-center px-6 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80 pointer-events-none">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">Saaz International</h1>
          <p className="mt-4 text-lg md:text-2xl text-blue-100">Shop Smart. Shop Saaz.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <button className="px-5 py-2 rounded-lg bg-[#1A73E8] text-white font-semibold hover:brightness-110 transition">Start Shopping</button>
            <button className="px-5 py-2 rounded-lg bg-[#FFB800] text-slate-900 font-semibold hover:brightness-110 transition">View Deals</button>
          </div>
        </div>
      </div>
    </section>
  );
}
