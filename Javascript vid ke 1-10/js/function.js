function coba() {
    let kalimat = "Belajar Javascript itu mudah";
    console.log(kalimat);
    console.log("Javascript itu mudah sekali");
}

for ( i = 0; i < 2; i++) {
    coba();
}

console.log("------------------------------------------------");

function persegi(lebar, panjang) {
    console.log(lebar);
    console.log(panjang);
}

persegi(7, 8);

console.log("------------------------------------------------");

function rumus(lebar, panjang) {
    luas = lebar * panjang;
    console.log(luas); 
}

rumus(2, 5);

console.log("------------------------------------------------");

function out() {
    return console.log("Output function menggunakan return");
}

out();

console.log("------------------------------------------------");

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}

const tinggi = 4;
let tabung = lingkaran(10) * tinggi;

console.log(tabung);

console.log("------------------------------------------------");

function lewat(a) {
    return a;
}

console.log(lewat(10));


