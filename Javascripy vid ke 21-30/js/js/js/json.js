document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let url = "js/tblmenu.json";
    fetch(url)

    // .then(response => response.json())
    // .then(json => console.log(json))

    .then(function (ret) {
        return ret.json();
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table> <th>Menu</th> <th>Harga</th> <th>Varian</th>";
        data.forEach(e => {
            output += ` <tr>
                <td>${e.menu}</td>
                <td>${e.harga}</td>
                <td>${e.varian[0]}</td>
            </tr>`;
        });
            output += "</table>";
            document.querySelector("#isi").innerHTML= output;
    })
}

// let tblmenu = [
//     { 
//         "idmenu" : 28, 
//         "idkategori" : 31,  
//         "menu" : "Apel", 
//         "harga" : 17000,
//         "varian" : ["merah", "hijau", "oren"],
//         "stok" : true,
//         "keterangan" : null
//     },

//     { 
//         "idmenu" : 46, 
//         "idkategori" : 29,  
//         "menu" : "Ayam Bakar", 
//         "harga" : 10000,
//         "varian" : ["pedas", "sedang", "tidak pedas"],
//         "stok" : false,
//         "keterangan" : null
//     }
// ]

// console.log(tblmenu[0].menu);