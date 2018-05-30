/* eslint-env browser, jquery */
import { bus } from 'partybus';
import Nanobar from 'nanobar';

export default null;

const nanobar = new Nanobar({
  classname: 'my-class',
  id: 'my-id',
  target: document.getElementById('progress-bar')
});

const update_progress = (sections) => {
  let percent = Math.ceil( 100 * (sections.filter(i => i.completed).length / sections.length));
  console.log("update_progress", percent,"%");
  update_progress_bar(percent);
};

const update_progress_bar = (percent) => nanobar.go(percent+1);

bus.on('activity::progress::updated', update_progress);