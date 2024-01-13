const contardor = document.querySelector(".button-1");
let valor1 = document.querySelector(".form-control-1");
let valor2 = document.querySelector(".form-control-2");
let valor3 = document.querySelector(".form-control-3");

contardor.addEventListener("click", contarStiker);

function contarStiker() {
  let texto = document.querySelector(".texto-h3");
  let numero1 = valor1.value;
  let numero2 = valor2.value;
  let numero3 = valor3.value;

  const numero4 = +numero1 + +numero2 + +numero3;
  if (numero4 <= 10) {
    texto.innerHTML = "llevas : " + numero4 + " de stiker";
  } else {
    texto.innerHTML = "Llevas demasiados stiker";
  }  
}
