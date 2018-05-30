/* eslint-env browser, jquery */
import $ from 'jquery';
import { bus } from 'partybus';

const completion_setup = () => {
  $(document).on('click', 'a[name="correct_answer_04"]'
    , () => bus.emit('activity::progress::complete', '04_current_data'));
};

const run = function() {
  $(document).ready(function() {
    bus.emit('activity::ready');  
  });
  console.log("scripts run()");
  return true;
}

export default run;