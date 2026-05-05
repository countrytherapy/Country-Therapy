(function() {

  var NAVBAR = `
<div class="topbar" id="topbar">
  <div class="tb-inner">
    <div class="tb-contact">
      <div class="tb-dots" aria-hidden="true">
        <span class="tb-dot" style="background:#4A90C4"></span>
        <span class="tb-dot" style="background:#F5C842"></span>
        <span class="tb-dot" style="background:#E85D7A"></span>
        <span class="tb-dot" style="background:#6B8F71"></span>
      </div>
      <a href="tel:+61494131621">0494 131 621</a>
      <a href="mailto:reception@countrytherapy.com.au">reception@countrytherapy.com.au</a>
    </div>
    <span class="tb-ndis">NDIS Registered Provider</span>
  </div>
</div>
<nav id="nav" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="/" class="logo" aria-label="Country Therapy home">
      <div class="logo-mark-people" aria-hidden="true">
        <div class="lp-person p1"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p2"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p3"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p4"><div class="lp-head"></div><div class="lp-body"></div></div>
      </div>
      <span class="logo-word">Country Therapy</span>
    </a>
    <ul class="nav-links" role="list">
      <li><a href="/services/">Services</a></li>
      <li><a href="/locations/">Locations</a></li>
      <li><a href="/referrals/">Referrals</a></li>
      <li><a href="/information-booklets/">Information Booklets</a></li>
      <li><a href="/our-team/">Our Team</a></li>
      <li><a href="/news/">News</a></li>
      <li><a href="/learning/">Learning</a></li>
      <li class="nav-more-wrap">
        <button class="nav-more-btn" aria-haspopup="true" aria-expanded="false">
          More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown" role="menu">
          <a href="/community-commitment/" role="menuitem">Our Community Commitment</a>
          <a href="/blog/" target="_blank" rel="noopener" role="menuitem">Blog</a>
          <a href="/faqs/" role="menuitem">FAQs</a>
          <a href="/work-with-us/" role="menuitem">Work With Us</a>
        </div>
      </li>
    </ul>
    <div class="nav-cta">
      <a href="/contact/" class="btn-primary">Contact Us</a>
    </div>
  </div>
</nav>
`;

  var FOOTER = `
<footer>
  <div class="container">
    <div class="ft-g">
      <div>
        <a href="/" class="ft-logo">
          <div class="logo-mark-people logo-mark-people--sm" aria-hidden="true">
            <div class="lp-person p1"><div class="lp-head"></div><div class="lp-body"></div></div>
            <div class="lp-person p2"><div class="lp-head"></div><div class="lp-body"></div></div>
            <div class="lp-person p3"><div class="lp-head"></div><div class="lp-body"></div></div>
            <div class="lp-person p4"><div class="lp-head"></div><div class="lp-body"></div></div>
          </div>
          <span class="ft-logo-word">Country Therapy</span>
        </a>
        <p class="ft-tag">Mobile, community-based occupational therapy across regional and metro Victoria.</p>
        <div class="ft-contacts">
          <a href="tel:+61494131621">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 5.97 5.97l.95-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z"/></svg>
            0494 131 621
          </a>
          <a href="mailto:reception@countrytherapy.com.au">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            reception@countrytherapy.com.au
          </a>
        </div>
      </div>
      <div class="ft-col">
        <h5>Services</h5>
        <ul class="ft-links">
          <li><a href="/services/">Medicare OT</a></li>
          <li><a href="/services/">NDIS Services</a></li>
          <li><a href="/services/">Private Aged Care</a></li>
          <li><a href="/services/">Support at Home</a></li>
          <li><a href="/services/">School Consultations</a></li>
          <li><a href="/services/">Legal Assessments</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Company</h5>
        <ul class="ft-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/our-team/">Our Team</a></li>
          <li><a href="/referrals/">Referrals</a></li>
          <li><a href="/information-booklets/">Info Booklets</a></li>
          <li><a href="/news/">News</a></li>
          <li><a href="https://countrytherapy.github.io/Country-Therapy/" target="_blank" rel="noopener">Learning</a></li>
          <li><a href="https://countrytherapy.github.io/Community-Commitment/" target="_blank" rel="noopener">Community Commitment</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Locations</h5>
        <ul class="ft-links">
          <li><a href="/locations/ararat/">Ararat</a></li>
          <li><a href="/locations/stawell/">Stawell</a></li>
          <li><a href="/locations/horsham/">Horsham</a></li>
          <li><a href="/locations/ballarat/">Bacchus Marsh</a></li>
          <li><a href="/locations/melton/">Melton</a></li>
        </ul>
      </div>
    </div>
    <div class="ft-bot">
      <p>&copy; 2026 Country Therapy Pty Ltd. All rights reserved.</p>
      <div class="ft-colour-strip" aria-hidden="true">
        <span class="ft-colour-dot" style="background:#4A90C4"></span>
        <span class="ft-colour-dot" style="background:#F5C842"></span>
        <span class="ft-colour-dot" style="background:#E85D7A"></span>
        <span class="ft-colour-dot" style="background:#6B8F71"></span>
      </div>
      <span class="ft-ndis">NDIS Registered Provider</span>
    </div>
  </div>
</footer>
`;

  document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById("nav-root");
    var foot = document.getElementById("footer-root");

    if (nav) nav.innerHTML = NAVBAR;
    if (foot) foot.innerHTML = FOOTER;

    // Active nav link
    document.querySelectorAll(".nav-links a").forEach(function(link) {
      if (link.getAttribute("href") === window.location.pathname) {
        link.setAttribute("aria-current", "page");
      }
    });

    // Scroll shadow
    var navEl = document.getElementById("nav");
    if (navEl) {
      window.addEventListener("scroll", function() {
        navEl.classList.toggle("scrolled", window.scrollY > 10);
      }, { passive: true });
    }
  });

})();