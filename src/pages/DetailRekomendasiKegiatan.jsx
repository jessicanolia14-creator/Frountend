// src/pages/DetailRekomendasiKegiatan.jsx

import "./../styles/detailrekomendasikegiatan.css";

import {
  MapPin,
  CalendarDays,
  Users,
  Clock3,
  ArrowLeft,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

function DetailRekomendasiKegiatan() {
  return (
    <div className="detail-page">

      {/* TOPBAR */}
      <div className="detail-topbar">

        <Link
          to="/dashboard"
          className="back-btn"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

      </div>

      {/* HERO */}
      <div className="detail-hero">

        <img
          src="https://images.unsplash.com/photo-1469571486292-b53601020f52?q=80&w=1200"
          alt="Malang Sehat"
        />

        <div className="detail-overlay">

          <span className="detail-category">
            Kesehatan
          </span>

          <h1>Malang Sehat</h1>

          <p>
            Program volunteer kesehatan untuk
            membantu masyarakat desa melalui
            pemeriksaan gratis dan edukasi kesehatan.
          </p>

        </div>

      </div>

      {/* CONTENT */}
      <div className="detail-content">

        {/* LEFT */}
        <div className="detail-left">

          {/* INFO */}
          <div className="info-card">

            <h2>Informasi Kegiatan</h2>

            <div className="info-grid">

              <div className="info-item">
                <MapPin size={20} />

                <div>
                  <span>Lokasi</span>
                  <p>Desa Gading, Malang</p>
                </div>
              </div>

              <div className="info-item">
                <CalendarDays size={20} />

                <div>
                  <span>Tanggal</span>
                  <p>12 April 2026</p>
                </div>
              </div>

              <div className="info-item">
                <Clock3 size={20} />

                <div>
                  <span>Durasi</span>
                  <p>3 Hari Kegiatan</p>
                </div>
              </div>

              <div className="info-item">
                <Users size={20} />

                <div>
                  <span>Volunteer</span>
                  <p>120 Peserta</p>
                </div>
              </div>

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="description-card">

            <h2>Deskripsi Kegiatan</h2>

            <p>
              Volunteer akan membantu tenaga
              kesehatan dalam pemeriksaan gratis,
              edukasi pola hidup sehat, dan
              pendampingan masyarakat desa.
            </p>

          </div>

          {/* BENEFIT */}
          <div className="benefit-card">

            <h2>Benefit Volunteer</h2>

            <div className="benefit-list">

              <div className="benefit-item">
                <BadgeCheck size={18} />
                Relasi dan Networking Baru
              </div>

              <div className="benefit-item">
                <BadgeCheck size={18} />
                Konsumsi Selama Kegiatan
              </div>

              <div className="benefit-item">
                <BadgeCheck size={18} />
                Pengalaman Volunteer Lapangan
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="detail-right">

          <div className="join-card">

            <div className="join-top">

              <HeartHandshake size={28} />

              <h3>
                Jadilah Bagian
                dari Perubahan
              </h3>

            </div>

            <p>
              Bergabung bersama volunteer lain
              untuk membantu masyarakat dan
              menciptakan dampak positif nyata.
            </p>

            <button>
              Join Volunteer
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DetailRekomendasiKegiatan;