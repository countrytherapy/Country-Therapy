// dashboard-sidebar.js — Shared sidebar + topbar component
// Usage: <div id="db-sidebar-root" data-active="home" data-title="Home"></div>

(function() {
  var root = document.getElementById('db-sidebar-root');
  if (!root) return;

  var active = root.getAttribute('data-active') || 'home';
  var pageTitle = root.getAttribute('data-title') || 'Home';

  var links = [
    {
      id: 'home',
      href: '/portal/',
      label: 'Home',
      group: 'Main',
      icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
    },
    {
      id: 'org',
      href: '/portal/organisational%20structure/',
      label: 'Organisational Structure',
      group: 'Resources',
      icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
      id: 'policies',
      href: '/portal/policies-procedures/',
      label: 'Policies &amp; Procedures',
      group: 'Resources',
      icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'
    },
    {
      id: 'maps',
      href: '/portal/coverage-maps/',
      label: 'Coverage Maps',
      group: 'Resources',
      icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'
    },
    {
      id: 'training',
      href: '/portal/training-videos/',
      label: 'Training Videos',
      group: 'Coming Soon',
      soon: true,
      icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>'
    },
    {
      id: 'classroom',
      href: '/portal/google-classroom/',
      label: 'Google Classroom',
      group: 'Coming Soon',
      soon: true,
      icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>'
    },
    {
      id: 'news',
      href: '/portal/news-updates/',
      label: 'News &amp; Updates',
      group: 'Coming Soon',
      soon: true,
      icon: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'
    },
    {
      id: 'bios',
      href: '/portal/team-bios/',
      label: 'Team Bios',
      group: 'Coming Soon',
      soon: true,
      icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
    }
  ];

  // Build grouped nav
  var groups = {};

  links.forEach(function(link) {
    if (!groups[link.group]) groups[link.group] = [];
    groups[link.group].push(link);
  });

  var navHTML = '';

  Object.keys(groups).forEach(function(groupName) {
    navHTML += '<div class="db-nav-group">';
    navHTML += '<p class="db-nav-label">' + groupName + '</p>';

    groups[groupName].forEach(function(link) {
      var cls = link.id === active ? 'db-nav-link active' : 'db-nav-link';

      navHTML += '<a href="' + link.href + '" class="' + cls + '">';
      navHTML += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">';
      navHTML += link.icon;
      navHTML += '</svg>';
      navHTML += link.label;

      if (link.soon) {
        navHTML += '<span class="db-badge-soon">Soon</span>';
      }

      navHTML += '</a>';
    });

    navHTML += '</div>';
  });

  // Build sidebar
  var sidebar = document.createElement('aside');
  sidebar.className = 'db-sidebar';
  sidebar.id = 'dbSidebar';

  sidebar.innerHTML =
    '<a href="/portal/" class="db-sidebar-logo">' +
      '<img src="/assets/images/Logo.png" alt="Country Therapy" />' +
      '<div class="db-sidebar-logo-text">' +
        '<span>Country Therapy</span>' +
        '<span>Staff Portal</span>' +
      '</div>' +
    '</a>' +
    '<nav class="db-nav">' +
      navHTML +
    '</nav>' +
    '<div class="db-sidebar-footer">' +
      '<a href="/">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M19 12H5M12 19l-7-7 7-7"/>' +
        '</svg>' +
        'Back to Main Website' +
      '</a>' +
    '</div>';

  // Insert sidebar before db-main
  var main = root.parentElement.querySelector('.db-main');

  if (main) {
    root.parentElement.insertBefore(sidebar, main);
  }

  // Build topbar
  var topbar = document.createElement('header');
  topbar.className = 'db-topbar';

  var breadcrumbHTML = active === 'home'
    ? '<span>' + pageTitle + '</span>'
    : '<a href="/portal/">Home</a> / <span>' + pageTitle + '</span>';

  topbar.innerHTML =
    '<div class="db-topbar-left">' +
      '<button class="db-mobile-toggle" id="dbToggle" aria-label="Toggle sidebar">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">' +
          '<line x1="3" y1="12" x2="21" y2="12"/>' +
          '<line x1="3" y1="6" x2="21" y2="6"/>' +
          '<line x1="3" y1="18" x2="21" y2="18"/>' +
        '</svg>' +
      '</button>' +
      '<div class="db-breadcrumb">' +
        breadcrumbHTML +
      '</div>' +
    '</div>' +
    '<div class="db-topbar-right">' +
      '<span class="db-topbar-time" id="dbTime"></span>' +
    '</div>';

  if (main) {
    main.insertBefore(topbar, main.firstChild);
  }

  // Remove placeholder root
  root.remove();

  // Time
  function updateTime() {
    var el = document.getElementById('dbTime');

    if (el) {
      el.textContent = new Date().toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }

  updateTime();
  setInterval(updateTime, 60000);

  // Mobile toggle
  var btn = document.getElementById('dbToggle');

  if (btn) {
    btn.addEventListener('click', function() {
      var dbSidebar = document.getElementById('dbSidebar');

      if (dbSidebar) {
        dbSidebar.classList.toggle('open');
      }
    });
  }
})();