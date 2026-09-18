/* Blog post behaviour: reading progress + contents that track position. */
(function () {
  const bar = document.getElementById('progress');
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const links = [...document.querySelectorAll('.post-toc a')];
  if (!links.length || !('IntersectionObserver' in window)) return;
  const heads = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  if (!heads.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const m = links.find(l => l.getAttribute('href') === '#' + e.target.id);
      if (m) m.classList.add('active');
    });
  }, { rootMargin: '-90px 0px -70% 0px' });

  heads.forEach(h => io.observe(h));
})();
