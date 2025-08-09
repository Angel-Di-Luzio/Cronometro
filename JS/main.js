//Referencias
const timer = document.getElementById("contador");
const lista = document.getElementById("lista");
const btnI = document.getElementById("btn-i");
const btnR = document.getElementById("btn-r");
const crp = document.getElementById("cuerpo");

//Variables

let mili = 0;
let seg = 0;
let min = 0;
let hrs = 0;

function update(){
timer.innerHTML = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}.${mili.toString().padStart(2, "0")}`;
}

function crearItem(){
    
}

btnI.addEventListener("click", () => {
});

update();
