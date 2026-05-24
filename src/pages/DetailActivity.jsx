import "./../styles/detailactivity.css";

import {
  CalendarDays,
  MapPin,
  Users,
  Clock3,
} from "lucide-react";

function DetailActivity() {
  return (
    <div className="detail-page">

      <div className="detail-card">

        <img
          src="https://images.unsplash.com/photo-1469571486292-b53601020f52?q=80&w=1200"
          alt=""
        />

        <div className="detail-content">

          <span className="detail-badge">
            Volunteer Activity
          </span>

          <h1>Malang Sehat</h1>

          <p>
            Program volunteer kesehatan untuk
            membantu masyarakat desa melalui
            pemeriksaan kesehatan gratis,
            edukasi hidup sehat, dan pembagian
            vitamin kepada warga.
          </p>

          <div className="detail-info">

            <span>
              <MapPin size={17} />
              Desa Gading
            </span>

            <span>
              <CalendarDays size={17} />
              12 April 2026
            </span>

            <span>
              <Clock3 size={17} />
              3 Hari
            </span>

            <span>
              <Users size={17} />
              120 Volunteer
            </span>

          </div>

          <div className="detail-box">

            <h3>Tugas Volunteer</h3>

            <p>
              Membantu tenaga medis,
              membagikan vitamin,
              mengatur antrian warga,
              dan melakukan edukasi
              kesehatan dasar.
            </p>

          </div>

          <div className="detail-box">

            <h3>Benefit</h3>

            <p>
              Sertifikat volunteer,
              konsumsi, relasi baru,
              pengalaman organisasi,
              dan pengembangan soft skill.
            </p>

          </div>

          <a
            href="/myactivity"
            className="back-btn"
          >
            Kembali
          </a>

        </div>

      </div>

    </div>
  );
}

export default DetailActivity;