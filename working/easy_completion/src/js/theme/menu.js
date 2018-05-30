/* eslint-env browser, jquery */
import $ from 'jquery';
import * as most from 'most';

// const menuLink = document.querySelector('.click-toggle-overlay-menu');
// const overlay = document.querySelector('.overlay');
// TODO: rewrite without jQuery, rather snabbdom?
if (document.querySelectorAll('.click-toggle-overlay-menu').length > 0) {
  const toggleMenu = () => $('.overlay').fadeToggle(200);
  most
    .fromEvent('click', document.querySelector('.click-toggle-overlay-menu'))
    .observe(toggleMenu);

  most
    .fromEvent('click', document.querySelector('.overlay'))
    .observe(toggleMenu);
}