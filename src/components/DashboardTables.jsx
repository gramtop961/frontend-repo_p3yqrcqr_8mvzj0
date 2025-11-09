import React from 'react';

function Table({ title, columns, data }) {
  return (
    <div className="bg-white/80 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((c) => (
                <th key={c} className="text-left text-sm font-medium text-slate-600 px-5 py-3">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-5 py-6 text-center text-slate-500">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={idx} className="border-t border-slate-100 hover:bg-slate-50/60 transition-colors">
                  {Object.values(row).map((val, i) => (
                    <td key={i} className="px-5 py-3 text-slate-700 text-sm">{val}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DashboardTables({ guru = [], siswa = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Table
        title="Daftar Guru"
        columns={["ID", "User ID", "Nama", "NIP"]}
        data={guru.map((g) => ({ ID: g.id, "User ID": g.user_id, Nama: g.nama, NIP: g.NIP }))}
      />
      <Table
        title="Daftar Siswa"
        columns={["ID", "User ID", "Nama", "NIS"]}
        data={siswa.map((s) => ({ ID: s.id, "User ID": s.user_id, Nama: s.nama, NIS: s.NIS }))}
      />
    </div>
  );
}

export default DashboardTables;
