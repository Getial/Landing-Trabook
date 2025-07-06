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

const posts = [
  {
    titulo: "The Amazing Difference a Year of Travelling.",
    imagen: "./assets/Image4.png",
    fecha: "2024-11-01",
  },
  {
    titulo: "Travel far enough, you meet your self",
    imagen: "./assets/Image5.png",
    fecha: "2024-10-15",
  },
  {
    titulo: "How to Save Money While Visiting Africa.",
    imagen: "./assets/Image6.png",
    fecha: "2024-09-25",
  },
  {
    titulo: "Reflections on 5 Months of Travel: Time to Hang",
    imagen: "./assets/Image7.png",
    fecha: "2024-08-07",
  },
];

// function crearOferta(oferta) {
//   const ofertaDiv = document.createElement("div");
//   ofertaDiv.classList.add("oferta");

//   const buttonBookNow = document.createElement("button");
//   buttonBookNow.textContent = "Book Now";
//   buttonBookNow.classList.add("button-book-now");
//   buttonBookNow.addEventListener("click", () => {
//     alert(`Reservando oferta en ${oferta.ciudad}, ${oferta.pais}`);
//   });
//   ofertaDiv.appendChild(buttonBookNow);

//   const imagen = document.createElement("img");
//   imagen.src = oferta.imagen;
//   imagen.alt = `${oferta.ciudad}, ${oferta.pais}`;
//   ofertaDiv.appendChild(imagen);

//   const infoDiv = document.createElement("div");
//   infoDiv.classList.add("info");

//   const titulo = document.createElement("h3");
//   titulo.textContent = `${oferta.ciudad}`;
//   infoDiv.appendChild(titulo);

//   const calificacion = document.createElement("p");
//   calificacion.textContent = `⭐ ${oferta.calificacion}`;
//   infoDiv.appendChild(calificacion);

//   const locationPricingDiv = document.createElement("div");
//   locationPricingDiv.classList.add("location-pricing");

//   const locationIcon = document.createElement("img");
//   locationIcon.src = "./assets/icon-ubication.png";
//   locationIcon.alt = "Ubicación";
//   locationPricingDiv.appendChild(locationIcon);

//   const pais = document.createElement("p");
//   pais.textContent = oferta.pais;
//   locationPricingDiv.appendChild(pais);

//   const precioAnterior = document.createElement("p");
//   precioAnterior.textContent = `$${oferta.precioAnterior}`;
//   precioAnterior.classList.add("precio-anterior");
//   locationPricingDiv.appendChild(precioAnterior);

//   const precioActual = document.createElement("p");
//   precioActual.textContent = `$${oferta.precio}`;
//   precioActual.classList.add("precio-actual");
//   locationPricingDiv.appendChild(precioActual);

//   ofertaDiv.appendChild(infoDiv);
//   ofertaDiv.appendChild(locationPricingDiv);

//   return ofertaDiv;
// }

function crearOferta(oferta) {
  const ofertaHTML = `
    <div class="oferta carrusel-item">
      <button class="button-book-now">Book Now</button>

      <img src="${oferta.imagen}" alt="${oferta.ciudad}, ${oferta.pais}">
      
      <div class="info">
        <h3>${oferta.ciudad}</h3>
        <p>${oferta.calificacion} ★</p>
      </div>

      <div class="location-pricing">
        <img src="./assets/icon-ubication.png" alt="Ubicación" />
        <p>${oferta.pais}</p>
        <p class="precio-anterior">$${oferta.precioAnterior}</p>
        <p class="precio-actual">$${oferta.precio}</p>
      </div>
    </div>
  `;

  const temp = document.createElement("div");
  temp.innerHTML = ofertaHTML;
  return temp.firstElementChild;
}

function cargarOfertas() {
  const carrusel = document.getElementById("carrusel");

  ofertas.forEach((oferta) => {
    const ofertaDiv = crearOferta(oferta);

    const buttonBookNow = ofertaDiv.querySelector(".button-book-now");
    buttonBookNow.addEventListener("click", () => {
      alert(`Reservando oferta en ${oferta.ciudad}, ${oferta.pais}`);
    });

    carrusel.appendChild(ofertaDiv);
  });
}

function crearPost(post) {
  const postHTML = `
    <div class="post carrusel-item">
      <img src="${post.imagen}" alt="${post.titulo}">
      <div class="post-info">
        <h3>${post.titulo}</h3>
        <p>${new Date(post.fecha).toLocaleDateString()}</p>
      </div>
    </div>
  `;

  const temp = document.createElement("div");
  temp.innerHTML = postHTML;
  return temp.firstElementChild;
}
function cargarPosts() {
  const postsContainer = document.getElementById("posts");
  posts.forEach((post) => {
    const postDiv = crearPost(post);
    postsContainer.appendChild(postDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarOfertas();
  cargarPosts();
});
