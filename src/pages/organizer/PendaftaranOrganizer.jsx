import React, { useState } from "react";

import {
  Search,
  Users,
} from "lucide-react";

import SidebarOrganizer from "../../components/SidebarOrganizer";

import "../../styles/pendaftaranorganizer.css";

const dataPendaftaran = [
  {
    id: 1,
    nama: "Volunteer #1",
    kegiatan: "Malang Hijau",
    tanggal: "20 April 2026",
    status: "Diterima",
  },

  {
    id: 2,
    nama: "Volunteer #2",
    kegiatan: "Malang Hijau",
    tanggal: "20 April 2026",
    status: "Diterima",
  },
];

const kegiatanList = [
  "Semua Kegiatan",
  "Malang Hijau",
  "Bersih-bersih Pantai Anyer",
];

const PendaftaranOrganizer = () => {

  const [statusFilter, setStatusFilter] = useState("Semua");

  const [selectedKegiatan, setSelectedKegiatan] =
    useState("Semua Kegiatan");

  const filteredData = dataPendaftaran.filter((item) => {

    const cocokStatus =
      statusFilter === "Semua"
        ? true
        : item.status === statusFilter;

    const cocokKegiatan =
      selectedKegiatan === "Semua Kegiatan"
        ? true
        : item.kegiatan === selectedKegiatan;

    return cocokStatus && cocokKegiatan;
  });

  return (
    <div className="pendaftaran-layout">

      <SidebarOrganizer />

      <div className="pendaftaran-main">

        {/* HEADER */}
        <div className="pendaftaran-header">

          <h1>Pendaftaran Volunteer</h1>

          <p>
            Kelola pendaftaran peserta untuk kegiatan Anda
          </p>

        </div>

        {/* FILTER */}
        <div className="filter-section">

          <div className="select-wrapper">

            <select
              value={selectedKegiatan}
              onChange={(e) =>
                setSelectedKegiatan(e.target.value)
              }
            >

              {kegiatanList.map((item, index) => (
                <option key={index}>
                  {item}
                </option>
              ))}

            </select>

          </div>

          <div className="status-buttons">

            <button
              className={
                statusFilter === "Semua"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStatusFilter("Semua")
              }
            >
              Semua
            </button>

            <button
              className={
                statusFilter === "Menunggu"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStatusFilter("Menunggu")
              }
            >
              Menunggu
            </button>

            <button
              className={
                statusFilter === "Diterima"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStatusFilter("Diterima")
              }
            >
              Diterima
            </button>

            <button
              className={
                statusFilter === "Ditolak"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStatusFilter("Ditolak")
              }
            >
              Ditolak
            </button>

          </div>

        </div>

        {/* TABLE */}
        {filteredData.length > 0 ? (

          <div className="table-card">

            <div className="table-header">

              <span>PESERTA</span>

              <span>KEGIATAN</span>

              <span>TANGGAL DAFTAR</span>

              <span>STATUS</span>

            </div>

            {filteredData.map((item) => (

              <div
                className="table-row"
                key={item.id}
              >

                {/* PESERTA */}
                <div className="peserta-box">

                  <div className="peserta-icon">

                    <Users size={18} />

                  </div>

                  <div>

                    <h3>{item.nama}</h3>

                    <p>ID: {item.id}</p>

                  </div>

                </div>

                {/* KEGIATAN */}
                <div className="kegiatan-text">

                  {item.kegiatan}

                </div>

                {/* TANGGAL */}
                <div className="tanggal-text">

                  {item.tanggal}

                </div>

                {/* STATUS */}
                <div>

                  <span className="status diterima">

                    {item.status}

                  </span>


                </div>

              </div>
            ))}

          </div>

        ) : (

          <div className="empty-state">

            <Users size={80} strokeWidth={1.5} />

            <h2>Tidak ada pendaftaran</h2>

            <p>
              Belum ada volunteer yang mendaftar
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default PendaftaranOrganizer;