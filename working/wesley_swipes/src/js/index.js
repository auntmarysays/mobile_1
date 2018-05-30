/* eslint-env browser, jquery */
import { bus } from 'partybus';
import config from '../../activity_config';
import sections from '../../sections';
import { cheet, prefetchSections, registerLanguages, $, analytics } from 'hucklebuck';
import render from './theme/swiper_render';
import './theme/cleanblog';
import './theme/navigation';
import './events/fin';
import './events/completion';
import './events/progress_bar';
import './events/swiper';
import './events/bookmark';
import run from './events/ready';


let testing = (function() {
	let aviato = "https://aviato.com/?actor=%7B%22mbox%22%3A%22mailto%3Abachmanity%40scitent.com%22%2C%22name%22%3A%22Erlich%20Bachman%22%2C%22objectType%22%3A%22Agent%22%7D&auth=Basic%20NDUtZmQxODUzZWY5ODE4ZTZiOmEyMzQ4YzczMDI5ODU5ZWUzYTU1Zjc4YTg%3D&endpoint=https%3A%2F%2Flrs.scitent.us%2FxAPI%2F&registration=TC8GSLS7W&activity_id=https%3A%2F%2Faviato-content.netlify.com%2F" +config.slug+ "%2F"
	if (window.location.hostname === 'localhost'){
		return { send: true, url: aviato  };
	} else {
		return { send: true, url: window.location.href };
	}
})();
// registerLanguages() takes an array of languages this course supports
// the order should be the order of importance, the first element
// being the default language of the course.
// registerLanguages([ 'en' ]);

prefetchSections(sections);

analytics(config, testing, sections);

render(sections);

run();

cheet('r e s e t', () => {
	bus.emit("tincan::progress::reset");
	$.confirm({
    title: 'You done reset ur progress',
    content: 'You will be reloaded now'
  });
});
