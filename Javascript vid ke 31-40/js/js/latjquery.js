// $( document ).ready(function() {
//     console.log( "ready!" );
// });

$(function() {
    console.log( "siap!" );
});

$(function() {
    $("#isi").html("<h1>Belajar Jquery</h1>");

    $("button").click(function (e) { 
        e.preventDefault();
        alert("Belajar Javascript");
    });

    $("#isi").mouseover(function () { 
        alert("Mouse Leave");
        console.log("mouse");
    });
});