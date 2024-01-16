const num = document.querySelector(".button-1");
let digito1 = document.querySelector(".form-select-1");
let digito2 = document.querySelector(".form-select-2");
let digito3 = document.querySelector(".form-select-3");
let card1 = document.querySelector(".card-1");

num.addEventListener("click", validar);



function validar() {
  let digitoA = digito1.value;
  let digitoB = digito2.value;
  let digitoC = digito3.value;
  let num1 = document.querySelector(".num-1");
  let num2 = document.querySelector(".num-2");
  let num3 = document.querySelector(".num-3");
  const afirma = "Numero Ingresado es el cororecto";
  const nega = "Numero Ingresado es incorrecto";
  const dig1 = 9;
  const dig2 = 1;
  const dig3 = 1;

  if (dig1 == digitoA) {
    num1.innerHTML = afirma;
  } else {
    num1.innerHTML = nega;
  };

   if (dig2 == digitoB) {
     num2.innerHTML = afirma;
   } else {
     num2.innerHTML = nega;
   };

    if (dig3 == digitoC) {
      num3.innerHTML = afirma;
    } else {
      num3.innerHTML = nega;
    };

  console.log(digitoA );
  console.log(digitoB);
  console.log(digitoC);
};

