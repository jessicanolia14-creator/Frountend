import React, { useState } from "react";
import "./Pengaturan.css";

const Pengaturan = () => {
  const [namaAdmin, setNamaAdmin] = useState("Admin VolunteerHub");
  const [emailAdmin, setEmailAdmin] = useState("admin@volunteerhub.com");
  const [namaPlatform, setNamaPlatform] = useState("VolunteerHub");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPesan("Pengaturan berhasil disimpan.");
  };

  return (
    <div className="pengaturan-page">
      <div className="pengaturan-card">
        <h2>Pengaturan</h2>
        <p className="pengaturan-desc">
          Kelola informasi dasar admin dan platform.
        </p>

        {pesan && <div className="pengaturan-alert">{pesan}</div>}

        <form className="pengaturan-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Admin</label>
            <input
              type="text"
              value={namaAdmin}
              onChange={(e) => setNamaAdmin(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Admin</label>
            <input
              type="email"
              value={emailAdmin}
              onChange={(e) => setEmailAdmin(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Nama Platform</label>
            <input
              type="text"
              value={namaPlatform}
              onChange={(e) => setNamaPlatform(e.target.value)}
            />
          </div>

          <button type="submit" className="pengaturan-btn">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pengaturan;