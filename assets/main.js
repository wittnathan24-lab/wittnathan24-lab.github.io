(() => {
  'use strict';
  const projectData = {
    fridge: {
      title: 'Smart Fridge Nutrition', label: '02 / FULL-STACK APPLICATION',
      intro: 'Turning a personal ingredient inventory into recipe ideas and a daily nutrition journal, with authenticated accounts and user-specific data.',
      tags: ['Python', 'FastAPI', 'Supabase Auth', 'PostgreSQL', 'SQLite', 'Pydantic'],
      sections: [
        {title: 'THE PROJECT', text: 'A full-stack meal-planning application with a private food inventory, recipe suggestions and a nutrition journal. The repository includes integrations with TheMealDB and USDA FoodData Central.'},
        {title: 'SECURITY IN THE IMPLEMENTATION', items: ['Supabase authentication and PostgreSQL row-level security policies tied to the authenticated user.', 'A local fallback with scrypt password hashing and expiring JWTs.', 'Input validation, authentication-route throttling and tests covering token expiry, tampering and isolation between accounts.']},
        {title: 'WHAT THIS WORK EXPLORES', text: 'Connecting a Python API to authentication, persistent storage and external data, while keeping each user’s information separate. The repository is designed for local demonstration.'}
      ],
      url: 'https://github.com/wittnathan24-lab/Smart-Fridge-Nutrition'
    },
    cinescope: {
      title: 'CineScope', label: '03 / FRONT-END & API INTEGRATION',
      intro: 'A film-discovery application with search, detailed movie pages and a personal collection, powered by the TMDB API.',
      tags: ['React', 'TypeScript', 'Vite', 'React Router', 'TMDB API', 'Vitest'],
      sections: [
        {title: 'THE EXPERIENCE', text: 'Discover films, browse their details, save favourites, track watch status and record personal ratings. Collections and profiles stay in the browser, with JSON export for a portable copy.'},
        {title: 'TECHNICAL FOCUS', items: ['Typed API requests, client-side routes and shared React state.', 'Local persistence with validation of saved data.', 'Error states for API failures and unavailable images, plus component and interaction tests.']},
        {title: 'WHAT THIS WORK EXPLORES', text: 'Turning an external data source into a coherent interface and making local state predictable. This project uses browser storage; it does not include a backend account system.'}
      ],
      url: 'https://github.com/wittnathan24-lab/CineScope'
    },
    groupie: {
      title: 'Groupie Tracker', label: '04 / COLLABORATIVE GO PROJECT',
      intro: 'Exploring the connections between artists, band members, first albums and concert dates through a Go web application.',
      tags: ['Go', 'net/http', 'HTML templates', 'REST API', 'JSON', 'CSS'],
      sections: [
        {title: 'THE PROJECT', text: 'An application built around the Groupie Tracker API, with artist search, filters, a theme preference and dedicated error pages.'},
        {title: 'TECHNICAL FOCUS', items: ['HTTP routes and server-rendered templates in Go.', 'Fetching external API data, decoding JSON and connecting related records.', 'Search and filter interactions, with handling for HTTP errors.']},
        {title: 'COLLABORATION', text: 'Created with Allan Kartner. The repository credits both Nathan Witt and Allan Kartner. This project is an opportunity to practise building a complete application together.'}
      ],
      url: 'https://github.com/wittnathan24-lab/Groupie_Tracker_Kartner_Witt'
    },
    forum: {
      title: 'ProjetForum', label: '01 / PRIVATE REPOSITORY · TEAM PROJECT', private: true,
      intro: 'A server-rendered community forum built with Go and MySQL, bringing accounts, discussions and moderation into one application.',
      tags: ['Go', 'MySQL', 'net/http', 'HTML templates', 'Sessions', 'Authorization'],
      sections: [
        {title: 'THE PROJECT', text: 'A collaborative forum with account registration, cookie-based sessions, tagged discussions, search, pagination, message reactions and administrator moderation.'},
        {title: 'MY CONTRIBUTIONS', items: ['Registration, login and session middleware.', 'Topic ownership checks and message reactions.', 'Pagination and integration within the Go/MySQL application.']},
        {title: 'COLLABORATION & LEARNING', text: 'A two-person project with Gabriel Schmitt, developed in a private fork of the team repository. This work is part of my learning in authentication, authorization and database-backed web applications.'},
        {title: 'PRIVATE SOURCE', text: 'The repository remains private. I can discuss the implementation and my contributions in a project walkthrough.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=ProjetForum%20project%20walkthrough'
    },
    power4: {
      title: 'Power 4', label: '05 / PRIVATE REPOSITORY · TEAM PROJECT', private: true,
      intro: 'A collaborative Connect Four web game built with Go and server-rendered HTML, adding playful variations to a familiar set of rules.',
      tags: ['Go', 'HTML', 'CSS', 'Game logic', 'Server rendering'],
      sections: [
        {title: 'THE GAME', text: 'Choose from several board sizes, add optional obstacles and try a gravity-reversal mode. The application also tracks scores and offers a rematch.'},
        {title: 'TECHNICAL FOCUS', items: ['Game rules and turn handling in Go’s standard library.', 'Server-rendered interfaces and player-name setup.', 'Board presets, optional obstacles and a gravity change every five turns.']},
        {title: 'COLLABORATION', text: 'Created with Timothée Camara. The game uses in-memory state for a shared game session, giving us a practical way to explore server-side logic and user interaction.'},
        {title: 'PRIVATE SOURCE', text: 'The repository remains private. Get in touch to discuss the game and the work behind it.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=Power%204%20project%20walkthrough'
    },
    bounty: {
      title: 'BountyHunter Nemesis', label: '06 / PRIVATE REPOSITORY · JAVA PROTOTYPE', private: true,
      intro: 'A Minecraft server-plugin prototype that adds public and hunter-specific bounty contracts, in-game rewards and compass guidance.',
      tags: ['Java 21', 'Spigot API', 'Vault', 'Maven', 'Event-driven code'],
      sections: [
        {title: 'THE PROTOTYPE', text: 'Players can create bounty contracts and follow targets with a compass. The project connects gameplay events to rewards, experience and claim tracking.'},
        {title: 'TECHNICAL FOCUS', items: ['Event-driven Java with the Spigot server API.', 'Integration with an in-game economy through Vault.', 'Contract handling, claim checks and basic anti-abuse rules.']},
        {title: 'DEVELOPMENT CONTEXT', text: 'A private prototype for exploring server-plugin architecture and gameplay systems. Active contract state is held in memory; persistent storage is not a completed feature.'},
        {title: 'PRIVATE SOURCE', text: 'The repository remains private. I can share a walkthrough of the design and current implementation.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=BountyHunter%20Nemesis%20project%20walkthrough'
    }
  };

  // Reveal only when the observer is ready; content remains visible without JavaScript.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold: 0.07, rootMargin: '0px 0px -15px 0px'});
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    document.documentElement.classList.add('js');
  }

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    cards.forEach(card => {
      const filter = button.dataset.filter;
      card.hidden = filter === 'private' ? card.dataset.private !== 'true' : filter !== 'all' && card.dataset.category !== filter;
      if (!card.hidden) { card.classList.add('in-view'); count++; }
    });
    document.getElementById('filter-status').textContent = `${count} projects shown.`;
  }));

  const dialog = document.getElementById('project-dialog');
  let dialogTrigger = null;
  function openProject(key, trigger) {
    const project = projectData[key];
    if (!project) return;
    dialogTrigger = trigger;
    document.getElementById('dialog-title').textContent = project.title;
    document.getElementById('dialog-eyebrow').textContent = project.label;
    document.getElementById('dialog-intro').textContent = project.intro;
    const tagContainer = document.getElementById('dialog-tags');
    tagContainer.replaceChildren(...project.tags.map(tag => {
      const span = document.createElement('span'); span.textContent = tag; return span;
    }));
    const sections = document.getElementById('dialog-sections');
    sections.replaceChildren(...project.sections.map(content => {
      const section = document.createElement('section');
      const heading = document.createElement('h3'); heading.textContent = content.title; section.append(heading);
      if (content.text) {const p = document.createElement('p'); p.textContent = content.text; section.append(p);}
      if (content.items) {
        const list = document.createElement('ul');
        content.items.forEach(item => {const li = document.createElement('li'); li.textContent = item; list.append(li);});
        section.append(list);
      }
      return section;
    }));
    document.getElementById('dialog-source').href = project.url;
    document.getElementById('dialog-source').textContent = project.private ? 'Discuss this project ↗' : 'Explore the source ↗';
    if (project.private) document.getElementById('dialog-source').removeAttribute('target');
    else document.getElementById('dialog-source').target = '_blank';
    dialog.querySelector('.source-note').textContent = project.private ? 'A summary of a private project. Source code remains private. The cover is an original illustration.' : 'Project descriptions are based on the public repository. Visual covers are original illustrations.';
    dialog.querySelector('.dialog-demo')?.remove();
    if (project.live) {
      const demo = document.createElement('a'); demo.className = 'dialog-demo'; demo.href = project.live; demo.target = '_blank'; demo.rel = 'noopener noreferrer'; demo.textContent = 'Visit visual preview ↗';
      document.getElementById('dialog-source').after(demo);
    }
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    document.getElementById('close-dialog').focus({preventScroll:true});
  }
  document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.openProject, button)));
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    dialogTrigger?.focus({preventScroll:true});
  });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav.classList.toggle('open', open); mobileNav.inert = !open;
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => {if (!mobileNav.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);});
  window.matchMedia('(min-width:641px)').addEventListener('change', event => {if (event.matches) setMenu(false);});

  const motionButton = document.getElementById('motion-toggle');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let motionEnabled = !motionPreference.matches;
  function setMotion(enabled) {
    motionEnabled = Boolean(enabled);
    document.documentElement.classList.toggle('motion-off', !motionEnabled);
    motionButton.setAttribute('aria-pressed', String(motionEnabled));
    motionButton.querySelector('span').textContent = motionEnabled ? 'Pause motion' : 'Enable motion';
    motionButton.querySelector('svg').innerHTML = motionEnabled ? '<path d="M7 5v10M13 5v10"/>' : '<path d="m7 4 9 6-9 6z"/>';
    window.portfolioArt?.setMotion(motionEnabled);
    window.dispatchEvent(new CustomEvent('portfolio:motion', {detail:{enabled:motionEnabled}}));
    try {sessionStorage.setItem('nw-motion', String(motionEnabled));} catch { /* Storage can be disabled. */ }
  }
  let savedMotion = null;
  try { savedMotion = sessionStorage.getItem('nw-motion'); } catch { /* Respect browser privacy settings. */ }
  setMotion(!motionPreference.matches && savedMotion !== 'false');
  motionButton.addEventListener('click', () => setMotion(!motionEnabled));
  motionPreference.addEventListener('change', event => setMotion(!event.matches));

  let copyTimer;
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText('nathanwitt@outlook.fr');
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = 'Select the address to copy it.';
    }
    clearTimeout(copyTimer); copyTimer = setTimeout(() => {status.textContent = '';}, 4500);
  });

  const progress = document.querySelector('.reading-progress');
  let scrollFrame = false;
  function updateProgress() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${total > 0 ? Math.min(100, window.scrollY / total * 100) : 0}%`;
    scrollFrame = false;
  }
  window.addEventListener('scroll', () => { if (!scrollFrame) {scrollFrame = true; requestAnimationFrame(updateProgress);} }, {passive:true});
  window.addEventListener('resize', updateProgress, {passive:true}); updateProgress();
  document.getElementById('year').textContent = new Date().getFullYear();
})();
