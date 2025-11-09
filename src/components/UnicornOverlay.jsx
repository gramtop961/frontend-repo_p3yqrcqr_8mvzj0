import React from 'react';

function UnicornOverlay({ show }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur">
      <img
        src="https://media.giphy.com/media/l3q2LH45XElELRzRm/giphy.gif"
        alt="Unicorn Loading"
        className="w-48 h-48 object-contain drop-shadow-xl"
      />
      <p className="mt-4 text-slate-700 font-medium">Mengalihkan ke dashboard...</p>
    </div>
  );
}

export default UnicornOverlay;
