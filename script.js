(function () {
  var btn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  var closeBtn = document.getElementById('menuClose');
  var pToggle = document.getElementById('produceToggle');
  var pList = document.getElementById('produceList');
  var pIcon = document.getElementById('produceIcon');
  if (!btn || !drawer) return;

  function openMenu() {
    drawer.hidden = false;
    document.body.classList.add('menu-open');
    btn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closeMenu() {
    drawer.hidden = true;
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    setProduce(false);
    btn.focus();
  }
  function setProduce(open) {
    pList.hidden = !open;
    pList.style.display = open ? 'flex' : '';
    pToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    pIcon.textContent = open ? '\u2212' : '+';
  }

  btn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  pToggle.addEventListener('click', function () { setProduce(pList.hidden); });
  drawer.addEventListener('click', function (e) {
    if (e.target === drawer) closeMenu();
  });
  // Links are visual only: keep the page in place and close the menu.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#"]');
    if (!a) return;
    e.preventDefault();
    if (!drawer.hidden) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 980 && !drawer.hidden) closeMenu();
  });
})();
