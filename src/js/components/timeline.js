import Swiper, { Navigation, Scrollbar } from "swiper";

Swiper.use([Navigation, Scrollbar]);

const swiperTimeline = new Swiper(".tourism__timeline-mobile", {
  speed: 1200,
  slidesPerView: 2,
  slideToClickedSlide: true,
  scrollbar: {
    el: ".tourism__timeline-mobile__scrollbar",
    draggable: true,
    dragSize: 100,
    hide: false,
  },
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1.5,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMinimumVelocity: 0.1,
  freeModeSticky: true,
});
