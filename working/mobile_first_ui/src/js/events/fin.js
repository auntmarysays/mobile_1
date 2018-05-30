import { bus } from 'partybus';
import $ from 'jquery';
import R from 'ramda';

let unfinished_sections = []
let last_section = '';

const unfinished_sections_filter = (sections) => {
  unfinished_sections = sections.filter(i => !i.completed);
  last_section = R.last(sections).slug;
  console.log('unfinished_sections_filter', unfinished_sections, last_section);
};

const last_page = (slug) => {
  if (slug === last_section) {
    if (unfinished_sections.length === 0) {
      render_complete_message();
    } else {
      render_unfinished_sections();
    }
  }
};

const render_unfinished_sections = () => {
  $('.dynamic-close-complete').hide();
  let buttons = R.map(link_to_section, unfinished_sections);
  $('.dynamic-close-incomplete .section-list').html(buttons.join('<br />'));
};

const link_to_section = (s) => '<button data-nav="' +s.slug+ '" class="btn btn-primary btn-sm">' +s.title+ '</button>';

const render_complete_message = () => {
  $('.dynamic-close-incomplete').hide();
};

bus.on('hucklebucked', last_page);
bus.on('activity::progress::updated', unfinished_sections_filter);

export default null;