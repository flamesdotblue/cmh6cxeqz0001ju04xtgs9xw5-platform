import { MapPin, Globe, Calendar, Search } from 'lucide-react';

export default function HackathonFilters({ value, onChange }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 md:p-5 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-4">
          <label className="text-xs text-slate-400 mb-1 block">Search</label>
          <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-lg px-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input value={value.query} onChange={(e) => onChange({ ...value, query: e.target.value })} placeholder="AI, fintech, campus..." className="w-full bg-transparent py-2.5 outline-none text-slate-100 placeholder:text-slate-500" />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="text-xs text-slate-400 mb-1 block">Mode</label>
          <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-lg px-3">
            <Globe className="w-4 h-4 text-slate-400" />
            <select value={value.mode} onChange={(e) => onChange({ ...value, mode: e.target.value })} className="w-full bg-transparent py-2.5 outline-none">
              <option value="all">All</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs text-slate-400 mb-1 block">Radius (km)</label>
          <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-lg px-3">
            <MapPin className="w-4 h-4 text-slate-400" />
            <input type="number" min={0} value={value.radius} onChange={(e) => onChange({ ...value, radius: e.target.value })} className="w-full bg-transparent py-2.5 outline-none" />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="text-xs text-slate-400 mb-1 block">Date Range</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-lg px-3">
              <Calendar className="w-4 h-4 text-slate-400" />
              <input type="date" value={value.startDate} onChange={(e) => onChange({ ...value, startDate: e.target.value })} className="w-full bg-transparent py-2.5 outline-none" />
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-lg px-3">
              <Calendar className="w-4 h-4 text-slate-400" />
              <input type="date" value={value.endDate} onChange={(e) => onChange({ ...value, endDate: e.target.value })} className="w-full bg-transparent py-2.5 outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
