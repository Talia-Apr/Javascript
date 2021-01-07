const hari = 1;
let hasil;

switch (hari) {
    case 1:
    hasil = "Senin";
    break;
    case 2:
    hasil = "Selasa";
    break;
    case 3:
    hasil = "Rabu";
    break;
    case 4:
    hasil = "Kamis";
    break;
    case 5:
    hasil = "Jum'at";
    break;
    case 6:
    hasil = "Sabtu";
    break;
    case 7:
    hasil = "Minggu";
    break;

    default:
    hasil = "Tidak Ditemukan";
    break;
}

console.log(hasil);

const bulan = "April";
let M;

switch (bulan) {
    case "Januari":
    M = 1;
    break;
    case "Februari":
    M = 2;
    break;
    case "Maret":
    M = 3;
    break;
    case "April":
    M = 4;
    break;
    case "Mei":
    M = 5;
    break;
    case "Juni":
    M = 6;
    break;

    default:
    M = "Belum Terdaftar";
    break;
}

console.log(M);