const $btnRojo = document.querySelector("#rojo");
const $btnAzul = document.querySelector("#azul");
const $btnAmarillo = document.querySelector("#amarillo");
const $btnVerde = document.querySelector("#verde");

function clickColor($componente, colorOriginal, colorBrillante) {
  setTimeout(() => ($componente.style.backgroundColor = colorOriginal), 500);
  $componente.style.backgroundColor = colorBrillante;

  return colorBrillante;
}

$btnRojo.onclick = function () {
  const colorPresionado = clickColor($btnRojo, "rgb(255, 119, 119)", "red");
  console.log(colorPresionado);
};

$btnAzul.onclick = function () {
  const colorPresionado = clickColor($btnAzul, "rgb(141, 141, 252)", "blue");
  console.log(colorPresionado);
};

$btnAmarillo.onclick = function () {
  const colorPresionado = clickColor(
    $btnAmarillo,
    "rgb(254, 254, 141)",
    "yellow"
  );
  console.log(colorPresionado);
};
$btnVerde.onclick = function () {
  const colorPresionado = clickColor($btnVerde, "rgb(151, 253, 151)", "green");
  console.log(colorPresionado);
};

function animacionGameOver() {
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
  const tiempo_vuelta = 350
  const cantidad_vueltas = 3
  for (let j = 0; j < cantidad_vueltas; j++) {
    let tiempo_1 = 0;
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const a = i % luces.length;
        setTimeout(() => {
          luces[a]()
          /* console.log(luces[a]() +" tiempo vuelta "+j+": "+ tiempo_vuelta * i); */
        }, tiempo_vuelta * i);
        tiempo_1 = tiempo_1 + tiempo_vuelta * i;
      }
    }, tiempo_1 + tiempo_vuelta * 8 * j);
  }
}
// animacionGameOver();


