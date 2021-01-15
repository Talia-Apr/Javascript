let object = {
    nama : "Talia Aprianti",
    telp : 09848596904,
    array : ['Kursi', 'Lemari', 'Piring'],
    fun : function () {
        return "Function di dalam object";
    },
    boolean : true,
    "coba" : 1828394894
}

console.log(object);
console.log(object.nama);
console.log(object.telp);
console.log(object.array);
console.log(object.array[1]);
console.log(object.fun());
console.log(object.boolean);
console.log(object["coba"]);