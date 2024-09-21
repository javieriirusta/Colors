let contador = 0;
function cambiarFondo() {
    var coloresAzar = ["red", "blue", "yellow", "green"];
    const cambioBody = document.getElementById("color");
    const boton = document.getElementById("cambiarFondo");
    const botonAzar = document.getElementById("cambiarFondoAzar");
    const selector = document.getElementById("seleccionColor");
    const botonLoco = document.getElementById("botonLoco");
boton.addEventListener('click', function() {
        cambioBody.style.backgroundColor = "blue";
        selector.value = cambioBody.style.backgroundColor;
 })
botonAzar.addEventListener('click', function() {
        cambioBody.style.backgroundColor =  coloresAzar[Math.floor(Math.random() * coloresAzar.length)];
        selector.value = cambioBody.style.backgroundColor;  
 })
selector.addEventListener('change', function() {
   cambioBody.style.backgroundColor = this.value;
}, false);

botonLoco.addEventListener('click', function() {
  let interval = setInterval(function() {
    if (contador < 10) {
        contador++;
        cambioBody.style.backgroundColor = coloresAzar[Math.floor(Math.random() * coloresAzar.length)];
        selector.value = cambioBody.style.backgroundColor;  
    } else {
        clearInterval(interval);
        contador = 0;
    }
}, 500);
})
}
  
cambiarFondo();
