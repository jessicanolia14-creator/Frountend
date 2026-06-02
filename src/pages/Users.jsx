import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { dummyUsers } from '../data/dummyData.js';
import './Users.css';

const Users = () => {
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');

  const filtered = dummyUsers.filter(u => {
    const matchSearch =
      u.nama.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === 'Semua' || u.role === filterRole;
    const matchStatus = filterStatus === 'Semua' || u.status === filterStatus;
    return matchSearch && matchRole && matchStatus;
  });

  return (
    <div className="users-page">
      <div className="page-card">
        <div className="page-card-header">
          <h2 className="page-card-title">Pengguna</h2>
          <div className="filter-bar">
            <div className="search-wrap">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Cari nama atau email..."
                className="search-input"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="filter-select"
              value={filterRole}
              onChange={e => setFilterRole(e.target.value)}
            >
              <option value="Semua">Semua Role</option>
              <option value="Relawan">Relawan</option>
              <option value="Organizer">Organizer</option>
            </select>
            <select
              className="filter-select"
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
            >
              <option value="Semua">Semua Status</option>
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Tanggal Bergabung</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="empty-row">Tidak ada data ditemukan.</td>
              </tr>
            ) : (
              filtered.map(u => (
                <tr key={u.id}>
                  <td className="bold-cell">{u.nama}</td>
                  <td className="muted-cell">{u.email}</td>
                  <td>
                    <span className={`role-badge ${u.role === 'Organizer' ? 'role-organizer' : 'role-relawan'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status-dot ${u.status === 'Aktif' ? 'dot-aktif' : 'dot-nonaktif'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td>{u.tanggal}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="table-footer">
          Menampilkan {filtered.length} dari {dummyUsers.length} pengguna
        </div>
      </div>
    </div>
  );
};

export default Users;
