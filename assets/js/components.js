(function() {

  var rel = getRelativePathPrefix();

  function getRelativePathPrefix() {
    var path = window.location.pathname;
    var repoBase = '/Country-Therapy';
    if (path.indexOf(repoBase) === 0) {
      path = path.slice(repoBase.length);
    }
    path = path.replace(/^\/|\/$/g, '');
    var parts = path.split('/').filter(Boolean);
    if (parts.length && parts[parts.length - 1].indexOf('.') !== -1) {
      parts.pop();
    }
    return parts.length ? '../'.repeat(parts.length) : '';
  }

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
      <a href="tel:+610494758039">0494 758 039</a>
      <a href="mailto:reception@countrytherapy.com.au">reception@countrytherapy.com.au</a>
    </div>

  </div>
</div>
<nav id="nav" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="${rel}" class="logo" aria-label="Country Therapy home">
      <div class="logo-mark-people" aria-hidden="true">
        <div class="lp-person p1"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p2"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p3"><div class="lp-head"></div><div class="lp-body"></div></div>
        <div class="lp-person p4"><div class="lp-head"></div><div class="lp-body"></div></div>
      </div>
      <span class="logo-word">Country Therapy</span>
    </a>

    <ul class="nav-links" role="list">
      <li><a href="${rel}services/">Services</a></li>
      <li><a href="${rel}locations/">Locations</a></li>
      <li><a href="${rel}referrals/">Referrals</a></li>
      <li><a href="${rel}information-booklets/">Information Booklets</a></li>
      <li><a href="${rel}our-team/">Our Team</a></li>
      <li><a href="${rel}news/">News</a></li>
      <li><a href="${rel}learning/">Learning</a></li>
      <li class="nav-more-wrap">
        <button class="nav-more-btn" aria-haspopup="true" aria-expanded="false">
          More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="nav-dropdown" role="menu">
          <a href="${rel}community-commitment/" role="menuitem">Our Community Commitment</a>
          <a href="${rel}blog/" role="menuitem">Blog</a>
          <a href="${rel}faqs/" role="menuitem">FAQs</a>
          <a href="${rel}work-with-us/" role="menuitem">Work With Us</a>
          <a href="https://portal.countrytherapy.com.au" role="menuitem">Staff Portal</a>
        </div>
      </li>
    </ul>

    <div class="nav-cta">
      <a href="${rel}contact/" class="btn-primary">Contact Us</a>
    </div>

    <!-- Hamburger — mobile only -->
    <button class="nav-hamburger" id="navHamburger" aria-label="Open menu" aria-expanded="false" aria-controls="navMobileMenu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile drawer -->
  <div class="nav-mobile" id="navMobileMenu" aria-hidden="true">
    <ul class="nav-mobile-links">
      <li><a href="${rel}services/">Services</a></li>
      <li><a href="${rel}locations/">Locations</a></li>
      <li><a href="${rel}referrals/">Referrals</a></li>
      <li><a href="${rel}information-booklets/">Information Booklets</a></li>
      <li><a href="${rel}our-team/">Our Team</a></li>
      <li><a href="${rel}news/">News</a></li>
      <li><a href="${rel}learning/">Learning</a></li>
      <li class="nav-mobile-divider"></li>
      <li><a href="${rel}community-commitment/">Community Commitment</a></li>
      <li><a href="${rel}blog/">Blog</a></li>
      <li><a href="${rel}faqs/">FAQs</a></li>
      <li><a href="${rel}work-with-us/">Work With Us</a></li>
      <li><a href="https://portal.countrytherapy.com.au">Staff Portal</a></li>
      <li class="nav-mobile-cta">
        <a href="${rel}contact/" class="btn-primary">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
`;

  var FOOTER = `
<footer>
  <div class="container">
    <div class="ft-g">
      <div>
        <a href="${rel}" class="ft-logo">
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
          <a href="tel:+610494758039">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 5.97 5.97l.95-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z"/></svg>
            0494 758 039
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
          <li><a href="${rel}services/">Medicare OT</a></li>
          <li><a href="${rel}services/">NDIS Services</a></li>
          <li><a href="${rel}services/">Private Aged Care</a></li>
          <li><a href="${rel}services/">Support at Home</a></li>
          <li><a href="${rel}services/">School Consultations</a></li>
          <li><a href="${rel}services/">Legal Assessments</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Company</h5>
        <ul class="ft-links">
          <li><a href="${rel}our-team/">Our Team</a></li>
          <li><a href="${rel}referrals/">Referrals</a></li>
          <li><a href="${rel}information-booklets/">Information Booklets</a></li>
          <li><a href="${rel}news/">News</a></li>
          <li><a href="${rel}learning/">Learning</a></li>
          <li><a href="${rel}community-commitment/">Community Commitment</a></li>
        </ul>
      </div>
      <div class="ft-col">
        <h5>Locations</h5>
        <ul class="ft-links">
          <li><a href="${rel}locations/ararat/">Ararat</a></li>
          <li><a href="${rel}locations/stawell/">Stawell</a></li>
          <li><a href="${rel}locations/horsham/">Horsham</a></li>
          <li><a href="${rel}locations/ballarat/">Bacchus Marsh</a></li>
          <li><a href="${rel}locations/melton/">Melton</a></li>
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
    </div>
  </div>
</footer>
`;

  document.addEventListener("DOMContentLoaded", function() {
    var navRoot  = document.getElementById("nav-root");
    var footRoot = document.getElementById("footer-root");

    if (navRoot)  navRoot.innerHTML  = NAVBAR;
    if (footRoot) footRoot.innerHTML = FOOTER;

    // ── Active nav link ──────────────────────────────────────
    document.querySelectorAll(".nav-links a, .nav-mobile-links a").forEach(function(link) {
      var href = link.getAttribute("href");
      if (href && window.location.pathname.endsWith(href.replace(/^\.\.\//, ''))) {
        link.setAttribute("aria-current", "page");
      }
    });

    // ── Scroll: shadow only ──────────────────────────────────
    var navEl    = document.getElementById("nav");
    var topbarEl = document.getElementById("topbar");
    if (navEl && topbarEl) {
      var onScroll = function() {
        var s = window.scrollY;
        navEl.classList.toggle("scrolled", s > 10);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // ── Hamburger toggle ─────────────────────────────────────
    var btn    = document.getElementById("navHamburger");
    var drawer = document.getElementById("navMobileMenu");

    if (btn && drawer) {
      btn.addEventListener("click", function() {
        var isOpen = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!isOpen));
        btn.classList.toggle("is-open", !isOpen);
        drawer.classList.toggle("is-open", !isOpen);
        drawer.setAttribute("aria-hidden", String(isOpen));
        // prevent body scroll when menu open
        document.body.classList.toggle("nav-open", !isOpen);
      });

      // Close on backdrop click (outside nav)
      document.addEventListener("click", function(e) {
        if (drawer.classList.contains("is-open") && !navEl.contains(e.target)) {
          btn.setAttribute("aria-expanded", "false");
          btn.classList.remove("is-open");
          drawer.classList.remove("is-open");
          drawer.setAttribute("aria-hidden", "true");
          document.body.classList.remove("nav-open");
        }
      });

      // Close on link click inside drawer
      drawer.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
          btn.setAttribute("aria-expanded", "false");
          btn.classList.remove("is-open");
          drawer.classList.remove("is-open");
          drawer.setAttribute("aria-hidden", "true");
          document.body.classList.remove("nav-open");
        });
      });
    }

    // ── Desktop: More dropdown ───────────────────────────────
    var moreWrap = document.querySelector(".nav-more-wrap");
    var moreBtn  = document.querySelector(".nav-more-btn");
    if (moreWrap && moreBtn) {
      moreBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        var isOpen = moreWrap.classList.toggle("is-open");
        moreBtn.setAttribute("aria-expanded", String(isOpen));
      });
      document.addEventListener("click", function() {
        moreWrap.classList.remove("is-open");
        moreBtn.setAttribute("aria-expanded", "false");
      });
    }
  });

})();