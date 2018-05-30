import Swiper from 'swiper';
import { bus } from 'partybus';

let mainSwiper, swiperV;

const swiper_setup = () => {
  mainSwiper = new Swiper('.swiper-container-h', {
    spaceBetween: 75,
    pagination: {
      el: '.swiper-pagination-h',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '#nav-next',
      prevEl: '#nav-prev',
    },
  });

  mainSwiper.on('slideChange', () => bus.emit('hucklebuck', mainSwiper.activeIndex) );
  
  swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 75,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: false,
    },
  });
};

const disable_next = () => mainSwiper.allowSlideNext = false;
const enable_next = () => mainSwiper.allowSlideNext = true;
const goto_slide = (i) => mainSwiper.slideTo(i, 300, true);



bus.on('swiper::init', swiper_setup);
bus.on('hucklebuck::disable_next', disable_next);
bus.on('hucklebuck::enable_next', enable_next);
bus.on('swiper::goto', goto_slide);