import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs]);

const swiperBg = new Swiper(".swiper__container-bg", {
  speed: 1000,
});

const swiperTitle = new Swiper(".swiper__container-title", {
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      let str = (index + 1).toString();
      str.length === 1 ? (str = "0" + str) : (str = str);
      return '<span class="' + className + '">' + str + "</span>";
    },
  },
});

swiperBg.on("slideChange", function () {
  swiperTitle.slideTo(swiperBg.realIndex);
});

swiperTitle.on("slideChange", function () {
  swiperBg.slideTo(swiperTitle.realIndex);
});
