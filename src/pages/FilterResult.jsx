// src/pages/FilterResult.jsx

import "./../styles/filterresult.css";

import {
  MapPin,
  CalendarDays,
  Users,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

function FilterResult() {
  return (
    <div className="filter-page">

      {/* TOP */}
      <div className="filter-topbar">

        <Link
          to="/dashboard"
          className="back-btn"
        >

          <ArrowLeft size={18} />

          Kembali ke Dashboard

        </Link>

      </div>

      {/* HEADER */}
      <div className="filter-header">

        <span>
          VolunteerHub Filter
        </span>

        <h1>
          Hasil Filter Volunteer ✨
        </h1>

        <p>
          Temukan kegiatan volunteer terbaik
          sesuai lokasi, kategori, dan preferensimu.
        </p>

      </div>

      {/* GRID */}
      <div className="filter-grid">

        {/* CARD 1 */}
        <div className="filter-card">

          <img
            src="https://images.unsplash.com/photo-1469571486292-b53601020f52?q=80&w=1000"
            alt=""
          />

          <div className="filter-content">

            <span className="category">
              Kesehatan
            </span>

            <h3>
              Malang Sehat
            </h3>

            <p>
              Program kesehatan masyarakat
              dengan pemeriksaan gratis
              dan edukasi desa.
            </p>

            <div className="info">

              <span>
                <MapPin size={15} />
                Malang
              </span>

              <span>
                <CalendarDays size={15} />
                12 April 2026
              </span>

            </div>

            <div className="footer">

              <span>
                <Users size={15} />
                120 Volunteer
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
        <div className="filter-card">

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000"
            alt=""
          />

          <div className="filter-content">

            <span className="category">
              Pendidikan
            </span>

            <h3>
              Edu Desa
            </h3>

            <p>
              Mengajar dan memberikan
              edukasi kreatif untuk anak-anak desa.
            </p>

            <div className="info">

              <span>
                <MapPin size={15} />
                Kediri
              </span>

              <span>
                <CalendarDays size={15} />
                20 Mei 2026
              </span>

            </div>

            <div className="footer">

              <span>
                <Users size={15} />
                80 Volunteer
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
        <div className="filter-card">

          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000"
            alt=""
          />

          <div className="filter-content">

            <span className="category">
              Lingkungan
            </span>

            <h3>
              Green Earth
            </h3>

            <p>
              Program penanaman pohon
              dan aksi peduli lingkungan bersama.
            </p>

            <div className="info">

              <span>
                <MapPin size={15} />
                Batu
              </span>

              <span>
                <CalendarDays size={15} />
                08 Juni 2026
              </span>

            </div>

            <div className="footer">

              <span>
                <Users size={15} />
                150 Volunteer
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
  );
}

export default FilterResult;