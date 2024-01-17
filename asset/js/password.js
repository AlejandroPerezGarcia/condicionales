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
  let mensaje = document.querySelector(".mensaje"); 
  const codigo1 = "Password 1 correcto";
  const codigo2 = "Password 2 correcto";
  const codigo3 = "Password incorrecto";  
  const password1 = 911;
  const password2 = 714;

  let a = digitoA + digitoB + digitoC;

 

  if (password1 == a) {
    console.log(a);
    mensaje.innerHTML = codigo1;
  } else if (password2 == a) {
    mensaje.innerHTML = codigo2;
  }else {
     mensaje.innerHTML= codigo3;
     
  }



};

