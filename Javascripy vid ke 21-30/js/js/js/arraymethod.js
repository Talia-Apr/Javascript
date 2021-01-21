let nilai = [
    { nama: "Hani", ipa: 80, bahasa: 90, matematika: 60 },
    { nama: "Lula", ipa: 70, bahasa: 75, matematika: 65 },
    { nama: "Judi", ipa: 90, bahasa: 98, matematika: 75 },
    { nama: "Danu", ipa: 47, bahasa: 96, matematika: 93 },
];

let nama = ["Hani", "Lula", "Judi", "Danu"];

// nama.push("Nina", "Romi");

// console.log(nama.pop());

// console.log(nama.shift());

// nama.unshift("Joni", "Kina");

// console.log(nama.slice(0,3));

// nama.splice(0.3);
// console.log(nama.splice(0.3));

let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat("Nina", "Lani", "Neri"));

// console.log(nilai[0].nama);

// console.log(nama[1]);

// console.log(nama);

// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// };

// nama.forEach(function(a) {
//     console.log(a);
// });

// nama.forEach((a)=>console.log(a));

// nilai.filter(function(a){
//     if (a.ipa > 80) {
//         console.log(a);
//     }
// });

// console.log(nilai);

// nilai.filter((a) => (a.ipa > 47 && a.matematika > 60 ? console.log(a.nama) : null));

// let siswa = nilai.map(function(a){
//     return a.nama;
// });

// let siswa = nilai.map(a => a.nama);

// let siswa = nilai.map(a => [a.nama, a.ipa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

// let hasil = nilai.reduce((a, b) => (a = a + b.matematika), 0);

let hasil = nilai.reduce((a, b) => (a += b.matematika), 0);

console.log(hasil);



