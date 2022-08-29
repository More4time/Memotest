
let turnos = 0
let $primerCuadro = null;
const $tablero = document.querySelector("#tablero");
const $cuadros = $tablero.querySelectorAll(".cuadro")
let $cuadro1 = document.querySelector("#cuadro1")
let $cuadro2 = document.querySelector("#cuadro2")
let $cuadro3 = document.querySelector("#cuadro3")
let $cuadro4 = document.querySelector("#cuadro4")
let $cuadro5 = document.querySelector("#cuadro5")
let $cuadro6 = document.querySelector("#cuadro6")
let $cuadro7 = document.querySelector("#cuadro7")
let $cuadro8 = document.querySelector("#cuadro8")
let $cuadro9 = document.querySelector("#cuadro9")

function configurarJuego() {
    
    manejarEventos($tablero);}


function aumentoTurno(){
  let turno = 0;  
  for(turno=0; turno<9; turno++);
}

function manejarEventos($tablero) {
    $tablero.onclick = function(e) {
      
      
      const $elemento = e.target;
    
      if($elemento.classList.contains('cuadro') && turnos % 2 === 0){
        pintarverde($elemento);
      }
      else if($elemento.classList.contains('cuadro') && turnos % 2 !== 0){
        pintarrojo($elemento);
      }
      
      turnos++
      
      ganar()
      
    }
      
};

  function pintarrojo($cuadros){  
    $cuadros.classList.add("rojo")
    
  }

  function pintarverde($cuadros){
    $cuadros.classList.add("verde")
  }



  function ganar(){
    let $cuadro1 = document.querySelector("#cuadro1")
    let $cuadro2 = document.querySelector("#cuadro2")
    let $cuadro3 = document.querySelector("#cuadro3")
    
    if($cuadro1.classList.contains('rojo') && $cuadro2.classList.contains('rojo') && $cuadro3.classList.contains('rojo')){
      console.log("ganaste")
    }
    else{
      console.log("Siguiente turno")
    }
  }

  

  configurarJuego()
