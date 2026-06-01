import React from "react";
import { Link } from "react-router-dom";

import {
  ClipboardList,
  BadgeCheck,
  Hourglass,
  Users,
} from "lucide-react";

import SidebarOrganizer from "../../components/SidebarOrganizer";

import "../../styles/dashboardorganizer.css";

const DashboardOrganizer = () => {
  return (
    <div className="organizer-layout">

      <SidebarOrganizer />

      <div className="organizer-main">

        {/* HEADER */}
        <div className="organizer-header">

          <div className="organizer-profile">

            <div className="organizer-avatar">
                YP
            </div>

            <div className="organizer-info">

                <p>Selamat datang,</p>

                <div className="organizer-name">

                    <h1>Yayasan Peduli Alam</h1>

                    <span>🏢</span>

                </div>

                    <h4>alam@org.com</h4>

                </div>

            </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <a href="/organizer/kegiatan" className="stat-card">

        <div className="stat-top">
            <div className="stat-icon beige">
              <ClipboardList size={28} />
            </div>

            <h2>2</h2>
        </div>
            <p>Total Kegiatan</p>

          </a>

          <Link
             to="/organizer/kegiatan?status=Aktif"
             className="stat-card"
          >

        <div className="stat-top">
            <div className="stat-icon green">
              <BadgeCheck size={28} />
            </div>

            <h2>2</h2>
        </div>
            <p>Disetujui Admin</p>

          </Link>

          <Link
             to="/organizer/kegiatan?status=Menunggu"
             className="stat-card"
          >

        <div className="stat-top">
            <div className="stat-icon yellow">
              <Hourglass size={28} />
            </div>

            <h2>0</h2>
        </div>
            <p>Menunggu Approval</p>

            </Link>

          <a href="/organizer/pendaftaran" className="stat-card">

        <div className="stat-top">
            <div className="stat-icon blue">
              <Users size={28} />
            </div>

            <h2>0</h2>
        </div>
            <p>Pendaftaran Masuk</p>

          </a>


        </div>

        {/* CONTENT */}
<div className="bottom-grid">

  {/* KEGIATAN */}
  <div className="dashboard-card kegiatan-card">

    <div className="card-header">

      <h2>Kegiatan Saya</h2>

        <a
            href="/organizer/kegiatan"
            className="dashboard-btn"
            >
                <button className="dashboard-btn">
                    Kelola
                </button>
        </a>

    </div>

    <div className="kegiatan-item">

      <div>

        <Link
            to="/organizer/detail-kegiatan/1"
            className="kegiatan-link"
            >
            <h3>Malang Hijau</h3>
            <p>Lingkungan • 20 April 2026</p>
        </Link>

      </div>

      <span className="status aktif">
        Aktif
      </span>

    </div>

    <div className="kegiatan-item">

      <div>
        <Link
            to="/organizer/detail-kegiatan/1"
            className="kegiatan-link"
            >
            <h3>Bersih-bersih Pantai Anyer</h3>
            <p>Lingkungan • 3 Agustus 2025</p>
        </Link>

      </div>

      <span className="status ditolak">
        Ditolak
      </span>

    </div>

    <div className="kegiatan-item">

      <div>
        <Link
            to="/organizer/detail-kegiatan/1"
            className="kegiatan-link"
            >
            <h3>Donor Darah di Puskesmas Bahagia</h3>
            <p>Kesehatan • 12 Juli 2025</p>
        </Link>

      </div>

      <span className="status menunggu">
        Menunggu
      </span>

    </div>

  </div>

  {/* PENDAFTARAN */}
  <div className="dashboard-card pendaftaran-card">

    <div className="card-header">

      <h2>Pendaftaran Terbaru</h2>

      <Link
        to="/organizer/pendaftaran"
        className="dashboard-btn"
        >
            <button className="dashboard-btn">
                Lihat Semua
            </button>
    </Link>

    </div>

    <div className="pendaftaran-item">

      <div className="pendaftaran-left">

        <div className="pendaftaran-icon">
          👤
        </div>

        <div className="pendaftaran-info">

          <h4>Peserta #1</h4>

          <p>Penanaman 1000 Pohon di Gunung Salak</p>

        </div>

      </div>

            <span className="status diterima">
                Diterima
            </span>

            </div>

        <div className="pendaftaran-item">

            <div className="pendaftaran-left">

                <div className="pendaftaran-icon">
                👤
                </div>

            <div className="pendaftaran-info">

                <h4>Peserta #2</h4>

                <p>Penanaman 1000 Pohon di Gunung Salak</p>

            </div>

                </div>

                <span className="status diterima">
                    Diterima
                </span>

                </div>

            </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardOrganizer;