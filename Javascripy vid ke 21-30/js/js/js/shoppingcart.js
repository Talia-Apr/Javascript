let tblmenu = [
    {idmenu : 28, idkategori : 31,  menu : "Apel", gambar : "apel.jpg", harga : 17000},
    {idmenu : 46, idkategori : 29,  menu : "Ayam Bakar", gambar : "ayambakar.jpg", harga : 10000},
    {idmenu : 37, idkategori : 29,  menu : "Bakso", gambar : "bakso.jpg", harga : 15000},
    {idmenu : 34, idkategori : 32,  menu : "Cireng Rujak", gambar : "cireng.jpg", harga : 10000},
    {idmenu : 45, idkategori : 30,  menu : "Es Degan Ori", gambar : "esdegan.jpg", harga : 7000},
];

let tampil = tblmenu.map(function (kolom){
    return `<div class="produk-content">

    <div class="image">
      <img src="img/${kolom.gambar}"/>
    </div>

    <div class="tittle">
      <h2>${kolom.menu}</h2>
    </div>

    <div class="harga">
      <h2>Rp.${kolom.harga}</h2>
    </div>

    <div class="btn-beli">
      <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>

  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let cart = [];

let btnbeli = document.querySelectorAll(".btn-beli > button");
for (let i = 0; i < btnbeli.length; i++) {
  btnbeli[i].onclick = function () {
    // console.log(btnbeli[i].dataset["idmenu"]);
    // cart.push(btnbeli[i].dataset["idmenu"]);

    tblmenu.filter(function(a){
      if (a.idmenu == btnbeli[i].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });

  };
}

// console.log(cart);