// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Highlight current page in nav
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (here === 'index.html' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Print button(s)
  document.querySelectorAll('[data-print]').forEach(function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); window.print(); });
  });

  // Checklist state persistence
  var boxes = document.querySelectorAll('.check-item input[type=checkbox][id]');
  boxes.forEach(function (box) {
    var saved = localStorage.getItem('pa-hic-' + box.id);
    if (saved === '1') box.checked = true;
    box.addEventListener('change', function () {
      localStorage.setItem('pa-hic-' + box.id, box.checked ? '1' : '0');
    });
  });
})();
