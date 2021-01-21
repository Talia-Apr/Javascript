document.querySelector("#klik").addEventListener("click", tampil);

async function tampil() {
    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);

    const data = await res.json();

    // console.log(data);

    let out = "<ul>";
    data.forEach(e => {
        console.log(e.name);
        out += `<li>${e.name}</li>`;
    });
    out += "</ul>";
    document.querySelector("#isi").innerHTML = out;
}