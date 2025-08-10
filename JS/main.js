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

let textMili = "";
let textSeg = "";
let textMin = "";
let textHrs = "";
let v = 0;

let tr, td1, td2;

let interID = null;
let pausa = true;
let modo = true;
//false = vueltas, true = reinicio

function update(){
    textMili = mili.toString().padStart(2, "0");
    textSeg = seg.toString().padStart(2, "0");
    textMin = min.toString().padStart(2, "0");
    textHrs = hrs.toString().padStart(2, "0");
    timer.innerHTML = `${textHrs}:${textMin}:${textSeg}.${textMili}`;
}

function estado(){
    if (pausa){
        btnI.innerHTML = "&#10074;&#10074;";
        btnR.innerHTML = "Vuelta";
        secuencia();
        pausa = false;
        modo = false;
    }else{
        btnI.innerHTML = "&#11208;";
        btnR.innerHTML = "&#8634;";
        secuencia();
        pausa = true;
        modo = true;
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

function reiniciar(){
    if (mili > 0 || seg > 0 || min > 0 || hrs > 0){
        mili = seg = min = hrs = 0;
        update();
    }

    crp.innerHTML = "";
    v = 0;

}

function vueltas(){
    v++;
    const vlt = v;
    const tmp = `${textHrs}:${textMin}:${textSeg}.${textMili}`;

    tr = document.createElement("tr");
    crp.appendChild(tr);
    td1 = document.createElement("td");
    td2 = document.createElement("td");

    td1.innerHTML = vlt;
    td2.innerHTML = tmp;

    tr.appendChild(td1);
    tr.appendChild(td2);
}

btnI.addEventListener("click", () => {
    estado();
});
//false = vueltas, true = reinicio
btnR.addEventListener("click", () => {
    if (modo){
        reiniciar();
    }else{
        vueltas();
    }
})
    
update();
