/* ===== Tugas Pertemuan 5: JavaScript pada Website Portofolio ===== */

// Data proyek: array berisi object
const daftarProyek = [
  { judul: 'Portofolio HTML', deskripsi: 'Halaman portofolio pribadi dengan elemen HTML dasar.' },
  { judul: 'Portofolio CSS', deskripsi: 'Penataan tampilan portofolio memakai CSS.' },
  { judul: 'Praktikum Git', deskripsi: 'Latihan branch, merge, dan menyelesaikan konflik.' },
  { judul: 'Instalasi Laravel 13', deskripsi: 'Menyiapkan lingkungan Laravel dan membuat rute pertama.' }
];

// Data pengalaman: array berisi object
const daftarPengalaman = [
  { posisi: 'Anggota organisasi', organisasi: 'OSIS', tahun: '2020' },
  { posisi: 'Anggota organisasi', organisasi: 'Tahungoding', tahun: '2024' }
];

// Menghasilkan warna acak dalam format hex, misalnya #a1b2c3
function generateRandomColor() {
  const angka = Math.floor(Math.random() * 16777215);
  return '#' + angka.toString(16).padStart(6, '0');
}

// Mengubah warna latar belakang halaman secara acak
function changeBackgroundColor() {
  const warna = generateRandomColor();
  document.body.style.backgroundColor = warna;
  console.log('Warna latar:', warna);
}

// Menentukan sapaan sesuai jam saat halaman dibuka
function getSapaan() {
  const jam = new Date().getHours();
  if (jam >= 4 && jam < 11) {
    return 'Selamat pagi';
  } else if (jam >= 11 && jam < 15) {
    return 'Selamat siang';
  } else if (jam >= 15 && jam < 18) {
    return 'Selamat sore';
  } else {
    return 'Selamat malam';
  }
}

// Menampilkan pesan sambutan
function showWelcomeMessage() {
  alert(getSapaan() + '! Selamat datang di portofolio saya. Saya Rakean, mahasiswa Informatika yang sedang belajar pengembangan web.');
}

// Menampilkan daftar proyek sebagai kartu
function displayProjects() {
  const wadah = document.getElementById('daftar-proyek');
  if (!wadah) return;

  wadah.innerHTML = daftarProyek.map(function (proyek) {
    return `<div class="kartu"><h3>${proyek.judul}</h3><p>${proyek.deskripsi}</p></div>`;
  }).join('');
}

// Menampilkan pengalaman sebagai baris tabel
function displayExperience() {
  const isiTabel = document.getElementById('isi-pengalaman');
  if (!isiTabel) return;

  let baris = '';
  for (const item of daftarPengalaman) {
    baris += `<tr><td>${item.posisi}</td><td>${item.organisasi}</td><td>${item.tahun}</td></tr>`;
  }
  isiTabel.innerHTML = baris;
}

// Dijalankan setelah seluruh halaman selesai dimuat
window.onload = function () {
  changeBackgroundColor();

  // Jeda singkat supaya browser sempat menampilkan warna latar sebelum kotak pesan muncul
  setTimeout(function () {
    showWelcomeMessage();
    displayProjects();
    displayExperience();
  }, 300);
};