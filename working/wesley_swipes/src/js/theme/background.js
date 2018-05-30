import { bus } from 'partybus';
import { TimelineLite, CSSPlugin, AttrPlugin }  from "gsap/all";

export default null;

const bgcolors = {
  '00_course_front_matter' : '#336699',
  '02_current_data' : '#336699',
  'default': '#FFFFFF'
};

const background_color_change = (section) => {
  let color = bgcolors[section] || bgcolors['default'];
  let tween = new TimelineLite();
  tween('body', 0.2, { backgroundColor: color, opacity: 1 });
};

bus.on('hucklebuck', background_color_change);