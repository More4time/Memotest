let turnos = 0;
let $primerCuadro = null;
const $tablero = document.querySelector('#tablero');
const $cuadros = $tablero.querySelectorAll('.cuadro');
const $mensajeFinJuego = document.querySelector('#fin-juego');

function configurarJuego() {
  const coloresBase = ['rojo', 'azul', 'verde', 'amarillo', 'negro', 'blanco',"violeta","rosa"];
  const coloresRepetidos = coloresBase.concat(coloresBase);
  configurarCuadros($cuadros, coloresRepetidos);
  manejarEventos($tablero);
}

function manejarEventos($tablero) {

  // $cuadros.forEach(function($cuadro){
  //   $cuadro.onclick = function(){
  //     manejarClickCuadro($cuadro);
  //   }
  // });

  $tablero.onclick = function(e) {
    debugger;
    const $elemento = e.target;
    if ($elemento.classList.contains('cuadro')) {
      manejarClickCuadro($elemento);
    }
  };
}

function configurarCuadros($cuadros, colores) {
  const coloresRandom = colores.sort(function() {
    return 0.5 - Math.random();
  });

  coloresRandom.forEach(function(color, i) {
    $cuadros[i].classList.add(color);
  });
}

function manejarClickCuadro($cuadroActual) {
  mostrarCuadro($cuadroActual);

  if ($primerCuadro === null) {
    $primerCuadro = $cuadroActual;
  } else {

    if ($primerCuadro === $cuadroActual) {
      return;
    }

    turnos++;

    if (cuadrosSonIguales($primerCuadro, $cuadroActual)) {
      eliminarCuadro($primerCuadro);
      eliminarCuadro($cuadroActual);
    } else {
      ocultarCuadro($primerCuadro);
      ocultarCuadro($cuadroActual);
    }
    $primerCuadro = null;
  }
}

function cuadrosSonIguales($cuadro1, $cuadro2) {
  return $cuadro1.className === $cuadro2.className;

  /*
  //Este patrón siempre se puede simplificar:
  if($cuadro1.className === $cuadro2.className){
    return true;
  }else{
    return false;
  }
  */
}

function mostrarCuadro($cuadro) {
  $cuadro.style.opacity = '1';
}

function ocultarCuadro($cuadro) {
  setTimeout(function() {
    $cuadro.style.opacity = '0';
  }, 500);

}

function eliminarCuadro($cuadro) {
  setTimeout(function() {
    $cuadro.parentElement.classList.add('completo');
    $cuadro.remove();
    evaluarFinDeJuego();
  }, 500);
}

function evaluarFinDeJuego() {
  if (document.querySelectorAll('.cuadro').length === 0) {
    $tablero.style.display = 'none';
    $mensajeFinJuego.querySelector('strong').textContent = turnos.toString();
    $mensajeFinJuego.style.display = 'block';
  }
}

configurarJuego();






/*document.querySelector("#boton1r").onclick = function (event){
    event.preventDefault();

    document.querySelector("#cuadro1").className ="cuadro h-100 rojo"
}*/

/*function configurarJuego(){
    const color = ["azul", "rojo"]
    manejarEvento($tablero);
}


function manejarEvento($tablero){
    $tablero.onclick = function(e){
        const $elemento = e.target;
        if($elemento.classlist.contains("cuadro")){
            manejarClickCuadro($elemento)
        }
    }     
}*/