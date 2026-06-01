import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Search,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import SidebarOrganizer from "../../components/SidebarOrganizer";

import "../../styles/kegiatanorganizer.css";

const KegiatanOrganizer = () => {

    const [searchParams] = useSearchParams();

    const defaultStatus =
    searchParams.get("status") || "Semua";

    const [statusFilter, setStatusFilter] =
    useState(defaultStatus);

    const [showDeleteModal, setShowDeleteModal] = useState(false);


  const kegiatan = [
    {
      nama: "Malang Hijau",
      lokasi: "UB Forest",
      kategori: "Lingkungan",
      tanggal: "20 April 2026",
      peserta: "23/50",
      fill: "fill1",
      status: "Aktif",
    },

    {
      nama: "Bersih-bersih Pantai Anyer",
      lokasi: "Pantai Anyer, Serang",
      kategori: "Lingkungan",
      tanggal: "3 Agustus 2025",
      peserta: "0/80",
      fill: "fill2",
      status: "Ditolak",
    },

    {
      nama: "Donor Darah di Puskesmas Bahagia",
      lokasi: "Puskesmas Bahagia, Malang",
      kategori: "Kesehatan",
      tanggal: "12 Juli 2025",
      peserta: "28/30",
      fill: "fill2",
      status: "Menunggu",
    },
  ];

  const filteredKegiatan =
    statusFilter === "Semua"
      ? kegiatan
      : kegiatan.filter(
          (item) => item.status === statusFilter
        );

  return (
    <div className="kegiatan-layout">

      <SidebarOrganizer />

      <div className="kegiatan-main">

        {/* HEADER */}
        <div className="kegiatan-header">

          <div>

            <h1>Kegiatan Saya</h1>

            <p>Kelola semua kegiatan volunteer Anda</p>

          </div>

        </div>

        {/* SEARCH */}
        <div className="top-filter">


            <div className="search-box">

                <Search size={20} />

                <input
                    type="text"
                    placeholder="Cari kegiatan..."
                />
        </div>

        {/* FILTER */}
        <div className="filter-group">

          <button
            className={
              statusFilter === "Semua"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setStatusFilter("Semua")}
          >
            Semua
          </button>

          <button
            className={
              statusFilter === "Aktif"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setStatusFilter("Aktif")}
          >
            Aktif
          </button>

          <button
            className={
              statusFilter === "Menunggu"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setStatusFilter("Menunggu")}
          >
            Menunggu
          </button>

          <button
            className={
              statusFilter === "Ditolak"
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setStatusFilter("Ditolak")}
          >
            Ditolak
          </button>

        </div>

    </div>

        {/* TABLE */}
        <div className="kegiatan-table-card">

          <div className="kegiatan-table-header">

            <span>KEGIATAN</span>

            <span>KATEGORI</span>

            <span>TANGGAL</span>

            <span>PESERTA</span>

            <span>STATUS</span>

            <span>AKSI</span>

          </div>

          {filteredKegiatan.map((item, index) => (

            <div
              className="kegiatan-table-row"
              key={index}
            >
                <a
                href={`/organizer/detail-kegiatan/${index}`}
                className="kegiatan-link"
                >
                <h3>{item.nama}</h3>
                <p>{item.lokasi}</p>
                </a>

              <div>

                <span className="kategori">
                  {item.kategori}
                </span>

              </div>

              <div className="tanggal">
                {item.tanggal}
              </div>

              <div>

                <h4>{item.peserta}</h4>

                <div className="progress-bar">

                  <div
                    className={`progress-fill ${item.fill}`}
                  ></div>

                </div>

              </div>

              <div>

                <span
                  className={
                    item.status === "Aktif"
                      ? "status aktif"
                      : item.status === "Menunggu"
                      ? "status menunggu"
                      : "status ditolak"
                  }
                >
                  {item.status}
                </span>

              </div>

              <div className="aksi-box">

                <Link
                    to={`/organizer/edit-kegiatan/${index + 1}`}
                    className="edit-btn"
                >
                    <Pencil size={18} />
                </Link>

                <button
                    className="hapus-btn"
                    onClick={() => setShowDeleteModal(true)}
                >
                    <Trash2 size={18} />
                </button>

                {showDeleteModal && (
                <div className="delete-overlay">

                    <div className="delete-modal">

                    <div className="delete-header">

                        <h2>Hapus Kegiatan</h2>

                        <button
                        className="close-btn"
                        onClick={() => setShowDeleteModal(false)}
                        >
                        <X size={20} />
                        </button>

                    </div>

                    <p>
                        Apakah Anda yakin ingin menghapus kegiatan ini?
                        Semua pendaftaran terkait juga akan dihapus.
                    </p>

                    <div className="delete-actions">

                        <button
                        className="batal-delete"
                        onClick={() => setShowDeleteModal(false)}
                        >
                        Batal
                        </button>

                        <button
                        className="confirm-delete"
                        onClick={() => {
                            alert("Kegiatan berhasil dihapus");
                            setShowDeleteModal(false);
                        }}
                        >
                        Ya, Hapus
                        </button>

                    </div>

                    </div>

                </div>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default KegiatanOrganizer;