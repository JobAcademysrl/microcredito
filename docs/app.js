(function () {
  var d = document;
  d.documentElement.classList.add('js');

  // tabs: Persona fisica / Azienda (also reachable with #azienda in the URL)
  var tabs = [].slice.call(d.querySelectorAll('.tab'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      d.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true); }
    });
  });
  if (/azienda/.test(location.hash)) select(d.getElementById('tab-azienda'));

  // forms: file checks before sending
  var MAX = 10 * 1024 * 1024, OK = /\.(pdf|jpe?g|png)$/i;
  d.querySelectorAll('[data-form]').forEach(function (f) {
    var next = f.querySelector('input[name="_next"]');
    if (next && next.value.indexOf('{{') === 0) next.value = location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '') + 'grazie.html';
    f.addEventListener('submit', function (e) {
      var err = f.querySelector('.err'), total = 0, bad = '';
      f.querySelectorAll('input[type=file]').forEach(function (inp) {
        [].forEach.call(inp.files, function (file) { total += file.size; if (!OK.test(file.name)) bad = file.name; });
      });
      if (bad) { e.preventDefault(); err.textContent = 'Il file "' + bad + '" non è PDF, JPG o PNG.'; return; }
      if (total > MAX) { e.preventDefault(); err.textContent = 'Gli allegati pesano ' + (total / 1048576).toFixed(1) + ' MB: il massimo è 10 MB. Riduci o comprimi i file.'; return; }
      err.textContent = '';
      // record when consent was given (sent with the request as proof of consent)
      var ct = f.querySelector('[data-consent-time]');
      if (ct) ct.value = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' }) + ' (ora italiana)';
      var b = f.querySelector('button[type=submit]');
      b.disabled = true; b.textContent = 'Invio in corso…';
    });
  });

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  function onVisible(el, fn, margin) {
    if (!hasIO) return fn();
    var o = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { fn(); o.disconnect(); } }); }, { rootMargin: margin || '0px 0px -10% 0px' });
    o.observe(el);
  }

  // titles: split into words that rise one after another
  if (!reduce) d.querySelectorAll('.hero h1, main h2').forEach(function (h) {
    var i = 0;
    h.setAttribute('aria-label', h.textContent);
    h.innerHTML = h.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w" aria-hidden="true"><span style="--i:' + (i++) + '">' + w + '</span></span>'; }).join(' ');
    h.classList.add('split');
    if (h.closest('.hero')) requestAnimationFrame(function () { requestAnimationFrame(function () { h.classList.add('in'); }); });
    else onVisible(h, function () { h.classList.add('in'); });
  });

  // staggered reveal: siblings enter one after another
  var els = d.querySelectorAll('.reveal');
  els.forEach(function (el) {
    var sibs = [].filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); });
    el.style.setProperty('--d', Math.min(sibs.indexOf(el), 6) * 90 + 'ms');
  });
  if (hasIO) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  // numbers count up when they come into view (the HTML keeps the final value for crawlers)
  if (!reduce) d.querySelectorAll('.num b').forEach(function (b) {
    var txt = b.textContent, m = txt.match(/[\d.]+/);
    if (!m) return;
    var target = parseInt(m[0].replace(/\./g, ''), 10), pre = txt.slice(0, m.index), post = txt.slice(m.index + m[0].length);
    var fmt = function (n) { return pre + (m[0].indexOf('.') >= 0 ? n.toLocaleString('it-IT') : n) + post; };
    b.textContent = fmt(0);
    onVisible(b, function () {
      var t0 = performance.now(), dur = 1400;
      (function tick(t) {
        var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        b.textContent = p < 1 ? fmt(Math.round(target * e)) : txt;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  });

  // scroll-linked: hero recedes, nav gets a shadow, steps line fills
  var nav = d.querySelector('.nav'), hero = d.querySelector('.hero'), heroIn = hero && hero.querySelector('.wrap');
  var steps = d.querySelector('.steps'), stepEls = steps ? [].slice.call(steps.querySelectorAll('.step')) : [];
  if (steps) { var line = d.createElement('div'); line.className = 'steps-line'; line.innerHTML = '<i></i>'; steps.prepend(line); }
  var ticking = false;
  function update() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    if (nav) nav.classList.toggle('scrolled', y > 8);
    if (!reduce && heroIn) {
      var p = Math.min(1, y / hero.offsetHeight);
      heroIn.style.transform = 'translate3d(0,' + (p * 80).toFixed(1) + 'px,0) scale(' + (1 - p * 0.06).toFixed(3) + ')';
      heroIn.style.opacity = (1 - p * 0.9).toFixed(3);
    }
    if (steps) {
      var r = steps.getBoundingClientRect();
      var prog = reduce ? 1 : Math.max(0, Math.min(1, (vh * 0.75 - r.top) / (r.height + vh * 0.25)));
      steps.style.setProperty('--p', prog.toFixed(3));
      stepEls.forEach(function (s, i) { s.classList.toggle('on', prog >= i / Math.max(1, stepEls.length - 1) - 0.02); });
    }
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
})();
