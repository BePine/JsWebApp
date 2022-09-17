"use strict";

var items = document.querySelectorAll('.showingDiv');

var active = function active(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
};

var io = new IntersectionObserver(active);

for (var i = 0; i < items.length; i++) {
  io.observe(items[i]);
}