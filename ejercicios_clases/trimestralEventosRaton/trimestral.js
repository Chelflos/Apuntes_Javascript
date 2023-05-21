let parrafo = document.getElementById("parrafo");

parrafo.addEventListener("mouseover", function (event) {
    event.preventDefault();
    parrafo.style.backgroundColor = "pink";
});

parrafo.addEventListener("mouseout", function (event) {
    event.preventDefault();
    parrafo.style.backgroundColor = "white";
});

parrafo.addEventListener("mousedown", function (event) {
    event.preventDefault();
    if (event.button === 0) {
        parrafo.style.backgroundColor = "blue";
    } 
});

parrafo.addEventListener("mouseup", function (event) {
    event.preventDefault();
    if (event.button === 0) {
        parrafo.style.backgroundColor = "pink";
    }
});

parrafo.addEventListener("mousedown", function (event) {
    event.preventDefault();
    if (event.button === 2) {
        parrafo.style.backgroundColor = "yellow";
    }
});

parrafo.addEventListener("mouseup", function (event) {
    event.preventDefault();
    if (event.button === 2) {        
        parrafo.style.backgroundColor = "pink";
    }
});