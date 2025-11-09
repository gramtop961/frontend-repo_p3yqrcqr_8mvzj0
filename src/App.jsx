import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import AuthForms from './components/AuthForms';
import UnicornOverlay from './components/UnicornOverlay';
import { DashboardTables } from './components/DashboardTables';

// This demo focuses on UI and interactions per the instructions.
// Backend (PHP/MySQL) is not part of this React sandbox, so we simulate minimal state.

const demoGuru = [
  { id: 1, user_id: 2, nama: 'Bu fitri', NIP: '12441414' },
];

const demoSiswa = [
  { id: 1, user_id: 1, nama: 'ishan Faris', NIS: '12314214' },
  { id: 2, user_id: 3, nama: 'Kayla Sanari', NIS: '124124124' },
  { id: 3, user_id: 4, nama: 'arkanut', NIS: '12412' },
  { id: 4, user_id: 5, nama: 'amellllll', NIS: '12312414' },
  { id: 5, user_id: 6, nama: 'Haikal pratama', NIS: '471858' },
];

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [showUnicorn, setShowUnicorn] = useState(false);
  const isAuthed = useMemo(() => !!authedUser, [authedUser]);

  const handleLogin = ({ username, password }) => {
    // Fake auth: accept any non-empty
    if (username && password) {
      setShowUnicorn(true);
      setTimeout(() => {
        setAuthedUser({ username, role: username === 'fitri' ? 'guru' : 'siswa' });
        setShowUnicorn(false);
      }, 3000);
    }
  };

  const handleRegister = ({ username, password, role }) => {
    // Simulate success
    alert(`Register sukses: ${username} (${role})`);
  };

  const handleLogout = () => setAuthedUser(null);

  const onShowProfile = () => alert(`Profil: ${authedUser?.username}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-white text-slate-800">
      <Header isAuthed={isAuthed} onLogout={handleLogout} onShowProfile={onShowProfile} />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {!isAuthed ? (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Sistem Login & Register</h1>
              <p className="text-slate-600 mt-2">Guru dan Siswa • Tema pastel lembut</p>
            </div>
            <AuthForms onLogin={handleLogin} onRegister={handleRegister} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Dashboard</h2>
                <p className="text-slate-600">Selamat datang, {authedUser.username} ({authedUser.role})</p>
              </div>
            </div>
            <DashboardTables guru={demoGuru} siswa={demoSiswa} />
          </div>
        )}
      </main>

      <UnicornOverlay show={showUnicorn} />
    </div>
  );
}

export default App;
