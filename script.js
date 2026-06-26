/* ============================================================
   SENTINELA100ERRO — interações
   Vanilla JS · sem dependências externas
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- PRELOADER ---- */
  window.addEventListener('load', function () {
    var pl = document.getElementById('preloader');
    setTimeout(function () { if (pl) pl.classList.add('done'); }, reduce ? 0 : 650);
  });

  /* ---- REVEAL on scroll ---- */
  var revealEls = document.querySelectorAll('[data-reveal],[data-reveal-stagger],.line-mask');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          if (el.hasAttribute('data-reveal-stagger')) {
            var kids = el.children, i;
            for (i = 0; i < kids.length; i++) {
              (function (k, idx) {
                setTimeout(function () { k.style.opacity = 1; k.style.transform = 'none'; }, idx * 110);
              })(kids[i], i);
            }
          }
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('in');
      if (el.hasAttribute('data-reveal-stagger')) {
        var k = el.children;
        for (var i = 0; i < k.length; i++) { k[i].style.opacity = 1; k[i].style.transform = 'none'; }
      }
    });
  }

  /* ---- HEADER scroll state + progress + hide-on-down ---- */
  var header = document.getElementById('header'), progress = document.getElementById('progress');
  var lastY = 0, ticking = false;
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    var docH = document.documentElement.scrollHeight - window.innerHeight;
    if (header) {
      if (y > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
      if (y > lastY && y > 500) header.classList.add('hide'); else header.classList.remove('hide');
    }
    if (progress) { progress.style.width = (docH > 0 ? (y / docH * 100) : 0) + '%'; }
    lastY = y; ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  /* ---- HERO parallax on mark ---- */
  var heroMark = document.getElementById('heroMark');
  if (heroMark && !reduce) {
    window.addEventListener('scroll', function () {
      var y = window.pageYOffset;
      heroMark.style.transform = 'translateY(calc(-50% + ' + (y * 0.12) + 'px)) rotate(' + (y * 0.01) + 'deg)';
    }, { passive: true });
  }

  /* ---- COUNTERS ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---- CARD 3D TILT + glow ---- */
  if (!reduce) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      card.addEventListener('mousemove', function (ev) {
        var r = card.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width, py = (ev.clientY - r.top) / r.height;
        var rx = (py - 0.5) * -6, ry = (px - 0.5) * 8;
        card.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-4px)';
        card.style.setProperty('--mx', (px * 100) + '%');
        card.style.setProperty('--my', (py * 100) + '%');
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ---- CUSTOM CURSOR ---- */
  var dot = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
  if (dot && ring && !reduce && window.matchMedia('(hover:hover)').matches) {
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('[data-cursor]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { ring.classList.add('hot'); });
      el.addEventListener('mouseleave', function () { ring.classList.remove('hot'); });
    });
  }
})();
