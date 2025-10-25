import { Calendar, MapPin, Globe, Trophy } from 'lucide-react';

export default function HackathonList({ items }) {
  if (!items.length) {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center text-slate-300">
        No hackathons match your filters yet. Try expanding your radius or switching modes.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((h) => (
        <article key={h.id} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold leading-tight">{h.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4 text-slate-400" /> {new Date(h.date).toLocaleDateString()}</span>
              {h.mode === 'online' ? (
                <span className="inline-flex items-center gap-1"><Globe className="w-4 h-4 text-slate-400" /> Online</span>
              ) : (
                <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4 text-slate-400" /> {h.city} • {h.distanceKm} km</span>
              )}
              {h.prize && (
                <span className="inline-flex items-center gap-1"><Trophy className="w-4 h-4 text-yellow-400" /> {h.prize}</span>
              )}
            </div>
            {h.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-800 bg-slate-950/40 text-slate-300">{t}</span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2 md:self-start">
            <button className="rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition">Apply</button>
            <button className="rounded-lg bg-slate-900/70 border border-slate-700 hover:border-slate-600 text-slate-100 px-4 py-2 transition">Details</button>
          </div>
        </article>
      ))}
    </div>
  );
}
