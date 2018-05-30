/* eslint-env browser, jquery */
import R from 'ramda';
import $ from 'jquery';

const lock_progression = false;

const toMatrix = (arr, width) =>
    arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key])
      : rows[rows.length-1].push(key)) && rows, []);

const toMatrixCols = (arr, width) => {
  let matrix = [];
  let copy = arr.slice(0); //clone the array (cause splice is destructive)
  let height = Math.ceil(arr.length / width);
  for (var i = 0; i < width; i++) {
    matrix[i] = copy.splice(0, height);
  }
  return matrix;
}

const build_the_menu = (progress) => {
  console.log("build_navigation_menu",progress);
  let navigation_columns = toMatrixCols(progress, 1);
  const slug_to_index = (slug) => progress.findIndex(el => el.slug === slug);

  let menus = navigation_columns.map( col => {
    let items = col.map( item => {
      let completed = ' data-completed="' + (item.completed == true) + '"';
      let nav = lock_progression && !item.completed ? '' : ' data-swiper-go="' + slug_to_index(item.slug) + '"';
      let classes = ['white-txt','nav-item'];
      classes.push((lock_progression && !item.completed) ? 'disabled' : 'nav-item-modal-close');
      return '<li><a class="' + classes.join(' ') + '" role="button"' + completed + nav + '>' + item.title + '</a></li>';
    });
    return '<div class="col-md-12"><ul class="list-style-none">' + items.join('') + '</ul></div>';
  });

  $('#build_navigation .row').html(menus);
  console.log("build_navigation_menu() is done");
};

const build_navigation = function(sections) {
  build_the_menu(window.progress_cache);
  $(document).on('click', '.nav-item-modal-close', function() {
    $('#menu').modal('hide');
  });

  return true;
}

bus.on('activity::progress::updated', build_navigation);
$(document).on('click', '[data-swiper-go]', (event) => {
  const slide_index = $(event.target).closest('[data-swiper-go]').attr('data-swiper-go');
  bus.emit('swiper::goto', slide_index);
});


export default null;
