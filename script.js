  console.log("Hola Mundo");

// variables let y const

  let edad = 53; // number

  const nombre = "Cristian"; // string

  const titulo = document.querySelector("h1");

  console.log(titulo);

console.log(titulo.textContent);

// titulo.textContent = "adiós mundo";

const boton = document.querySelector(".btn");

console.log(boton);

boton.addEventListener("click" , cambiarTitulo);

function cambiarTitulo(){
    titulo.textContent = "Adiós mundo";
    titulo.style.color = "#fff";
    titulo.classList.toggle("rojo");
}