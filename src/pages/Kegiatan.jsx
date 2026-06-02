import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { dummyKegiatan } from "../data/dummyData.js";
import "./Kegiatan.css";

const statusClass = (status) => {
  if (status === "Berjalan") return "badge badge-berjalan";
  if (status === "Open") return "badge badge-open";
  if (status === "Selesai") return "badge badge-selesai";
  return "badge";
};

const Kegiatan = () => {
  const [kegiatan, setKegiatan] = useState(dummyKegiatan);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Hapus kegiatan ini?")) {
      setKegiatan((prev) => prev.filter((k) => k.id !== id));
    }
  };

  const handleEditClick = (data) => {
    setEditData({ ...data });
    setIsEditOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    setKegiatan((prev) =>
      prev.map((k) =>
        k.id === editData.id
          ? {
              ...editData,
              kuota: Number(editData.kuota),
            }
          : k
      )
    );

    setIsEditOpen(false);
    setEditData(null);
  };

  const handleCloseModal = () => {
    setIsEditOpen(false);
    setEditData(null);
  };

  return (
    <div className="kegiatan-page">
      <div className="page-card">
        <div className="page-card-header">
          <h2 className="page-card-title">Kegiatan</h2>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Nama Kegiatan</th>
              <th>Organizer</th>
              <th>Lokasi</th>
              <th>Tanggal</th>
              <th>Kuota</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {kegiatan.map((k) => (
              <tr key={k.id}>
                <td className="bold-cell">{k.nama}</td>
                <td className="muted-cell">{k.organizer}</td>
                <td>{k.lokasi}</td>
                <td>{k.tanggal}</td>
                <td>{k.kuota}</td>
                <td>
                  <span className={statusClass(k.status)}>{k.status}</span>
                </td>
                <td>
                  <div className="action-btns">
                    {k.status !== "Berjalan" && (
                      <>
                        <button
                          type="button"
                          className="act-btn edit-btn"
                          title="Edit"
                          onClick={() => handleEditClick(k)}
                        >
                          <Pencil size={15} />
                        </button>

                        <button
                          type="button"
                          className="act-btn del-btn"
                          title="Hapus"
                          onClick={() => handleDelete(k.id)}
                        >
                          <Trash2 size={15} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditOpen && editData && (
        <div className="modal-overlay">
          <div className="edit-modal">
            <h2 className="edit-modal-title">Edit Kegiatan</h2>

            <form className="edit-form" onSubmit={handleSaveEdit}>
              <label>Nama Kegiatan</label>
              <input
                type="text"
                name="nama"
                value={editData.nama || ""}
                onChange={handleEditChange}
                required
              />

              <label>Organizer</label>
              <input
                type="text"
                name="organizer"
                value={editData.organizer || ""}
                onChange={handleEditChange}
                required
              />

              <label>Lokasi</label>
              <input
                type="text"
                name="lokasi"
                value={editData.lokasi || ""}
                onChange={handleEditChange}
                required
              />

              <label>Tanggal</label>
              <input
                type="text"
                name="tanggal"
                value={editData.tanggal || ""}
                onChange={handleEditChange}
                required
              />

              <label>Kuota</label>
              <input
                type="number"
                name="kuota"
                value={editData.kuota || ""}
                onChange={handleEditChange}
                required
              />

              <label>Status</label>
              <select
                name="status"
                value={editData.status || "Open"}
                onChange={handleEditChange}
              >
                <option value="Open">Open</option>
                <option value="Berjalan">Berjalan</option>
                <option value="Selesai">Selesai</option>
              </select>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCloseModal}
                >
                  Batal
                </button>

                <button type="submit" className="save-btn">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kegiatan;