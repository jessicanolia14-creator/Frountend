import React from "react";

import {
  Bell,
  UserCircle,
  Image,
  CalendarDays,
} from "lucide-react";

import SidebarOrganizer from "../../components/SidebarOrganizer";

import "../../styles/tambahkegiatanorganizer.css";

const TambahKegiatanOrganizer = () => {
  return (
    <div className="tambah-layout">

      <SidebarOrganizer />

      <div className="tambah-main">

        {/* HEADER */}
        <div className="tambah-header">

          <div>
            <h1>Buat Kegiatan</h1>
            <p>Tambahkan kegiatan volunteer baru</p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="tambah-container">

          {/* LEFT */}
          <div className="form-card">

            <div className="form-group">
              <label>Nama Kegiatan</label>

              <input
                type="text"
                placeholder="Masukkan nama kegiatan"
              />
            </div>

            <div className="form-group">
              <label>Deskripsi</label>

              <textarea
                rows="4"
                placeholder="Deskripsi kegiatan volunteer"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Kategori</label>

              <div className="kategori-grid">

                <label>
                  <input type="radio" name="kategori" />
                  Lingkungan
                </label>

                <label>
                  <input type="radio" name="kategori" />
                  Sosial
                </label>

                <label>
                  <input type="radio" name="kategori" />
                  Pendidikan
                </label>

                <label>
                  <input type="radio" name="kategori" />
                  Kesehatan
                </label>

                <div className="lainnya-box">

                    <input type="radio" name="kategori" />

                    <input
                    type="text"
                    placeholder="Lainnya..."
                    className="lainnya-input"
                    />

                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Tanggal dan Waktu</label>

              <div className="date-input">

                <input type="date" />

              </div>
            </div>

            <div className="form-group">
              <label>Durasi</label>

              <div className="durasi-grid">

                <label>
                  <input type="radio" name="durasi" />
                  1 Hari
                </label>

                <label>
                  <input type="radio" name="durasi" />
                  1 Minggu
                </label>

                <label>
                  <input type="radio" name="durasi" />
                  &gt; 1 Bulan
                </label>

              </div>

            </div>

            <button className="submit-btn">
              Simpan Kegiatan
            </button>

          </div>

          {/* RIGHT */}
          <div className="side-card">

            <div className="upload-box">

              <Image size={80} />
        
                <input type="file" />

            </div>

            <div className="contact-card">

              <h3>Informasi Kontak</h3>

              <input
                type="text"
                placeholder="Nama Penanggung Jawab"
              />

              <input
                type="text"
                placeholder="Nomor Telepon"
              />

              <input
                type="email"
                placeholder="Email"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TambahKegiatanOrganizer;