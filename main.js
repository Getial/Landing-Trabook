const ofertas = [
  {
    ciudad: "Madrid",
    pais: "España",
    descripcion:
      "Descubre la vibrante capital de España con nuestras ofertas exclusivas.",
    imagen: "./assets/madrid.png",
    calificacion: 4.5,
    precio: 850,
    precioAnterior: 950,
  },
  {
    ciudad: "Firenze",
    pais: "Italia",
    descripcion:
      "Explora la hermosa arquitectura de Firenze con nuestras ofertas especiales.",
    imagen: "./assets/firenze.png",
    calificacion: 4.7,
    precio: 750,
    precioAnterior: 850,
  },
  {
    ciudad: "Roma",
    pais: "Italia",
    descripcion:
      "Sumérgete en la historia y cultura de Roma con nuestros paquetes exclusivos.",
    imagen: "./assets/roma.png",
    calificacion: 4.8,
    precio: 399,
    precioAnterior: 499,
  },
  {
    ciudad: "Paris",
    pais: "Francia",
    descripcion:
      "Descubre la romántica ciudad de Paris con nuestras ofertas exclusivas.",
    imagen: "./assets/paris.png",
    calificacion: 4.9,
    precio: 599,
    precioAnterior: 699,
  },
  {
    ciudad: "Barcelona",
    pais: "España",
    descripcion:
      "Disfruta de la arquitectura y cultura de Barcelona con nuestras ofertas especiales.",
    imagen: "./assets/london.png",
    calificacion: 4.6,
    precio: 799,
    precioAnterior: 899,
  },
];

const carrusel = document.getElementById("carrusel");

function crearOferta(oferta) {
  const ofertaDiv = document.createElement("div");
  ofertaDiv.classList.add("oferta");

  const imagen = document.createElement("img");
  imagen.src = oferta.imagen;
  imagen.alt = `${oferta.ciudad}, ${oferta.pais}`;
  ofertaDiv.appendChild(imagen);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const titulo = document.createElement("h3");
  titulo.textContent = `${oferta.ciudad}`;
  infoDiv.appendChild(titulo);

  const calificacion = document.createElement("p");
  calificacion.textContent = `⭐ ${oferta.calificacion}`;
  infoDiv.appendChild(calificacion);

  const locationPricingDiv = document.createElement("div");
  locationPricingDiv.classList.add("location-pricing");

  const locationIcon = document.createElement("img");
  locationIcon.src = "./assets/icon-ubication.png";
  locationIcon.alt = "Ubicación";
  locationPricingDiv.appendChild(locationIcon);

  const pais = document.createElement("p");
  pais.textContent = oferta.pais;
  locationPricingDiv.appendChild(pais);

  if (oferta.precioAnterior) {
    const precioAnterior = document.createElement("p");
    precioAnterior.textContent = `$${oferta.precioAnterior}`;
    precioAnterior.classList.add("precio-anterior");
    locationPricingDiv.appendChild(precioAnterior);
  }

  const precioActual = document.createElement("p");
  precioActual.textContent = `$${oferta.precio}`;
  precioActual.classList.add("precio-actual");
  locationPricingDiv.appendChild(precioActual);

  ofertaDiv.appendChild(infoDiv);
  ofertaDiv.appendChild(locationPricingDiv);

  return ofertaDiv;
}
function cargarOfertas() {
  ofertas.forEach((oferta) => {
    const ofertaDiv = crearOferta(oferta);
    carrusel.appendChild(ofertaDiv);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  cargarOfertas();
  const carruselElement = document.getElementById("carrusel");
  if (carruselElement) {
    // Aquí podrías inicializar un carrusel si estás usando una librería específica
    // Por ejemplo, si usas Swiper.js, Slick, etc.
    console.log("Carrusel cargado correctamente.");
  } else {
    console.error("No se encontró el elemento carrusel.");
  }
});
