import React from "react";
import {
  Bell,
  UserCircle,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

import SidebarOrganizer from "../../components/SidebarOrganizer";
import "../../styles/detailkegiatan.css";

const DetailKegiatan = () => {
  return (
    <div className="detail-layout">

      <SidebarOrganizer />

      <div className="detail-main">

        <div className="detail-container">

          {/* TOPBAR */}
          <div className="detail-topbar">

            <div className="detail-search">
              <input
                type="text"
                placeholder="Cari kegiatan..."
              />
            </div>

            <div className="detail-icons">
              <Bell size={26} />
              <UserCircle size={28} />
            </div>

          </div>

          {/* BREADCRUMB */}
          <div className="breadcrumb">

            <span>Beranda</span>

            <span>›</span>

            <span className="active">
              Malang Hijau
            </span>

          </div>

          {/* CONTENT */}
          <div className="detail-content">

            {/* KIRI */}
            <div className="detail-left">

              <div className="detail-images">

                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
                  alt="kegiatan1"
                />

                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
                  alt="kegiatan2"
                />

              </div>

              <h1>Malang Hijau</h1>

              <div className="detail-info">

                <span>
                  <MapPin size={18} />
                  UB Forest
                </span>

                <span>
                  🌳 Lingkungan
                </span>

                <span>
                  <Calendar size={18} />
                  Minggu, 20-04-2026
                </span>

                <span>
                  <Clock size={18} />
                  08.00 - 13.00 (1 Hari)
                </span>

              </div>

              <div className="detail-description">

                <h3>Deskripsi</h3>

                <p>
                  Malang Hijau merupakan kegiatan volunteer yang
                  diselenggarakan oleh Fakultas Pertanian Universitas
                  Brawijaya di kawasan UB Forest. Kegiatan ini bertujuan
                  untuk mendukung pelestarian hutan serta meningkatkan
                  kesadaran lingkungan melalui aksi nyata seperti
                  penghijauan dan perawatan ekosistem hutan.
                </p>

                <p>
                  Melalui kegiatan ini, relawan diajak untuk
                  berkontribusi langsung dalam menjaga keberlanjutan
                  alam sekaligus belajar mengenai pentingnya
                  konservasi lingkungan.
                </p>

              </div>

            </div>

            {/* KANAN */}
            <div className="detail-right">

              <div className="contact-card">

                <h3>Informasi Kontak</h3>

                <div className="contact-user">

                  <img
                    src="https://i.pravatar.cc/80"
                    alt="organizer"
                  />

                  <div>

                    <h4>
                      BEM FP Universitas Brawijaya
                    </h4>

                    <p>0858-0000-111</p>

                    <p>bemfpub@example.com</p>

                  </div>

                </div>

                <button>
                  Kegiatan Selesai
                </button>

                <button>
                  Hubungi Kami
                </button>

              </div>

              <div className="activity-card">

                <h3>
                  Apa Yang Akan Dilakukan?
                </h3>

                <ul>

                  <li>
                    🌳 Penanaman pohon di area UB Forest
                  </li>

                  <li>
                    🌱 Perawatan tanaman dan monitoring pertumbuhan
                  </li>

                  <li>
                    🧹 Pembersihan area hutan dari sampah
                  </li>

                  <li>
                    📚 Edukasi tentang konservasi hutan dan lingkungan
                  </li>

                  <li>
                    🤝 Kolaborasi dengan mahasiswa dan tim Fakultas Pertanian
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DetailKegiatan;