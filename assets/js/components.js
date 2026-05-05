async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  if (id === 'nav-root') {
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      if (link.getAttribute('href') === window.location.pathname) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }
}

loadComponent('nav-root', 'assets/components/navbar.html');
loadComponent('footer-root', 'assets/components/footer.html');