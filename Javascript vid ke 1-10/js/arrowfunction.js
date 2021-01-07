let fungsi = function (nama) {
    console.log("Belajar function" +" "+ nama);
}

fungsi("Kinan");

console.log("-------------------------------");

let contoh = (nama) => {
    console.log("Belajar function" +" "+ nama);
}

contoh("Hani");

console.log("-------------------------------");

let tambah = function (a, b){
    return a + b;
}

console.log(tambah(2, 3));

console.log("-------------------------------");

let plus = (a, b) => a + b;
console.log(plus(7, 3));

console.log("-------------------------------");

let hasil = (a) => a * 2;
console.log(hasil(7));

console.log("-------------------------------");

let kalimat = () => console.log("Ini kalimat");
kalimat();

console.log("-------------------------------");

let kelompok = () => {
    console.log("Satu");
    console.log("Dua");
    console.log("Tiga");
    console.log("Empat");
}
kelompok();

console.log("-------------------------------");

let nilai = 6;
let uji = nilai < 7 ? () => predikat="Gagal" : predikat="Lulus";
console.log(uji());


