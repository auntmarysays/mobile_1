/* eslint-env browser, jquery */
import $ from 'jquery';
import { bus } from 'partybus';

const render = (manifest) => {
  const render_sections = (sections) => {
    let pages = manifest.map((item) => sections[item.slug]);
    document.getElementById('page-mount').innerHTML = pages;
    bus.emit('swiper::init');
  };
  bus.on('sections::render', render_sections);
};

export default render;