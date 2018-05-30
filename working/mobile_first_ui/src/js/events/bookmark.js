/* eslint-env browser, jquery */
import $ from 'jquery';
import 'jquery-confirm';
import { bus } from 'partybus';

let current_section = '';
bus.on('hucklebucked', (slug) => current_section = slug);


const bookmark_popup = (slug) => {
  if (slug === current_section || slug === undefined || slug === null) {
    console.log("Bookmarking Data POPUP will not launch, same page", slug);
    return false;
  }
  console.log("Bookmarking Data POPUP", slug);
  $.confirm({
    title: 'Welcome back!',
    content: 'Do you want to resume where you left off?',
    type: 'green',
    buttons: {
      yes: {
        text: "YES",
        btnClass: 'btn-primary confirm-btn-yes',
        keys: ['enter'],
        action: function(){
          if (!slug) {
            console.log("User want to resume, but slug bad", slug);
          } else {
            console.log("User will to resume to", slug);
            bus.emit('hucklebuck', slug);
          }
        }
      },
      no: {
        text: "NO",
        btnClass: 'btn-secondary confirm-btn-no',
        action: function(){
          console.log("User don't want to resume to", slug);
        }
      }
    }
  });
};

export default null;

bus.on('tincan::bookmark::found', bookmark_popup);
