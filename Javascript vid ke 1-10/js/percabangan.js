if (false) {
    console.log("Dijalankan ketika benar");
} else {
    console.log("Dijalankan ketika salah");
}

let nilai = 85;
let kkm = 85;
let note1 = "Lulus";
let note2 = "Remidi";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "Nilai salah";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= kkm) {
        console.log(note1);
    } else {
        console.log(note2);
    }
} else {
    console.log(peringatan);
}

