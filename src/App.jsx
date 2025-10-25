import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import AuthTabs from './components/AuthTabs';
import HackathonFilters from './components/HackathonFilters';
import HackathonList from './components/HackathonList';

const MOCK_HACKATHONS = [
  {
    id: 'h1',
    title: 'Campus Innovators Hackathon',
    mode: 'offline',
    city: 'San Francisco',
    distanceKm: 5,
    date: '2025-11-10',
    prize: '$5,000',
    tags: ['AI', 'Sustainability'],
  },
  {
    id: 'h2',
    title: 'Global Online AI Sprint',
    mode: 'online',
    city: 'Remote',
    distanceKm: 0,
    date: '2025-12-01',
    prize: '$10,000',
    tags: ['AI', 'Open Source'],
  },
  {
    id: 'h3',
    title: 'FinTech Builders Weekend',
    mode: 'offline',
    city: 'New York',
    distanceKm: 12,
    date: '2025-11-22',
    prize: '$3,000',
    tags: ['FinTech', 'Payments'],
  },
  {
    id: 'h4',
    title: 'Healthcare CodeFest',
    mode: 'online',
    city: 'Remote',
    distanceKm: 0,
    date: '2025-11-15',
    prize: '$7,500',
    tags: ['Healthcare', 'Data'],
  },
];

export default function App() {
  const [mode, setMode] = useState('find'); // 'find' | 'host'
  const [filters, setFilters] = useState({
    query: '',
    mode: 'all', // all | online | offline
    radius: 25,
    startDate: '',
    endDate: '',
  });

  const filtered = useMemo(() => {
    return MOCK_HACKATHONS.filter((h) => {
      if (filters.mode !== 'all' && h.mode !== filters.mode) return false;
      if (filters.radius && h.mode === 'offline' && h.distanceKm > Number(filters.radius)) return false;
      if (filters.startDate && new Date(h.date) < new Date(filters.startDate)) return false;
      if (filters.endDate && new Date(h.date) > new Date(filters.endDate)) return false;
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const hay = [h.title, h.city, h.mode, ...(h.tags || [])].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero onPrimary={() => setMode('find')} onSecondary={() => setMode('host')} />

      <section className="container mx-auto px-4 md:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {mode === 'find' ? (
              <>
                <HackathonFilters value={filters} onChange={setFilters} />
                <HackathonList items={filtered} />
              </>
            ) : (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-3">Host a Hackathon</h2>
                <p className="text-slate-300 mb-6">Sign up as a conductor and publish your event details to reach nearby students or global participants.</p>
                <AuthTabs />
              </div>
            )}
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-3">Get Started</h3>
              <p className="text-slate-300 mb-4">Create a student account to discover nearby and online hackathons, or a conductor account to host one.</p>
              <AuthTabs compact />
            </div>
          </aside>
        </div>
      </section>

      <footer className="container mx-auto px-4 md:px-8 py-12 text-sm text-slate-400">
        Built for students and conductors — find or host your next hackathon.
      </footer>
    </div>
  );
}
