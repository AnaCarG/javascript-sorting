const elementos = document.querySelectorAll("button");

console.log(elementos)

elementos.forEach(
    (elemento) => elemento.addEventListener("click", activo)
)
// add y remove

function activo(a) {
    a.target.style.color = "yellow";
    const categoria = a.target.dataset.categoria; console.log(categoria);
    a.target.textContent = categoria;
}

const ilustraciones = document.querySelectorAll("ilustraciones")

console.log(ilustraciones)

if (ilustraciones) {
  style.display = ""
}
else{
    style.display = "none"
}

 