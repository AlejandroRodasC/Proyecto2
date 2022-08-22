const botonDisminuir = document.getElementById("disminuir");
const botonResetear = document.getElementById("resetear");
const botonAumentar = document.getElementById("aumentar");
const resultado = document.getElementById("resultado");
let operacionEnCurso = 0;

botonDisminuir.addEventListener('click', ()=>{
    operacionEnCurso--;
    resultado.innerHTML = operacionEnCurso;
    if(operacionEnCurso<0){
    resultado.setAttribute("Color", "Red");}
    else if(operacionEnCurso==0){resultado.setAttribute("Color", "Gray");}
});

botonResetear.addEventListener('click', ()=>{
    operacionEnCurso=0;
    resultado.innerHTML = operacionEnCurso;
    if(operacionEnCurso==0){
    resultado.setAttribute("Color", "Gray");}
});

botonAumentar.addEventListener('click', ()=>{
    operacionEnCurso++;
    resultado.innerHTML = operacionEnCurso;
    if(operacionEnCurso>0){
        resultado.setAttribute("Color", "green");}
    else if(operacionEnCurso==0){resultado.setAttribute("Color", "Gray");}
});

