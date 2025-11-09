import React from 'react';

function Header({ isAuthed, onLogout, onShowProfile }) {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_userAvatar.svg/1024px-OOjs_UI_icon_userAvatar.svg.png"
            alt="Logo"
            className="w-10 h-10 rounded-md object-cover shadow-sm"
          />
          <div className="leading-tight">
            <p className="text-slate-900 font-semibold tracking-wide">SMKN 5 Kota Tangerang</p>
            <p className="text-xs text-slate-500">Sistem Login & Register Guru/Siswa</p>
          </div>
        </div>

        {isAuthed ? (
          <nav className="flex items-center gap-2">
            <button
              onClick={onShowProfile}
              className="px-4 py-2 rounded-lg text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors"
            >
              Profil Saya
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 shadow-md transition-colors"
            >
              Logout
            </button>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
