/* eslint-env browser, jquery */
import $ from 'jquery';
import { bus } from 'partybus';


const scrollToTop = (immediately = false) => {
  console.log('scroll-to-top ', immediately ? 'immediately' : 'slowly');
  if (immediately) {
    $('html, body').scrollTop(0);
  } else {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }
  bus.emit('home-height');
  bus.emit('window::scroll-to-top::after');
}

$(document).on('click', '#scroll-to-top', () => scrollToTop(false));

bus.on('scroll-to-top', scrollToTop);

bus.on('hucklebucked', () => scrollToTop(true));
bus.on('404page', () => scrollToTop(true));
