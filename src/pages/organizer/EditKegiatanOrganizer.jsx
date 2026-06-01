import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarOrganizer from "../../components/SidebarOrganizer";
import "../../styles/editkegiatanorganizer.css";

const kegiatanData = {
  1: {
    nama: "Malang Hijau",
    kategori: "Lingkungan",
    lokasi: "UB Forest",
    kuota: 50,
    deskripsi:
      "Kegiatan penghijauan dan konservasi lingkungan.",
    syarat:
      "Sehat jasmani dan rohani.",
  },

  2: {
    nama: "Bersih-bersih Pantai Anyer",
    kategori: "Lingkungan",
    lokasi: "Pantai Anyer, Serang",
    kuota: 80,
    deskripsi:
      "Kegiatan membersihkan area pantai dari sampah.",
    syarat:
      "Membawa pakaian ganti dan siap kerja lapangan.",
  },

  3: {
    nama: "Donor Darah di Puskesmas Bahagia",
    kategori: "Kesehatan",
    lokasi: "Puskesmas Bahagia, Malang",
    kuota: 30,
    deskripsi:
      "Kegiatan donor darah bersama masyarakat.",
    syarat:
      "Usia minimal 17 tahun.",
  },
};

const EditKegiatanOrganizer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const kegiatan =
    kegiatanData[id] || kegiatanData[1];

  return (
    <div className="edit-layout">

      <SidebarOrganizer />

      <div className="edit-main">

        <h1>Edit Kegiatan</h1>

        <div className="edit-card">

          <div className="form-group">

            <label>Judul Kegiatan</label>

            <input
              type="text"
              defaultValue={kegiatan.nama}
            />

          </div>

          <div className="form-group">

             <label>Gambar Kegiatan</label>

            <div className="upload-box">

                <span>📷 Upload Gambar</span>

                <input type="file" />

          </div>

        </div>

          <div className="form-group">

            <label>Kategori</label>

            <select defaultValue={kegiatan.kategori}>

                <option>Lingkungan</option>

                <option>Kesehatan</option>

                <option>Pendidikan</option>

                <option>Sosial</option>

            </select>

          </div>

          <div className="form-group">

            <label>Lokasi</label>

            <input
              type="text"
              defaultValue={kegiatan.lokasi}
            />

          </div>

          <div className="form-group">

          <div className="form-group">

            <label>Tanggal Kegiatan</label>

            <input
                type="date"
                defaultValue="2026-04-20"
            />

          </div>

          <div className="form-group">

            <label>Jam Kegiatan</label>

            <input
                type="time"
                defaultValue="08:00"
            />

          </div>

            <label>Kuota Peserta</label>

            <input
              type="number"
              defaultValue={kegiatan.kuota}
            />

          </div>

          <div className="form-group">

            <label>Deskripsi</label>

            <textarea
              rows="5"
              defaultValue={kegiatan.deskripsi}
            />

          </div>

          <div className="form-group">

            <label>Persyaratan</label>

            <textarea
              rows="4"
              defaultValue={kegiatan.syarat}
            />

          </div>

          <div className="button-group">

            <button
                className="batal-btn"
                onClick={() => navigate("/organizer/kegiatan")}
            >
                Batal
            </button>

            <button
                className="simpan-btn"
                onClick={() => {
                    alert("Perubahan berhasil disimpan");
                    navigate("/organizer/kegiatan");
                }}
            >
                Simpan Perubahan
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditKegiatanOrganizer;