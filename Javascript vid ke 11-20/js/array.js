let coba = function () {
    return "Coba Function";
}

let buah = [
    'Mangga', 
    'Pisang', 
    'Semangka', 
    'Apel',
    100, 
    coba(),
    (tes = () => "hasil retur arrow function"),
    function name() {
        return "Function di dalam array";
    }, 
    ];

console.log(buah);
console.log(buah[2]);

for(let i in buah){
    console.log(buah[i]);
}

console.log(buah[6]());
console.log(buah[7]());

