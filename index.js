// // //contoh pembuatan variable
// //**contoh variable 1**
let angka = 10;
const nama = "najmudin";
var status = true;
console.log(nama);

// //**contoh variable 2**
let angka1 = 5;
let angka2 = 7;
let hasilpenjumlahan = angka1 + angka2;
console.log("Hasil Penjumlahan:", hasilpenjumlahan);

// // Contoh variabel dengan tipe data object
let pengguna = {
  namaDepan: "John",
  namaBelakang: "Doe",
  umur: 30,
};
console.log(pengguna.namaDepan + " " + pengguna.namaBelakang);
//===================================================================

// //**contoh pengunaan konstanta**
// //konstanta 1

const PANJANG_NAMA_MAX = 20;
const USIA_MINIMAL = 18;

let namaPengguna = "John Doe";
let usiaPengguna = 25;

if (namaPengguna.length <= PANJANG_NAMA_MAX) {
  console.log(`Nama pengguna (${namaPengguna}) valid.`);
} else {
  console.log(`Nama pengguna terlalu panjang.`);
}

if (usiaPengguna >= USIA_MINIMAL) {
  console.log(`Pengguna memiliki usia yang memenuhi syarat.`);
} else {
  console.log(`Pengguna belum mencapai usia minimal.`);
}

// //*konstanta 2*/
//menghitung luas lingkaran
const PI = 3.14;
let jariJari = 5;

let luasLingkaran = PI * Math.pow(jariJari, 2);
console.log(
  `Luas lingkaran dengan jari-jari ${jariJari} adalah ${luasLingkaran}`
);

// //*konstanta 3*/
//menggunakan konstanta sebagai status program
const STATUS_PENDING = "PENDING";
const STATUS_APPROVED = "APPROVED";
const STATUS_REJECTED = "REJECTED";

let statusPengajuan = STATUS_PENDING;

if (statusPengajuan === STATUS_PENDING) {
  console.log("Pengajuan masih menunggu persetujuan.");
} else if (statusPengajuan === STATUS_APPROVED) {
  console.log("Pengajuan telah disetujui.");
} else if (statusPengajuan === STATUS_REJECTED) {
  console.log("Pengajuan ditolak.");
} else {
  console.log("Status pengajuan tidak valid.");
}

/*konstanta 4*/
//membuat pola bintang (stars) dengan konstanta
const JUMLAH_BARIS = 5;

for (let i = 1; i <= JUMLAH_BARIS; i++) {
  let bintang = "";

  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }

  console.log(bintang);
}
//===================================================================

/*konditional if-else*/
// if-else 1
// let nilai = 75;

// if (nilai >= 70) {
//   console.log("Anda lulus.");
// } else {
//   console.log("Anda tidak lulus.");
// }

//if-else 2
let nilai = 75;

if (nilai >= 90) {
  console.log("Anda mendapatkan nilai A");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai C");
} else {
  console.log("Anda mendapatkan nilai D");
}
// //===================================================================
// /*Struktu pengkondisian switch case*/
let hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Minggu";
    break;
  case 2:
    namaHari = "Senin";
    break;
  case 3:
    namaHari = "Selasa";
    break;
  case 4:
    namaHari = "Rabu";
    break;
  case 5:
    namaHari = "Kamis";
    break;
  case 6:
    namaHari = "Jumat";
    break;
  case 7:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

// console.log(`Hari ke-${hari} adalah ${namaHari}.`);

//===================================================================
// contoh penggunaan Array
let buah = ["Apel", "Jeruk", "Pisang", "Mangga"];

buah.forEach(function (item, index) {
  console.log(`Buah ke-${index + 1}: ${item}`);
});

// // contoh penggunaan Objek
let daftarMahasiswa = [
  {
    nama: "John Doe",
    umur: 22,
    jurusan: "Informatika",
    nilai: [85, 90, 75, 92, 88],
  },
  {
    nama: "Jane Doe",
    umur: 23,
    jurusan: "Sistem Informasi",
    nilai: [90, 85, 88, 75, 95],
  },
  {
    nama: "Bob Smith",
    umur: 20,
    jurusan: "Matematika",
    nilai: [78, 92, 80, 85, 70],
  },
];

daftarMahasiswa.forEach(function (mahasiswa, index) {
  let totalNilai = mahasiswa.nilai.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let rataRataNilai = totalNilai / mahasiswa.nilai.length;

  console.log(`Mahasiswa ke-${index + 1}`);
  console.log(`Nama: ${mahasiswa.nama}`);
  console.log(`Umur: ${mahasiswa.umur}`);
  console.log(`Jurusan: ${mahasiswa.jurusan}`);
  console.log(`Rata-rata Nilai: ${rataRataNilai}`);
  console.log("-------------------");
});

// contoh penggunaan Perulangan (Loop)
//Menampilkan angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// //Menampilkan bilangan genap dari 1 sampai 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// contoh penggunaan Fungsi
function buatDataSiswa(nama, mataPelajaran, nilai) {
  let dataSiswa = {
    nama: nama,
    mataPelajaran: mataPelajaran,
    nilai: nilai,
  };

  return dataSiswa;
}

let siswa1 = buatDataSiswa("Budi Hartono", "Matematika", 85);
let siswa2 = buatDataSiswa("Jaenal", "Bahasa Inggris", 90);
let siswa3 = buatDataSiswa("Bob Smith", "Fisika", 78);

console.log(siswa1);
console.log(siswa2);
console.log(siswa3);
