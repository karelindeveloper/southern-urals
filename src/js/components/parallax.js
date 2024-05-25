import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallaxItems = document.querySelectorAll(".parallax__item");
const container = document.querySelector(".parallax");

// Функция для обновления анимации
function updateAnimation() {
  // Получаем высоту контейнера
  const heightContainer = container.offsetHeight - 30;

  // Обновляем анимацию для каждого элемента
  parallaxItems.forEach((item) => {
    const heightItem = item.offsetHeight;
    gsap.to(item, {
      y: heightContainer - heightItem,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".parallax",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });
}

// Вызываем функцию при загрузке страницы
updateAnimation();

// Вызываем функцию при изменении размера окна браузера
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateAnimation, 100);
});
