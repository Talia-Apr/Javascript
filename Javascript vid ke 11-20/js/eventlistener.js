function coba() {
    a = document.querySelector(".isi").innerHTML = "Belajar EventListener";
    console.log("Mencoba EventListener");
}

// judul.addEventListener("click", coba);

// judul.onclick = coba;

judul.onmouseover = function () {
    console.log("EventListener itu mudah");
}