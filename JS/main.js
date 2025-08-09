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
let interID = null;
let pausa = true;

function update(){
timer.innerHTML = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}.${mili.toString().padStart(2, "0")}`;
}

function estado(){
    if (pausa){
        btnI.innerHTML = "&#10074;&#10074;";
        btnR.innerHTML = "Vuelta";
        secuencia();
        pausa = false;
    }else{
        btnI.innerHTML = "&#11208;";
        btnR.innerHTML = "&#8634;";
        secuencia();
        pausa = true;
    }
}

function secuencia(){
    if (!interID){
        interID = setInterval(() => {
            mili++;
            limite();
            update();
        },10)
    }else if (interID){
        clearInterval(interID);
        interID = null;
    }
}

function limite(){
    if (mili > 99){
        mili = 0;
        seg++;
    }else if (seg > 59){
        min++;
        seg = 0
    }else if (min > 59){
        hrs++;
        min = 0;
    }else if (hrs >= 24){
        hrs = 24;
        min = seg = mili = 0;
    }
}

btnI.addEventListener("click", () => {
    estado();
});

update();
