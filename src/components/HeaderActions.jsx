import React, { useState } from "react";
import {
  Bell,
  UserCircle,
  User,
  CheckCircle,
  AlertCircle,
  Clock,
  X,
  Mail,
  ShieldCheck,
} from "lucide-react";

const HeaderActions = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileDetail, setShowProfileDetail] = useState(false);

  const adminProfile = {
    name: "Admin VolunteerHub",
    email: "admin@volunteerhub.com",
    role: "Administrator",
    status: "Aktif",
  };

  const notifications = [
    {
      id: 1,
      title: "Kegiatan baru",
      message: "Ada kegiatan baru yang menunggu pengecekan admin.",
      time: "5 menit lalu",
      type: "approval",
    },
    {
      id: 2,
      title: "Kuota hampir penuh",
      message: "Salah satu kegiatan sudah hampir memenuhi kuota.",
      time: "20 menit lalu",
      type: "warning",
    },
    {
      id: 3,
      title: "Kegiatan selesai",
      message: "Kegiatan telah selesai dilaksanakan.",
      time: "1 jam lalu",
      type: "success",
    },
  ];

  const handleNotifClick = () => {
    setShowNotif((prev) => !prev);
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
    setShowNotif(false);
  };

  const handleOpenProfileDetail = () => {
    setShowProfile(false);
    setShowProfileDetail(true);
  };

  return (
    <>
      <div className="header-actions">
        <div className="header-action-item">
          <button
            type="button"
            className="header-icon-btn"
            onClick={handleNotifClick}
          >
            <Bell size={24} />
            <span className="notif-dot"></span>
          </button>

          {showNotif && (
            <div className="dropdown-panel notif-panel">
              <div className="dropdown-header">
                <h3>Notifikasi</h3>
                <span>3 Baru</span>
              </div>

              <div className="notif-list">
                {notifications.map((notif) => (
                  <div className="notif-item" key={notif.id}>
                    <div className={`notif-icon ${notif.type}`}>
                      {notif.type === "approval" && <Clock size={18} />}
                      {notif.type === "warning" && <AlertCircle size={18} />}
                      {notif.type === "success" && <CheckCircle size={18} />}
                    </div>

                    <div className="notif-content">
                      <h4>{notif.title}</h4>
                      <p>{notif.message}</p>
                      <small>{notif.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="header-action-item">
          <button
            type="button"
            className="header-icon-btn"
            onClick={handleProfileClick}
          >
            <UserCircle size={28} />
          </button>

          {showProfile && (
            <div className="dropdown-panel profile-panel">
              <div className="profile-info">
                <div className="profile-avatar">
                  <User size={24} />
                </div>

                <div>
                  <h3>{adminProfile.name}</h3>
                  <p>{adminProfile.email}</p>
                </div>
              </div>

              <div className="profile-menu">
                <button type="button" onClick={handleOpenProfileDetail}>
                  <User size={18} />
                  Profil Admin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showProfileDetail && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-card">
            <button
              type="button"
              className="profile-modal-close"
              onClick={() => setShowProfileDetail(false)}
            >
              <X size={20} />
            </button>

            <div className="profile-modal-avatar">
              <User size={38} />
            </div>

            <h2>{adminProfile.name}</h2>
            <p className="profile-modal-role">{adminProfile.role}</p>

            <div className="profile-detail-list">
              <div className="profile-detail-item">
                <Mail size={18} />
                <div>
                  <span>Email</span>
                  <strong>{adminProfile.email}</strong>
                </div>
              </div>

              <div className="profile-detail-item">
                <ShieldCheck size={18} />
                <div>
                  <span>Status Akun</span>
                  <strong>{adminProfile.status}</strong>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="profile-modal-btn"
              onClick={() => setShowProfileDetail(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderActions;