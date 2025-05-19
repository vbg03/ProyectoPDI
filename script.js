// Esperar a que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById('uploadFoto');
  const userPhoto = document.getElementById('userPhoto');

  uploadInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        userPhoto.src = e.target.result;
        userPhoto.style.display = 'block';
      };

      reader.readAsDataURL(file);
    }
  });
});

document.getElementById("uploadFoto").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      const userPhoto = document.getElementById("userPhoto");
      userPhoto.src = e.target.result;
      userPhoto.style.display = "block";

      // Ocultar el texto
      document.getElementById("previewText").style.display = "none";

      // Activar botón de generar
      document.getElementById("generarBtn").disabled = false;
    };
  }
});

// Inicializa ScrollSmoother
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5, // velocidad del suavizado
  effects: true
});

// Animaciones de entrada
gsap.from(".header h1", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".header p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".upload-box", {
  scrollTrigger: {
    trigger: ".upload-box",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".calima-contenido", {
  scrollTrigger: {
    trigger: ".calima-contenido",
    start: "top 90%",
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from(".quimbaya-contenido", {
  scrollTrigger: {
    trigger: ".quimbaya-contenido",
    start: "top 90%",
  },
  x: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});
