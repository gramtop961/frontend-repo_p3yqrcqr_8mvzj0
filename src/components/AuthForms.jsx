import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TextField({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
      />
    </label>
  );
}

function RoleSelect({ value, onChange }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-600">Role</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all shadow-sm"
      >
        <option value="siswa">Siswa</option>
        <option value="guru">Guru</option>
      </select>
    </label>
  );
}

export function AuthForms({ onLogin, onRegister }) {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('siswa');

  const reset = () => {
    setUsername('');
    setPassword('');
    setRole('siswa');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin({ username, password });
    } else {
      onRegister({ username, password, role });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 rounded-2xl shadow-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {['login', 'register'].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  reset();
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === m
                    ? 'bg-white shadow text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {m === 'login' ? 'Masuk' : 'Daftar'}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Username"
            value={username}
            onChange={setUsername}
            placeholder="Masukkan username"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Masukkan password"
          />

          <AnimatePresence initial={false}>
            {mode === 'register' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <RoleSelect value={role} onChange={setRole} />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-medium shadow-lg hover:from-indigo-600 hover:to-sky-600 transition-colors"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthForms;
