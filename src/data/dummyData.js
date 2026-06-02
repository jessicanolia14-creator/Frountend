// =====================
// DUMMY DATA
// =====================

export const dummyUsers = [
  { id: 1, nama: 'Syifa Hadju', email: 'syifa@email.com', role: 'Relawan', status: 'Aktif', tanggal: '12 Mei 2026' },
  { id: 2, nama: 'Amanda Manopo', email: 'amanda@email.com', role: 'Relawan', status: 'Aktif', tanggal: '12 Mei 2026' },
  { id: 3, nama: 'Raffi Ahmad', email: 'raffi@email.com', role: 'Relawan', status: 'Aktif', tanggal: '11 Mei 2026' },
  { id: 4, nama: 'Nicholas Saputra', email: 'nicholas@email.com', role: 'Relawan', status: 'Nonaktif', tanggal: '10 Mei 2026' },
  { id: 5, nama: 'Yayasan Malang Peduli', email: 'ymp@org.com', role: 'Organizer', status: 'Aktif', tanggal: '08 Mei 2026' },
  { id: 6, nama: 'Komunitas Hijau Malang', email: 'khm@org.com', role: 'Organizer', status: 'Aktif', tanggal: '05 Mei 2026' },
  { id: 7, nama: 'Dian Sastro', email: 'dian@email.com', role: 'Relawan', status: 'Aktif', tanggal: '03 Mei 2026' },
  { id: 8, nama: 'Reza Rahadian', email: 'reza@email.com', role: 'Relawan', status: 'Nonaktif', tanggal: '01 Mei 2026' },
];

export const dummyKegiatan = [
  { id: 1, nama: 'Malang Hijau', organizer: 'Komunitas Hijau Malang', lokasi: 'UB Forest, Malang', tanggal: '12 Agustus 2026', kuota: 50, status: 'Berjalan' },
  { id: 2, nama: 'Malang Sehat', organizer: 'Yayasan Malang Peduli', lokasi: 'Klinik UB, Malang', tanggal: '04 Mei 2026', kuota: 30, status: 'Open' },
  { id: 3, nama: 'Malang Berbagi', organizer: 'Yayasan Malang Peduli', lokasi: 'Panti Asuhan', tanggal: '28 Januari 2026', kuota: 20, status: 'Selesai' },
  { id: 4, nama: 'Bersih Sungai Brantas', organizer: 'Komunitas Hijau Malang', lokasi: 'Sungai Brantas, Malang', tanggal: '20 Juli 2026', kuota: 40, status: 'Open' },
  { id: 5, nama: 'Donor Darah Malang', organizer: 'Yayasan Malang Peduli', lokasi: 'Balai Kota Malang', tanggal: '15 Juni 2026', kuota: 100, status: 'Open' },
];

export const dummyApproval = [
  {
    id: 1,
    nama: 'Penanaman Pohon Kota',
    organizer: 'Komunitas Hijau Malang',
    lokasi: 'Alun-alun Malang',
    tanggal: '10 September 2026',
    kuota: 60,
    deskripsi: 'Kegiatan penanaman pohon di area alun-alun untuk menghijaukan kota Malang bersama masyarakat dan relawan.',
    status: 'Pending',
  },
  {
    id: 2,
    nama: 'Pemeriksaan Kesehatan Gratis',
    organizer: 'Yayasan Malang Peduli',
    lokasi: 'Kelurahan Lowokwaru',
    tanggal: '22 Agustus 2026',
    kuota: 80,
    deskripsi: 'Pemeriksaan kesehatan gratis meliputi tensi darah, gula darah, dan konsultasi dokter untuk warga kurang mampu.',
    status: 'Pending',
  },
  {
    id: 3,
    nama: 'Workshop Daur Ulang',
    organizer: 'Komunitas Hijau Malang',
    lokasi: 'SMK Negeri 4 Malang',
    tanggal: '05 Agustus 2026',
    kuota: 35,
    deskripsi: 'Workshop kreasi daur ulang sampah plastik menjadi produk bernilai ekonomis bagi pelajar SMK.',
    status: 'Pending',
  },
  {
    id: 4,
    nama: 'Bazar Sosial Ramadan',
    organizer: 'Yayasan Malang Peduli',
    lokasi: 'Masjid Agung Malang',
    tanggal: '01 Maret 2027',
    kuota: 50,
    deskripsi: 'Bazar sosial dengan harga murah untuk membantu masyarakat di bulan Ramadan.',
    status: 'Pending',
  },
];

export const dummyRecentActivity = [
  { id: 1, nama: 'Malang Hijau', tanggal: '12 Agustus 2026', lokasi: 'UB Forest, Malang', status: 'Berjalan' },
  { id: 2, nama: 'Malang Sehat', tanggal: '04 Mei 2026', lokasi: 'Klinik UB, Malang', status: 'Open' },
  { id: 3, nama: 'Malang Berbagi', tanggal: '28 Januari 2026', lokasi: 'Panti Asuhan', status: 'Selesai' },
];

export const dummyRecentUsers = [
  { id: 1, nama: 'Syifa Hadju', role: 'Relawan', tanggal: '12 Mei 2026' },
  { id: 2, nama: 'Amanda Manopo', role: 'Relawan', tanggal: '12 Mei 2026' },
  { id: 3, nama: 'Raffi Ahmad', role: 'Relawan', tanggal: '11 Mei 2026' },
  { id: 4, nama: 'Nicholas Saputra', role: 'Relawan', tanggal: '10 Mei 2026' },
];
