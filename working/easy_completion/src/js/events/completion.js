/* eslint-env browser, jquery */
import $ from 'jquery';
import { bus } from 'partybus';
import Nanobar from 'nanobar';

var options = {
	classname: 'my-class',
  id: 'my-id',
	target: document.getElementById('progress-bar')
};

var nanobar = new Nanobar( options )

const completion_setup = () => {
  $(document).on('click', 'a[name="correct_answer_04"]'
    , () => bus.emit('activity::progress::complete', '04_current_data'));
};

const update_progress = (sections) => {
  let percent = Math.ceil( 100 * (sections.filter(i => i.completed).length / sections.length));
  console.log("update_progress", percent,"%");
  update_progress_bar(percent);
}

const update_progress_bar = (percent) => {
  nanobar.go(percent+1);
}

bus.on('activity::ready', completion_setup);
bus.on('activity::progress::updated', update_progress);

export default null;
