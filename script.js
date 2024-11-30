var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation : {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    }       
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

    // Seleccionar todos los enlaces de navegación
    const enlaces = document.querySelectorAll('nav a');

    // Añadir evento de clic a cada enlace
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        const destino = document.querySelector(this.getAttribute('href')); // Elemento de destino
        const posicion = destino.offsetTop; // Posición vertical del elemento

        // Animar el desplazamiento
        window.scrollTo({
          top: posicion,      // Posición destino
          behavior: 'smooth'  // Efecto de desplazamiento suave
        });
      });
    });

      // Seleccionar el botón
      const botonArriba = document.getElementById('boton-arriba');

      // Detectar el desplazamiento
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Si se desplaza más de 300px
          botonArriba.classList.add('mostrar');
        } else {
          botonArriba.classList.remove('mostrar');
        }
      });
  
      // Hacer clic en el botón
      botonArriba.addEventListener('click', () => {
        window.scrollTo({
          top: 0,         // Volver al inicio
          behavior: 'smooth' // Desplazamiento suave
        });
      });
