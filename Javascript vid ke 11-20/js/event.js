function tampil(b) {
    a = document.querySelector("p").innerText = "Belajar Event Javascript"+b;
    // a.innerText = "Belajar Javascript";
    console.log("Belajar Event Javascript");
}

judul.onclick = function () {
    document.querySelector(".isi").innerHTML="Belajar Event melalui id";
    console.log("Belajar Event melalui id");
}