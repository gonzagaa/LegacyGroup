window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


const larguraDaTela = window.innerWidth


if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
    cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
  });
} else {
  var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
}

if (larguraDaTela < 800) {
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
} else {
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
}

if (larguraDaTela < 800) {
  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 2,
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
} else {
  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 5,
    cssMode: true,
    spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      loop: true,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  function animateNumbers(el) {
      let target = parseInt(el.getAttribute("data-value"));
      let current = 0;
      let increment = Math.ceil(target / 100); // Define um incremento proporcional ao valor final
      let duration = 8000; // Duração da animação em milissegundos
      let steps = duration / 16; // Aproximadamente 60 FPS (16ms por frame)
      let count = 0;

      let interval = setInterval(() => {
          current += increment;
          count++;

          if (current >= target || count >= steps) {
              current = target;
              clearInterval(interval);
          }

          el.textContent = target >= 1000 ? current.toLocaleString() : current + "%";
      }, 16);
  }

  function startObserving() {
      const elements = document.querySelectorAll(".animated-number");

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateNumbers(entry.target);
                  observer.unobserve(entry.target); // Para a observação após a animação começar
              }
          });
      }, { threshold: 0.5 }); // Inicia quando 50% do elemento estiver visível

      elements.forEach(el => observer.observe(el));
  }

  startObserving();
});
