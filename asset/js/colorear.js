const color = document.querySelector(".buttoColor");

color.addEventListener("click", cambiarColor);

function cambiarColor() {
  let img = document.querySelector(".imagen");
  console.log(img);

  if (img.style.border == "2px solid red")
  {
    img.style.border = "2px solid white";
  } else {
    img.style.border = "2px solid red";
  }
}
