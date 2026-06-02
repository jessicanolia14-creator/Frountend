import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, X } from 'lucide-react';
import { dummyApproval } from '../data/dummyData.js';
import './Approval.css';

const Approval = () => {
  const [approvals, setApprovals] = useState(dummyApproval);
  const [selected, setSelected] = useState(null); // for modal

  const handleApprove = (id) => {
    setApprovals(prev =>
      prev.map(a => a.id === id ? { ...a, status: 'Approved' } : a)
    );
  };

  const handleReject = (id) => {
    setApprovals(prev =>
      prev.map(a => a.id === id ? { ...a, status: 'Rejected' } : a)
    );
  };

  const openDetail = (item) => setSelected(item);
  const closeDetail = () => setSelected(null);

  const badgeClass = (status) => {
    if (status === 'Approved') return 'badge badge-approved';
    if (status === 'Rejected') return 'badge badge-rejected';
    return 'badge badge-pending';
  };

  return (
    <div className="approval-page">
      <div className="page-card">
        <div className="page-card-header">
          <h2 className="page-card-title">Approval Kegiatan</h2>
          <span className="pending-count">
            {approvals.filter(a => a.status === 'Pending').length} menunggu persetujuan
          </span>
        </div>

        <div className="approval-list">
          {approvals.map(item => (
            <div key={item.id} className="approval-item">
              <div className="approval-info">
                <div className="approval-nama">{item.nama}</div>
                <div className="approval-meta">
                  <span>{item.organizer}</span>
                  <span className="meta-sep">·</span>
                  <span>{item.lokasi}</span>
                  <span className="meta-sep">·</span>
                  <span>{item.tanggal}</span>
                  <span className="meta-sep">·</span>
                  <span>Kuota: {item.kuota}</span>
                </div>
              </div>

              <div className="approval-actions">
                <span className={badgeClass(item.status)}>{item.status}</span>

                <button
                  className="act-text-btn view-btn"
                  onClick={() => openDetail(item)}
                  title="Lihat Detail"
                >
                  <Eye size={15} />
                  <span>Detail</span>
                </button>

                {item.status === 'Pending' && (
                  <>
                    <button
                      className="act-text-btn approve-btn"
                      onClick={() => handleApprove(item.id)}
                    >
                      <CheckCircle size={15} />
                      <span>Approve</span>
                    </button>
                    <button
                      className="act-text-btn reject-btn"
                      onClick={() => handleReject(item.id)}
                    >
                      <XCircle size={15} />
                      <span>Reject</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="modal-overlay" onClick={closeDetail}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Detail Pengajuan Kegiatan</h3>
              <button className="modal-close" onClick={closeDetail}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="modal-row">
                <span className="modal-label">Nama Kegiatan</span>
                <span className="modal-value">{selected.nama}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Organizer</span>
                <span className="modal-value">{selected.organizer}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Lokasi</span>
                <span className="modal-value">{selected.lokasi}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Tanggal</span>
                <span className="modal-value">{selected.tanggal}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Kuota</span>
                <span className="modal-value">{selected.kuota} peserta</span>
              </div>
              <div className="modal-row modal-desc">
                <span className="modal-label">Deskripsi</span>
                <span className="modal-value desc-text">{selected.deskripsi}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Status</span>
                <span className={`badge ${selected.status === 'Approved' ? 'badge-approved' : selected.status === 'Rejected' ? 'badge-rejected' : 'badge-pending'}`}>
                  {selected.status}
                </span>
              </div>
            </div>
            {selected.status === 'Pending' && (
              <div className="modal-footer">
                <button
                  className="modal-btn approve"
                  onClick={() => { handleApprove(selected.id); closeDetail(); }}
                >
                  <CheckCircle size={16} /> Approve
                </button>
                <button
                  className="modal-btn reject"
                  onClick={() => { handleReject(selected.id); closeDetail(); }}
                >
                  <XCircle size={16} /> Reject
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Approval;
