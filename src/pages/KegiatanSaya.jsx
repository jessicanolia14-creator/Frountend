// src/pages/KegiatanSaya.jsx

import "./../styles/kegiatansaya.css";

import {
  MapPin,
  CalendarDays,
  CircleCheckBig,
  ArrowRight,
  HeartHandshake,
  Search,
  Filter,
} from "lucide-react";

import { Link } from "react-router-dom";

function KegiatanSaya() {
  const kegiatan = [
    {
      id: 1,
      title: "Malang Sehat",
      location: "Malang",
      date: "12 April 2026",
      status: "Selesai",
      desc: "Aksi bersih lingkungan & edukasi kesehatan masyarakat.",
    },
    {
      id: 2,
      title: "Bersih Desa Kediri",
      location: "Kediri",
      date: "20 April 2026",
      status: "Berjalan",
      desc: "Gotong royong membersihkan desa bersama warga.",
    },
    {
      id: 3,
      title: "Donor Darah PMI",
      location: "Surabaya",
      date: "28 April 2026",
      status: "Akan Datang",
      desc: "Kegiatan sosial donor darah untuk membantu sesama.",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Selesai") return "status done";
    if (status === "Berjalan") return "status progress";
    return "status upcoming";
  };

  return (
    <div className="page">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>Kegiatan Saya</h1>
          <p>
            Pantau semua aktivitas volunteer kamu, lihat progress, dan kontribusi sosialmu.
          </p>

          <div className="hero-actions">
            <div className="search-box">
              <Search size={18} />
              <input placeholder="Cari kegiatan..." />
            </div>

            <button className="filter-btn">
              <Filter size={18} />
              Filter
            </button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>3</h3>
              <p>Total Kegiatan</p>
            </div>
            <div>
              <h3>1</h3>
              <p>Selesai</p>
            </div>
            <div>
              <h3>1</h3>
              <p>Berjalan</p>
            </div>
          </div>
        </div>

        {/* GAMBAR VOLUNTEER */}
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="volunteer"
          />
        </div>
      </div>

      {/* LIST SECTION */}
      <div className="section-title">
        <HeartHandshake />
        <h2>Daftar Kegiatan</h2>
      </div>

      <div className="grid">
        {kegiatan.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-top">
              <h2>{item.title}</h2>
              <span className={getStatusClass(item.status)}>
                {item.status}
              </span>
            </div>

            <p className="desc">{item.desc}</p>

            <div className="info">
              <span>
                <MapPin size={16} /> {item.location}
              </span>
              <span>
                <CalendarDays size={16} /> {item.date}
              </span>
            </div>

            <Link to={`/kegiatan/${item.id}`} className="btn">
              Lihat Detail <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KegiatanSaya;