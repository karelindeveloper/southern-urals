import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function updateAnimation() {
  // Определяем значение x в зависимости от разрешения экрана
  var xValue;
  if (window.matchMedia("(min-width: 1224px)").matches) {
    xValue = 2000; // Для разрешения 1024px и выше
  } else {
    xValue = 600; // Для разрешения меньше 768px
  }

  // Обновляем анимацию
  gsap.to(".ornaments__image", {
    x: xValue, // Смещение по оси X
    ease: "none",
    scrollTrigger: {
      trigger: ".ornaments", // Элемент, который будет активировать анимацию
      scrub: true, // Анимация будет проигрываться независимо от направления прокрутки
    },
  });
}

// Вызываем функцию при загрузке страницы
updateAnimation();

// Вызываем функцию при изменении размера окна браузера
window.addEventListener("resize", updateAnimation);
