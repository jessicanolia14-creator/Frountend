import React from "react";
import { useState } from "react";

import {
  Bell,
  CircleUserRound,
  User,
  LockKeyhole,
  LogOut,
} from "lucide-react";

import SidebarAdmin from "../../components/SidebarOrganizer";

import "../../styles/pengaturanorganizer.css";

const PengaturanOrganizer = () => {

  const [showEditProfile, setShowEditProfile] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="pengaturan-layout">

      <SidebarAdmin />

      <div className="pengaturan-main">

        {/* HEADER */}
        <div className="pengaturan-header">

          <div>

            <h1>Pengaturan Organizer</h1>

            <p>
              Kelola akun dan sistem Organizer
            </p>

          </div>

        </div>

        {/* CARD */}
        <div className="pengaturan-container">

          {/* EDIT PROFILE */}
          <div className="pengaturan-card">

            <div className="card-left">

              <div className="card-icon">
                <User size={34} />
              </div>

              <div className="card-info">

                <h2>Edit Profile</h2>

                <p>
                  Ubah informasi akun organizer
                </p>

              </div>

            </div>

            <button
              className="card-btn edit-btn"
              onClick={() => setShowEditProfile(true)}
            >
              Edit
            </button>

          </div>

          {/* PASSWORD */}
          <div className="pengaturan-card">

            <div className="card-left">

              <div className="card-icon">
                <LockKeyhole size={34} />
              </div>

              <div className="card-info">

                <h2>Ganti Password</h2>

                <p>
                  Perbarui keamanan akun organizer
                </p>

              </div>

            </div>

            <button
              className="card-btn ganti-btn"
              onClick={() => setShowPassword(true)}
            >
              Ganti
            </button>

          </div>

          {/* LOGOUT */}
          <div className="pengaturan-card">

            <div className="card-left">

              <div className="card-icon">
                <LogOut size={34} />
              </div>

              <div className="card-info">

                <h2>Logout</h2>

                <p>
                  Keluar dari dashboard organizer
                </p>

              </div>

            </div>

            <button className="card-btn logout-btn">
              Logout
            </button>

          </div>

        </div>

        {/* EDIT PROFILE */}

        {showEditProfile && (

        <div className="popup-overlay">

          <div className="popup-form">

            <div className="profile-header">

              <div className="avatar-large">
                YP
              </div>

              <div>

                <h2>Yayasan Peduli Alam</h2>

                <p>alam@org.com</p>

                <span className="verified-badge">
                  ✓ Terverifikasi
                </span>

              </div>

            </div>

            <hr />

            <label>Nama PIC</label>
            <input defaultValue="Yayasan Peduli Alam" />

            <label>Nama Organisasi</label>
            <input defaultValue="Yayasan Peduli Alam" />

            <label>Nomor HP / Telp</label>
            <input defaultValue="021-5551234" />

            <label>Deskripsi Organisasi</label>

            <textarea
              rows="5"
              defaultValue="Organisasi lingkungan hidup"
            />

            <button
              className="save-profile-btn"
              onClick={() => setShowEditProfile(false)}
            >
              Simpan Perubahan
            </button>

          </div>

        </div>

        )}

        {/* GANTI PASSWORD */}

        {showPassword && (

        <div className="popup-overlay">

          <div className="popup-form">

            <label>Password Lama</label>

            <input
              type="password"
              placeholder="Password lama"
            />

            <label>Password Baru</label>

            <input
              type="password"
              placeholder="Password"
            />

            <label>Konfirmasi Password Baru</label>

            <input
              type="password"
              placeholder="Password"
            />

            <button
              className="save-profile-btn"
              onClick={() => setShowPassword(false)}
            >
              Ubah Password
            </button>

          </div>

        </div>

        )}

      </div>

    </div>
  );
};

export default PengaturanOrganizer;