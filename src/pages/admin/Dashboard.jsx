import React from "react";
import {
  dummyRecentActivity,
  dummyRecentUsers,
  dummyUsers,
  dummyKegiatan,
  dummyApproval,
} from "../data/dummyData.js";
import HeaderActions from "../components/HeaderActions.jsx";
import "./Dashboard.css";

const statusClass = (status) => {
  if (status === "Berjalan") return "badge badge-berjalan";
  if (status === "Open") return "badge badge-open";
  if (status === "Selesai") return "badge badge-selesai";
  return "badge";
};

const Dashboard = () => {
  const totalUser = dummyUsers.filter((u) => u.role === "Relawan").length;
  const totalOrganizer = dummyUsers.filter((u) => u.role === "Organizer").length;
  const totalKegiatan = dummyKegiatan.length;
  const kegiatanPending = dummyApproval.filter((a) => a.status === "Pending").length;
  const kegiatanApproved = dummyKegiatan.filter((k) => k.status !== "Pending").length;

  return (
    <div className="dashboard-page">
      <div className="dashboard-top">
        <div>
          <h1 className="dashboard-title">Dashboard Admin</h1>
          <p className="dashboard-subtitle">Selamat datang, Admin!</p>
        </div>

        <HeaderActions />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total User</span>
          <span className="stat-value">{totalUser}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Total Organizer</span>
          <span className="stat-value">{totalOrganizer}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Total Kegiatan</span>
          <span className="stat-value">{totalKegiatan}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Kegiatan Pending</span>
          <span className="stat-value pending">{kegiatanPending}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Kegiatan Approved</span>
          <span className="stat-value approved">{kegiatanApproved}</span>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-title">Kegiatan Terbaru</div>

        <table className="dash-table">
          <thead>
            <tr>
              <th>Nama Kegiatan</th>
              <th>Tanggal</th>
              <th>Lokasi</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {dummyRecentActivity.map((item) => (
              <tr key={item.id}>
                <td className="bold-cell">{item.nama}</td>
                <td>{item.tanggal}</td>
                <td>{item.lokasi}</td>
                <td>
                  <span className={statusClass(item.status)}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-card">
        <div className="card-title">Pengguna Terbaru</div>

        <table className="dash-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Role</th>
              <th>Tanggal Bergabung</th>
            </tr>
          </thead>

          <tbody>
            {dummyRecentUsers.map((item) => (
              <tr key={item.id}>
                <td className="bold-cell">{item.nama}</td>
                <td>{item.role}</td>
                <td>{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;