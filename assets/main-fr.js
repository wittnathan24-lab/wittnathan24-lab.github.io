(() => {
  'use strict';
  const projectData = {
    fridge: {
      title: 'Smart Fridge Nutrition', label: '02 / APPLICATION FULL STACK',
      intro: 'Transformer les ingrédients disponibles en idées de recettes et en journal nutritionnel, avec des comptes personnels et des données propres à chaque utilisateur.',
      tags: ['Python', 'FastAPI', 'Supabase Auth', 'PostgreSQL', 'SQLite', 'Pydantic'],
      sections: [
        {title: 'LE PROJET', text: 'Une application de planification des repas avec un inventaire privé, des suggestions de recettes et un journal nutritionnel. Le projet intègre les API TheMealDB et USDA FoodData Central.'},
        {title: 'LA SÉCURITÉ DANS LE CODE', items: ['Authentification Supabase et politiques de sécurité PostgreSQL au niveau des lignes, liées à l’utilisateur connecté.', 'Un mode local avec hachage des mots de passe par scrypt et jetons JWT à durée limitée.', 'Validation des saisies, limitation des tentatives d’authentification et tests sur l’expiration des jetons, leur altération et l’isolation des comptes.']},
        {title: 'LES APPRENTISSAGES', text: 'Relier une API Python à un système d’authentification, à une base de données et à des services externes, tout en séparant les données des utilisateurs. Le projet est conçu pour une démonstration locale.'}
      ],
      url: 'https://github.com/wittnathan24-lab/Smart-Fridge-Nutrition'
    },
    cinescope: {
      title: 'CineScope', label: '03 / INTERFACE WEB ET INTÉGRATION D’API',
      intro: 'Une application de découverte de films avec un moteur de recherche, des fiches détaillées et une collection personnelle, alimentée par l’API TMDB.',
      tags: ['React', 'TypeScript', 'Vite', 'React Router', 'API TMDB', 'Vitest'],
      sections: [
        {title: 'L’EXPÉRIENCE', text: 'Découvrir des films, consulter leurs fiches, enregistrer des favoris, suivre ses visionnages et ajouter ses propres notes. Les collections et les profils restent dans le navigateur et peuvent être exportés en JSON.'},
        {title: 'LES POINTS TECHNIQUES', items: ['Requêtes d’API typées, navigation côté client et état partagé avec React.', 'Stockage local avec validation des données enregistrées.', 'Gestion des erreurs d’API et des images indisponibles, avec des tests de composants et d’interactions.']},
        {title: 'LES APPRENTISSAGES', text: 'Construire une interface cohérente à partir de données externes et maîtriser la gestion de l’état local. Ce projet utilise le stockage du navigateur, sans système de comptes côté serveur.'}
      ],
      url: 'https://github.com/wittnathan24-lab/CineScope'
    },
    groupie: {
      title: 'Groupie Tracker', label: '04 / PROJET COLLECTIF EN GO',
      intro: 'Explorer les liens entre artistes, membres de groupes, premiers albums et dates de concerts dans une application web en Go.',
      tags: ['Go', 'net/http', 'Templates HTML', 'API REST', 'JSON', 'CSS'],
      sections: [
        {title: 'LE PROJET', text: 'Une application construite autour de l’API Groupie Tracker, avec une recherche d’artistes, des filtres, un choix de thème et des pages d’erreur dédiées.'},
        {title: 'LES POINTS TECHNIQUES', items: ['Routes HTTP et rendu de templates côté serveur en Go.', 'Appels à une API externe, décodage JSON et mise en relation des données.', 'Recherche et filtres, avec gestion des erreurs HTTP.']},
        {title: 'LE TRAVAIL EN ÉQUIPE', text: 'Réalisé avec Allan Kartner. Le dépôt crédite Nathan Witt et Allan Kartner. Ce projet nous a permis de nous exercer à la construction d’une application complète en équipe.'}
      ],
      url: 'https://github.com/wittnathan24-lab/Groupie_Tracker_Kartner_Witt'
    },
    forum: {
      title: 'ProjetForum', label: '01 / DÉPÔT PRIVÉ · PROJET COLLECTIF', private: true,
      intro: 'Un forum communautaire en Go et MySQL, avec rendu côté serveur, réunissant comptes utilisateurs, discussions et modération.',
      tags: ['Go', 'MySQL', 'net/http', 'Templates HTML', 'Sessions', 'Autorisations'],
      sections: [
        {title: 'LE PROJET', text: 'Un forum développé en équipe avec inscription, sessions par cookie, discussions classées par tags, recherche, pagination, réactions aux messages et modération administrateur.'},
        {title: 'MES CONTRIBUTIONS', items: ['Inscription, connexion et middleware de gestion des sessions.', 'Contrôles des droits du propriétaire d’un sujet et réactions aux messages.', 'Pagination et intégration dans l’application Go/MySQL.']},
        {title: 'COLLABORATION ET APPRENTISSAGES', text: 'Un projet en binôme avec Gabriel Schmitt, développé dans un fork privé du dépôt de l’équipe. Ce travail s’inscrit dans mon apprentissage de l’authentification, des autorisations et des applications web reliées à une base de données.'},
        {title: 'CODE SOURCE PRIVÉ', text: 'Le dépôt reste privé. Je peux présenter le fonctionnement du projet et détailler mes contributions lors d’un échange.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=' + encodeURIComponent('ProjetForum — présentation du projet')
    },
    power4: {
      title: 'Power 4', label: '05 / DÉPÔT PRIVÉ · PROJET COLLECTIF', private: true,
      intro: 'Un jeu de Puissance 4 développé en équipe avec Go et un rendu HTML côté serveur, qui propose plusieurs variantes du jeu classique.',
      tags: ['Go', 'HTML', 'CSS', 'Logique de jeu', 'Rendu serveur'],
      sections: [
        {title: 'LE JEU', text: 'Choisir parmi plusieurs tailles de grille, ajouter des obstacles et essayer un mode avec inversion de la gravité. L’application suit aussi les scores et permet de lancer une revanche.'},
        {title: 'LES POINTS TECHNIQUES', items: ['Règles du jeu et gestion des tours avec la bibliothèque standard de Go.', 'Interfaces rendues côté serveur et saisie des noms des joueurs.', 'Tailles de grille prédéfinies, obstacles facultatifs et inversion de la gravité tous les cinq tours.']},
        {title: 'LE TRAVAIL EN ÉQUIPE', text: 'Réalisé avec Timothée Camara. L’état de la partie est conservé en mémoire pour une session de jeu partagée. Cela nous a permis d’explorer la logique côté serveur et les interactions avec les joueurs.'},
        {title: 'CODE SOURCE PRIVÉ', text: 'Le dépôt reste privé. Contactez-moi pour échanger sur le jeu et sa réalisation.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=' + encodeURIComponent('Power 4 — présentation du projet')
    },
    bounty: {
      title: 'BountyHunter Nemesis', label: '06 / DÉPÔT PRIVÉ · PROTOTYPE JAVA', private: true,
      intro: 'Un prototype de plugin pour serveur Minecraft avec des contrats de chasse publics ou réservés à un chasseur, des récompenses en jeu et un guidage à la boussole.',
      tags: ['Java 21', 'Spigot API', 'Vault', 'Maven', 'Code événementiel'],
      sections: [
        {title: 'LE PROTOTYPE', text: 'Les joueurs peuvent créer des contrats de chasse et suivre leurs cibles à la boussole. Le projet relie les événements de jeu aux récompenses, à l’expérience et au suivi des primes réclamées.'},
        {title: 'LES POINTS TECHNIQUES', items: ['Programmation événementielle en Java avec l’API serveur Spigot.', 'Intégration à l’économie du jeu grâce à Vault.', 'Gestion des contrats, vérification des demandes de récompense et règles élémentaires contre les abus.']},
        {title: 'LE CONTEXTE DE DÉVELOPPEMENT', text: 'Un prototype privé pour explorer l’architecture des plugins serveur et les mécaniques de jeu. Les contrats actifs sont conservés en mémoire ; le stockage persistant n’est pas encore finalisé.'},
        {title: 'CODE SOURCE PRIVÉ', text: 'Le dépôt reste privé. Je peux présenter la conception du projet et son fonctionnement actuel.'}
      ],
      url: 'mailto:nathanwitt@outlook.fr?subject=' + encodeURIComponent('BountyHunter Nemesis — présentation du projet')
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
    document.getElementById('filter-status').textContent = `${count} projets affichés.`;
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
    document.getElementById('dialog-source').textContent = project.private ? 'Échanger sur ce projet ↗' : 'Consulter le code ↗';
    if (project.private) document.getElementById('dialog-source').removeAttribute('target');
    else document.getElementById('dialog-source').target = '_blank';
    dialog.querySelector('.source-note').textContent = project.private ? 'Présentation d’un projet privé. Le code source reste privé. Le visuel est une illustration originale.' : 'Les descriptions s’appuient sur les dépôts publics. Les visuels sont des illustrations originales.';
    dialog.querySelector('.dialog-demo')?.remove();
    if (project.live) {
      const demo = document.createElement('a'); demo.className = 'dialog-demo'; demo.href = project.live; demo.target = '_blank'; demo.rel = 'noopener noreferrer'; demo.textContent = 'Voir l’aperçu ↗';
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
    menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
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
    motionButton.querySelector('span').textContent = motionEnabled ? 'Mettre en pause' : 'Activer les animations';
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
      status.textContent = 'Adresse copiée.';
    } catch {
      status.textContent = 'Sélectionnez l’adresse pour la copier.';
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
