const $btnRojo = document.querySelector("#rojo");
const $btnAzul = document.querySelector("#azul");
const $btnAmarillo = document.querySelector("#amarillo");
const $btnVerde = document.querySelector("#verde");
const $btnStart = document.querySelector("#btn-start");
const $puntaje = document.querySelector("#puntaje");

const luces = [
  () => {
    return clickColor($btnRojo, "rgb(255, 119, 119)", "red");
  },
  () => {
    return clickColor($btnAzul, "rgb(141, 141, 252)", "blue");
  },
  () => {
    return clickColor($btnAmarillo, "rgb(254, 254, 141)", "yellow");
  },
  () => {
    return clickColor($btnVerde, "rgb(151, 253, 151)", "green");
  },
];

let habilitado = false;
let listaMemoria = [];
let listaClickUsuario = [];
let puntaje = 0;
let nroTurno = 0;
let indiceTouch = 0;

function clickColor($componente, colorOriginal, colorBrillante) {
  setTimeout(() => ($componente.style.backgroundColor = colorOriginal), 500);
  $componente.style.backgroundColor = colorBrillante;

  return colorBrillante;
}

$btnRojo.onclick = function () {
  comprobarIgualdadColor(0);
};
$btnAzul.onclick = function () {
  comprobarIgualdadColor(1);
};
$btnAmarillo.onclick = function () {
  comprobarIgualdadColor(2);
};
$btnVerde.onclick = function () {
  comprobarIgualdadColor(3);
};

function comprobarIgualdadColor(indiceColor) {
  if (habilitado) {
    const color = luces[indiceColor]();
    if (listaMemoria[indiceTouch] === color) {
      if (indiceTouch < listaMemoria.length - 1) {
        // SI ACIERTA TODOS LOS COLORES
        indiceTouch++;
        listaClickUsuario.push(color);
      } else {
        puntaje++;
        nuevoTurno();
      }
    } else {
      gameOver()
    }
  }
}

function gameOver() {
  

  puntaje = 0;
  habilitado = false;
  animacionGameOver()
}

//
function animacionGameOver() {
  const tiempo_vuelta = 350;
  const cantidad_vueltas = 3;
  for (let j = 0; j < cantidad_vueltas; j++) {
    let tiempo_1 = 0;
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const a = i % luces.length;
        setTimeout(() => {
          luces[a]();
        }, tiempo_vuelta * i);
        tiempo_1 = tiempo_1 + tiempo_vuelta * i;
      }
    }, tiempo_1 + tiempo_vuelta * 8 * j);
  }
}
// animacionGameOver();

function generarColorAleatorio() {
  const random = Math.trunc(Math.random() * 100) % 4;
  return luces[random]();
}

function nuevaPartida() {
  listaMemoria = [];
  nroTurno = 0;
  puntaje = 0;
  nuevoTurno();
}

function nuevoTurno() {
  $puntaje.innerHTML = "Puntaje: " + puntaje;
  listaClickUsuario = [];
  nroTurno++;
  indiceTouch = 0;

  setTimeout(() => {
    listaMemoria.push(generarColorAleatorio());
    habilitado = true;
  }, 800);
}

$btnStart.onclick = function () {
  nuevaPartida();
};
