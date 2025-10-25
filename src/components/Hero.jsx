import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <header className="relative w-full h-[70vh] min-h-[520px]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-slate-900/70 border border-slate-800 rounded-full px-3 py-1 mb-4">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-slate-300">A modern platform for student hackathons</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Discover and Host Hackathons
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Find nearby, online, or offline events. Students explore opportunities. Conductors publish and manage their hackathons.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition">
              Find Hackathons
            </button>
            <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-xl bg-slate-900/70 border border-slate-700 hover:border-slate-600 text-slate-100 font-semibold px-5 py-3 transition">
              Host an Event
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
