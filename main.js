const style = document.documentElement.style;
const toggleThemeBtn = document.querySelector(".toggle-theme");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menuAside = document.getElementById("menu-aside");
const reloj = document.getElementById("reloj");

const duracion = 2 * 60 * 60 * 1000;
const inicio = new Date().getTime();
const fin = inicio + duracion;
let theme = localStorage.getItem("theme") || "light";
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

toggleThemeBtn.addEventListener("click", toggleTheme);
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
document.addEventListener("DOMContentLoaded", () => {
  cargarOfertas();
  cargarPosts();
});

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

function countdown() {
  const ahora = new Date().getTime();
  const diferencia = fin - ahora;

  if (diferencia <= 0) {
    clearInterval(intervalo);
    return;
  }
  const horas = Math.floor(diferencia / (60 * 60 * 1000));
  const minutos = Math.floor((diferencia % (60 * 60 * 1000)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (60 * 1000)) / 1000);

  reloj.textContent = `${String(horas).padStart(2, "0")}:${String(
    minutos
  ).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function openMenu() {
  menuAside.style.display = "block";
}

function closeMenu() {
  menuAside.style.display = "none";
}

function toggleTheme() {
  if (theme === "light") {
    setThemeDark();
    theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    setThemeLight();
    theme = "light";
    localStorage.setItem("theme", "light");
  }
}
function setThemeDark() {
  style.setProperty("--color-light", "#3f3f3f");
  style.setProperty("--text-primary", "#f0f0f0");
  style.setProperty("--text-secondary", "#b0b0b0");
  style.setProperty("--color-gray-light", "#4f4f4f");
  openMenuBtn.style.backgroundImage = "url('./assets/menu-icon-light.png')";
  toggleThemeBtn.style.backgroundImage = "url('./assets/sun-icon.png')";
  closeMenuBtn.style.backgroundImage = "url('./assets/close-icon-light.png')";
}

function setThemeLight() {
  style.setProperty("--color-light", "#f7f8fc");
  style.setProperty("--text-primary", "#191825");
  style.setProperty("--text-secondary", "#6e6e6e");
  style.setProperty("--color-gray-light", "##f0f0f0");
  openMenuBtn.style.backgroundImage = "url('./assets/menu-icon.png')";
  toggleThemeBtn.style.backgroundImage = "url('./assets/moon-icon.png')";
  closeMenuBtn.style.backgroundImage = "url('./assets/close-icon.png')";
}

function verifyTheme() {
  if (theme === "light") {
    setThemeLight();
  } else {
    setThemeDark();
  }
}

countdown();
verifyTheme();
const intervalo = setInterval(countdown, 1000);
