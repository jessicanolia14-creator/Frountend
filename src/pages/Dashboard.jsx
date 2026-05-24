// src/pages/Dashboard.jsx

import "./../styles/dashboard.css";

import { Link } from "react-router-dom";

import {
  Bell,
  Search,
  CircleUserRound,
  MapPin,
  CalendarDays,
  Users,
  House,
  HeartHandshake,
  Settings,
  LogOut,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div>

          {/* LOGO */}
          <div className="sidebar-logo">

            <img
              src="/logo.png"
              alt="VolunteerHub"
            />

            <h2>VolunteerHub</h2>

          </div>

          {/* MENU */}
          <div className="menu">

            {/* DASHBOARD */}
            <div className="menu-item active">

              <House size={20} />

              <span>Dashboard</span>

            </div>

            {/* KEGIATAN SAYA */}
            <Link
              to="/myactivity"
              className="menu-item"
            >

              <HeartHandshake size={20} />

              <span>Kegiatan Saya</span>

            </Link>

            {/* PENGATURAN */}
            <div className="menu-item">

              <Settings size={20} />

              <span>Pengaturan</span>

            </div>

          </div>

        </div>

        {/* LOGOUT */}
        <div className="logout">

          <LogOut size={20} />

          <span>Logout</span>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard-content">

        {/* TOPBAR */}
        <div className="topbar">

          {/* SEARCH */}
          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Cari kegiatan volunteer..."
            />

          </div>

          {/* PROFILE */}
          <div className="topbar-right">

            <Bell size={22} />

            <CircleUserRound size={28} />

          </div>

        </div>

        {/* HERO */}
        <div className="hero-card">

          <div className="hero-text">

            <span className="hero-badge">
              VolunteerHub Community
            </span>

            <h1>
              Bangun Dampak Nyata
              Bersama VolunteerHub ✨
            </h1>

            <p>
              Temukan berbagai kegiatan volunteer
              mulai dari aksi sosial, pendidikan,
              kesehatan, lingkungan, hingga event
              kemanusiaan di berbagai kota Jawa Timur.
            </p>

            <button
              onClick={() => {
                const section =
                  document.getElementById(
                    "activity-section"
                  );

                section?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              Explore Activities
            </button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

        </div>

        {/* FILTER */}
        <div className="filter-container">

          <div className="filter-top">

            <h2>Filter Volunteer</h2>

            <p>
              Temukan kegiatan volunteer sesuai preferensimu
            </p>

          </div>

          <div className="filter-grid">

            {/* LOKASI */}
            <div className="filter-box">

              <label>Lokasi</label>

              <select>

                <option>Semua Lokasi</option>
                <option>Malang</option>
                <option>Surabaya</option>
                <option>Batu</option>
                <option>Kediri</option>
                <option>Blitar</option>

              </select>

            </div>

            {/* KATEGORI */}
            <div className="filter-box">

              <label>Kategori Volunteer</label>

              <select>

                <option>Semua Kategori</option>
                <option>Kesehatan</option>
                <option>Pendidikan</option>
                <option>Lingkungan</option>
                <option>Sosial</option>

              </select>

            </div>

            {/* DURASI */}
            <div className="filter-box">

              <label>Durasi Volunteer</label>

              <select>

                <option>Semua Durasi</option>
                <option>1 Hari</option>
                <option>1 Minggu</option>
                <option>1 Bulan</option>

              </select>

            </div>

            {/* STATUS */}
            <div className="filter-box">

              <label>Status</label>

              <select>

                <option>All Status</option>
                <option>Open</option>
                <option>Closed</option>

              </select>

            </div>

          </div>

          {/* APPLY FILTER */}
          <Link to="/filterresult">

            <button
              className="apply-filter-btn"
            >

              Apply Filter

            </button>

          </Link>

        </div>

        {/* SECTION */}
        <div
          className="section-title"
          id="activity-section"
        >

          <h2>Rekomendasi Kegiatan</h2>

          <p>
            Pilihan kegiatan volunteer terbaik untuk kamu
          </p>

        </div>

        {/* ACTIVITY GRID */}
        <div className="activity-grid">

          {/* CARD 1 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1469571486292-b53601020f52?q=80&w=1000"
              alt=""
            />

            <div className="activity-content">

              <span className="category">
                Kesehatan
              </span>

              <h3>Malang Sehat</h3>

              <p>
                Program volunteer kesehatan
                untuk membantu masyarakat desa.
              </p>

              <div className="activity-info">

                <span>
                  <MapPin size={15} />
                  Malang
                </span>

                <span>
                  <CalendarDays size={15} />
                  12 April 2026
                </span>

              </div>

              <div className="activity-footer">

                <span>
                  <Users size={15} />
                  120 Volunteers
                </span>

                <Link to="/detailrekomendasikegiatan">

                  <button>
                    Detail
                  </button>

                </Link>

              </div>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000"
              alt=""
            />

            <div className="activity-content">

              <span className="category">
                Pendidikan
              </span>

              <h3>Edu Desa</h3>

              <p>
                Volunteer mengajar dan edukasi
                kreatif untuk anak-anak desa.
              </p>

              <div className="activity-info">

                <span>
                  <MapPin size={15} />
                  Kediri
                </span>

                <span>
                  <CalendarDays size={15} />
                  20 Mei 2026
                </span>

              </div>

              <div className="activity-footer">

                <span>
                  <Users size={15} />
                  80 Volunteers
                </span>

                <Link to="/detailrekomendasikegiatan">

                  <button>
                    Detail
                  </button>

                </Link>

              </div>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000"
              alt=""
            />

            <div className="activity-content">

              <span className="category">
                Lingkungan
              </span>

              <h3>Green Earth</h3>

              <p>
                Program penanaman pohon dan
                aksi peduli lingkungan bersama.
              </p>

              <div className="activity-info">

                <span>
                  <MapPin size={15} />
                  Batu
                </span>

                <span>
                  <CalendarDays size={15} />
                  08 Juni 2026
                </span>

              </div>

              <div className="activity-footer">

                <span>
                  <Users size={15} />
                  150 Volunteers
                </span>

                <Link to="/detailrekomendasikegiatan">

                  <button>
                    Detail
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;