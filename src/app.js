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
      var b = f.querySelector('button[type=submit]');
      b.disabled = true; b.textContent = 'Invio in corso…';
    });
  });

  // light reveal on scroll
  var els = d.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });
})();
