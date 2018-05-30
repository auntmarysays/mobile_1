import { bus } from 'partybus';
import Velocity from 'velocity-animate';

export default null;

const bgcolors = {
  '00_course_front_matter' : '#DDDDDD',
  '02_current_data' : '#336699',
  'default': '#FFFFFF'
};

const background_color_change = (section) => {
  let color = bgcolors[section] || bgcolors['default'];
  Velocity(document.querySelector('body'), {
    backgroundColor: color
  }, 200);
};

bus.on('hucklebuck', background_color_change);
