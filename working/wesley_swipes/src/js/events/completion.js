/* eslint-env browser, jquery */
import $ from 'jquery';
import { bus } from 'partybus';

export default null;

const completion_setup = () => {
  $(document).on('click', 'a[name="correct_answer_04"]'
    , () => bus.emit('activity::progress::complete', '04_current_data'));
};

bus.on('activity::ready', completion_setup);
