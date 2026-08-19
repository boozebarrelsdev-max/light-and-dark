// Hero carousel
(function () {
  var track = document.querySelector('.track');
  if (!track) return;
  var ticks = [].slice.call(document.querySelectorAll('.ticks i'));
  var count = document.querySelector('.ticks .count');
  var n = document.querySelectorAll('.slide').length, i = 0, timer;

  function go(k) {
    i = (k + n) % n;
    track.style.transform = 'translateX(' + (-i * 100) + '%)';
    ticks.forEach(function (t, x) { t.className = x === i ? 'on' : ''; });
    if (count) count.textContent = '0' + (i + 1) + ' / 0' + n;
    restart();
  }
  function restart() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 6500); }

  ticks.forEach(function (t, x) { t.addEventListener('click', function () { go(x); }); });
  var prev = document.querySelector('[data-prev]'), next = document.querySelector('[data-next]');
  if (prev) prev.addEventListener('click', function () { go(i - 1); });
  if (next) next.addEventListener('click', function () { go(i + 1); });
  go(0);
})();

// Product detail: gallery + size + engraving counter
(function () {
  var shots = ['BARREL · FRONT', 'BARREL HEAD · ENGRAVED', 'DECANTER & TUMBLERS', 'PRESENTATION CASE'];
  var label = document.querySelector('.stage .label');
  var thumbs = [].slice.call(document.querySelectorAll('.thumbs .ph'));
  thumbs.forEach(function (t, x) {
    t.addEventListener('click', function () {
      thumbs.forEach(function (o) { o.classList.remove('on'); });
      t.classList.add('on');
      if (label) label.textContent = shots[x] || t.textContent.trim();
    });
  });

  var sizes = [].slice.call(document.querySelectorAll('.sizes button'));
  sizes.forEach(function (b) {
    b.addEventListener('click', function () {
      sizes.forEach(function (o) { o.classList.remove('on'); });
      b.classList.add('on');
    });
  });

  var field = document.querySelector('.engrave'), counter = document.querySelector('[data-count]');
  if (field && counter) {
    field.addEventListener('input', function () {
      if (field.value.length > 60) field.value = field.value.slice(0, 60);
      counter.textContent = field.value.length + ' / 60';
    });
  }
})();
