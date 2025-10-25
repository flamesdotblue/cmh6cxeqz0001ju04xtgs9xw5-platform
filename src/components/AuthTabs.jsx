import { useState } from 'react';
import { User, GraduationCap, Megaphone, Mail, Lock } from 'lucide-react';

export default function AuthTabs({ compact = false }) {
  const [tab, setTab] = useState('student'); // 'student' | 'conductor'
  const [mode, setMode] = useState('signup'); // 'signup' | 'signin'

  return (
    <div className="w-full">
      <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-3'} gap-2 mb-4`}>
        <button onClick={() => setTab('student')} className={`flex items-center gap-2 justify-center rounded-lg px-3 py-2 border transition ${tab === 'student' ? 'bg-slate-800 border-slate-600' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">Student</span>
        </button>
        <button onClick={() => setTab('conductor')} className={`flex items-center gap-2 justify-center rounded-lg px-3 py-2 border transition ${tab === 'conductor' ? 'bg-slate-800 border-slate-600' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
          <Megaphone className="w-4 h-4 text-cyan-400" />
          <span className="text-sm">Conductor</span>
        </button>
        {!compact && (
          <div className="flex items-center justify-end gap-2">
            <button onClick={() => setMode('signup')} className={`text-xs px-2 py-1 rounded border ${mode === 'signup' ? 'border-cyan-400 text-cyan-300' : 'border-slate-700 text-slate-400 hover:text-slate-200'}`}>Sign Up</button>
            <button onClick={() => setMode('signin')} className={`text-xs px-2 py-1 rounded border ${mode === 'signin' ? 'border-cyan-400 text-cyan-300' : 'border-slate-700 text-slate-400 hover:text-slate-200'}`}>Sign In</button>
          </div>
        )}
      </div>

      {tab === 'student' ? (
        <AuthForm roleLabel="Student" mode={mode} compact={compact} />
      ) : (
        <>
          <AuthForm roleLabel="Conductor" mode={mode} compact={compact} />
          {!compact && mode === 'signup' && (
            <HostMiniForm />
          )}
        </>
      )}
    </div>
  );
}

function AuthForm({ roleLabel, mode, compact }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    alert(`${roleLabel} ${mode === 'signup' ? 'registration' : 'login'} submitted\n` + JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mode === 'signup' && (
          <div className="md:col-span-2">
            <label className="text-sm text-slate-300 mb-1 block">Full Name</label>
            <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-lg px-3">
              <User className="w-4 h-4 text-slate-400" />
              <input name="name" required placeholder="Alex Student" className="w-full bg-transparent py-2.5 outline-none text-slate-100 placeholder:text-slate-500" />
            </div>
          </div>
        )}
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300 mb-1 block">Email</label>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-lg px-3">
            <Mail className="w-4 h-4 text-slate-400" />
            <input type="email" name="email" required placeholder="you@example.com" className="w-full bg-transparent py-2.5 outline-none text-slate-100 placeholder:text-slate-500" />
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300 mb-1 block">Password</label>
          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-lg px-3">
            <Lock className="w-4 h-4 text-slate-400" />
            <input type="password" name="password" required placeholder={mode === 'signup' ? 'Create a strong password' : 'Enter your password'} className="w-full bg-transparent py-2.5 outline-none text-slate-100 placeholder:text-slate-500" />
          </div>
        </div>
      </div>
      <button type="submit" className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-2.5 transition">
        {mode === 'signup' ? `Create ${roleLabel} Account` : `Sign In as ${roleLabel}`}
      </button>
      {compact && (
        <div className="text-xs text-slate-400 text-center">Use the main section to access full hosting options.</div>
      )}
    </form>
  );
}

function HostMiniForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    alert('Conductor event draft submitted\n' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="mt-6 border-t border-slate-800 pt-6">
      <h4 className="font-semibold mb-2">Event Details</h4>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input name="title" required placeholder="Hackathon Title" className="bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 outline-none" />
        <select name="mode" className="bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 outline-none">
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <input type="date" name="date" required className="bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 outline-none" />
        <input name="city" placeholder="City (if offline)" className="bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 outline-none" />
        <input name="prize" placeholder="Prize (optional)" className="bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 outline-none md:col-span-2" />
        <button type="submit" className="md:col-span-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold py-2.5 transition">Save Draft</button>
      </form>
    </div>
  );
}
