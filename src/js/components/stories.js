import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs]);

const swiperStories = new Swiper(".swiper__container-stories", {
  speed: 1200,
  effect: "slide", // или любой другой эффект, который вам нужен
  loop: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
