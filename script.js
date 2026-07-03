/* Gaia Technology — interactions */
(function () {
  'use strict';

  /* Header : effet au scroll */
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');
  var setMenu = function (open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.hidden = !open;
  };
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  /* Le clic sur le logo referme le menu mobile (collapse) */
  var brand = document.querySelector('.brand');
  if (brand) {
    brand.addEventListener('click', function () { setMenu(false); });
  }

  /* Fermer le menu au clic en dehors ou sur Échap */
  document.addEventListener('click', function (e) {
    if (toggle.getAttribute('aria-expanded') === 'true' &&
        !menu.contains(e.target) && !toggle.contains(e.target)) {
      setMenu(false);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* Reveal au scroll */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Année dans le footer */
  var y = document.getElementById('year');
  if (y) y.textContent = '2026';

  /* Formulaire de contact (démo — à brancher sur un backend / service d'envoi) */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.classList.remove('error');
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var msg = form.message.value.trim();
      var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail || !msg) {
        note.classList.add('error');
        note.textContent = 'Merci de renseigner votre nom, un email valide et un message.';
        return;
      }
      // Aucune intégration d'envoi n'est encore branchée : on simule le succès.
      note.textContent = 'Merci ' + name + ' ! Votre demande a bien été prise en compte. Nous vous recontacterons rapidement.';
      form.reset();
    });
  }
})();
