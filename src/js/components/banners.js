import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Функция для обновления анимации
function updateAnimation() {
  // Определяем значение x в зависимости от разрешения экрана
  let xValue;
  if (window.matchMedia("(min-width: 1224px)").matches) {
    xValue = 1000; // Для разрешения 1024px и выше
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    xValue = 500; // Для разрешения меньше 768px
  } else {
    xValue = 300; // Для разрешения меньше 768px
  }

  gsap.to(".banners__one-image", {
    x: xValue, // Смещение по оси X
    ease: "none", // Тип эффекта анимации
    scrollTrigger: {
      trigger: ".banners__one", // Элемент, который будет активировать анимацию
      scrub: true, // Анимация будет проигрываться независимо от направления прокрутки
      start: "top bottom",
      end: "bottom top",
    },
  });

  gsap.to(".banners__two-image", {
    x: -xValue, // Смещение по оси X
    ease: "none", // Тип эффекта анимации
    scrollTrigger: {
      trigger: ".banners__two", // Элемент, который будет активировать анимацию
      scrub: true, // Анимация будет проигрываться независимо от направления прокрутки
      start: "top bottom",
      end: "bottom top",
    },
  });
}

// Вызываем функцию при загрузке страницы
updateAnimation();

// Оптимизированный обработчик resize
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateAnimation, 100);
});
