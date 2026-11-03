/* =========================================================
   Vermeille Pontoire — Portfolio
   Interactions: loader, scroll reveal, parallax, timeline,
   masonry filter, project modal, nav
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Loader ---------------- */
  const loader = document.getElementById('loader');
  const hideLoader = () => {
    setTimeout(() => loader.classList.add('is-hidden'), 900);
  };
  if (document.readyState === 'complete') hideLoader();
  else window.addEventListener('load', hideLoader);
  // safety fallback in case 'load' is delayed
  setTimeout(hideLoader, 3200);

  /* ---------------- Nav: scroll state + mobile menu ---------------- */
  const nav = document.getElementById('nav');
  const onScrollNav = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- Custom cursor dot (desktop) ---------------- */
  const cursorDot = document.getElementById('cursorDot');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorDot.classList.add('is-active');
    });
    document.querySelectorAll('a, button, .card').forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('is-hover'));
    });
  }

  /* ---------------- Scroll reveal (IntersectionObserver) ---------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  const observeReveals = (root = document) => {
    root.querySelectorAll('.reveal, .timeline-row, .card').forEach(el => revealObserver.observe(el));
  };
  observeReveals();

  /* ---------------- Parallax blobs ---------------- */
  const parallaxEls = Array.from(document.querySelectorAll('[data-speed]'));
  let ticking = false;
  const updateParallax = () => {
    const y = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.1;
      el.style.transform = `translate3d(0, ${y * speed * -0.4}px, 0)`;
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  updateParallax();

  /* ---------------- Timeline ---------------- */
  const parcoursEl = document.getElementById('parcours');
  const timelineEl = document.getElementById('timeline');
  const tabs = document.querySelectorAll('.timeline-tab');

  const TRACK_LABEL = { formation: 'Formation', experience: 'Expérience' };

  const timelineCard = (item, track) => !item ? '' : `
      <div class="timeline-item timeline-item--${track}">
        <div class="timeline-item__inner">
          <p class="timeline-item__date">${item.date}</p>
          <div class="timeline-item__card">
            <span class="timeline-item__track">${TRACK_LABEL[track]}</span>
            <h3 class="timeline-item__title">${item.title}</h3>
            <p class="timeline-item__place">${item.place}</p>
          </div>
        </div>
      </div>`;

  /* Une étape du parcours = une ligne et un seul point : l'expérience à
     gauche, le diplôme qu'elle accompagne à droite. Deux fois moins de
     hauteur qu'une entrée par ligne, et le lien entre les deux se voit
     tout de suite. Une étape qui n'a qu'un seul côté porte une classe
     de piste, pour que les onglets puissent estomper son point. */
  const renderTimeline = () => {
    timelineEl.innerHTML = TIMELINE.map(step => {
      const alone = step.formation && step.experience
        ? ''
        : ` timeline-row--${step.formation ? 'formation' : 'experience'}`;
      return `
      <div class="timeline-row${alone}">
        <span class="timeline-row__dot"></span>
        ${timelineCard(step.experience, 'experience')}
        ${timelineCard(step.formation, 'formation')}
      </div>`;
    }).join('');
    observeReveals(timelineEl);
  };

  const setTimelineFocus = (track) => {
    parcoursEl.classList.remove('is-focus-formation', 'is-focus-experience');
    parcoursEl.classList.add(`is-focus-${track}`);
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      setTimelineFocus(tab.dataset.track);
    });
  });

  // toucher une carte (ou un titre de colonne) de la piste estompée bascule sur cette piste
  parcoursEl.addEventListener('click', (e) => {
    const target = e.target.closest('.timeline-item__inner, .timeline-head');
    if (!target) return;
    const item = target.closest('.timeline-item') || target;
    const track = ['formation', 'experience'].find(t =>
      item.classList.contains(`timeline-item--${t}`) || item.classList.contains(`timeline-head--${t}`));
    if (!track || parcoursEl.classList.contains(`is-focus-${track}`)) return;
    const tab = document.querySelector(`.timeline-tab[data-track="${track}"]`);
    if (tab) tab.click();
  });

  renderTimeline();
  const activeTab = document.querySelector('.timeline-tab.is-active');
  setTimelineFocus(activeTab ? activeTab.dataset.track : 'formation');

  /* ---------------- Portfolio masonry ---------------- */
  const masonryEl = document.getElementById('masonry');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const moreBtn = document.getElementById('portfolioMore');

  const moreLabel = moreBtn.querySelector('.portfolio__more-label');
  const moreWrap = moreBtn.parentElement;

  /* L'aperçu ne tronque pas la grille, il la coupe en plein milieu des
     cartes : on s'arrête un peu sous PROJECT_PREVIEW_LAST et le dégradé du
     CSS fond la coupe dans la page. Une grille qui s'arrêtait net donnait
     l'impression qu'il n'y avait rien de plus ; des cartes entamées disent
     le contraire sans un mot. Toutes les cartes restent posées dans le DOM,
     l'aperçu n'est qu'une hauteur maximale. */
  const PEEK = 190;        // ce qu'on laisse entrevoir de la suite
  const MIN_HIDDEN = 6;    // en dessous, replier n'apporte rien
  let expanded = false;
  let foldAnchor = null;   // position du bouton à tenir pendant le repli
  let foldScroll = 0;      // défilement à tenir pendant l'ouverture

  const CATEGORY_LABEL = {
    visuelles: 'Identités visuelles',
    print: 'Print et Édition',
    illustrations: 'Illustrations',
    photographie: 'Photographie',
    video: 'Motion et Vidéo'
  };

  /* Trie les projets selon PROJECT_ORDER (js/projects-data.js).
     Tout projet absent de cette liste est conservé et placé à la fin,
     dans l'ordre du fichier — aucun projet ne peut disparaître. */
  const orderedProjects = () => {
    const order = typeof PROJECT_ORDER !== 'undefined' ? PROJECT_ORDER : [];
    const rank = new Map(order.map((id, i) => [id, i]));
    return PROJECTS.slice().sort((a, b) =>
      (rank.has(a.id) ? rank.get(a.id) : Infinity) -
      (rank.has(b.id) ? rank.get(b.id) : Infinity)
    );
  };

  let currentFilter = 'all';
  let currentCols = 0;

  /* Un projet apparaît sous sa `category` et, si besoin, sous les filtres
     supplémentaires listés dans `extraCategories` ; il porte une pastille
     par catégorie, la sienne en premier. */
  const filtersOf = (p) => [p.category, ...(p.extraCategories || [])];
  const labelsOf = (p) => [p.categoryLabel, ...(p.extraCategories || []).map(c => CATEGORY_LABEL[c])];
  const tags = (p, cls) => labelsOf(p).map(l => `<span class="${cls}">${l}</span>`).join('');

  /* Les cartes sont créées une seule fois puis simplement déplacées entre les
     colonnes : on conserve ainsi leurs écouteurs et l'état des animations. */
  const cardEls = orderedProjects().map(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.dataset.categories = filtersOf(p).join(' ');
    el.dataset.id = p.id;
    const hasVideo = p.gallery.some(g => g.video);
    el.innerHTML = `
        <div class="card__media">
          <div class="card__tags${hasVideo ? ' card__tags--has-play' : ''}">${tags(p, 'card__tag')}</div>
          ${hasVideo ? '<span class="card__play" aria-hidden="true"></span>' : ''}
          <img src="${p.cover}" alt="${p.title}" loading="lazy"${p.coverRatio ? ` style="aspect-ratio:${p.coverRatio}"` : ''}>
          <div class="card__overlay">
            <span class="card__overlay-text">Voir le projet →</span>
          </div>
        </div>
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__subtitle">${p.subtitle}</p>
        </div>`;
    el.addEventListener('click', () => openModal(p.id));
    el.addEventListener('mouseenter', () => cursorDot && cursorDot.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => cursorDot && cursorDot.classList.remove('is-hover'));
    return el;
  });

  // doit rester synchronisé avec les media queries de .masonry (css/style.css)
  const columnCount = () => {
    const w = window.innerWidth;
    if (w <= 620) return 1;
    if (w <= 980) return 2;
    return 3;
  };

  /* Répartition EN LIGNE pour la sélection mise en avant : la carte 1 va en haut
     de la colonne 1, la 2 en haut de la colonne 2, la 3 en haut de la colonne 3,
     la 4 sous la 1re… Le début de PROJECT_ORDER se lit donc de gauche à droite,
     ligne par ligne.

     Le reste du portfolio n'a pas d'ordre imposé : chaque carte rejoint la
     colonne la plus courte. Sans ça, les hauteurs étant très variables, une
     colonne se termine bien avant les autres et laisse un grand vide en bas. */
  const featured = new Set(PROJECT_ORDER.slice(0, PROJECT_ORDER_FEATURED));

  const layoutMasonry = () => {
    const cols = columnCount();
    const visible = cardEls.filter(el =>
      currentFilter === 'all' || el.dataset.categories.split(' ').includes(currentFilter));

    masonryEl.textContent = '';
    const colEls = Array.from({ length: cols }, () => {
      const col = document.createElement('div');
      col.className = 'masonry__col';
      masonryEl.appendChild(col);
      return col;
    });

    // 1er passage : tout le monde en place, pour mesurer les cartes en une fois
    visible.forEach((el, i) => colEls[i % cols].appendChild(el));
    const heights = new Map(visible.map(el => [el, el.offsetHeight]));
    const gap = parseFloat(getComputedStyle(colEls[0]).rowGap) || 0;

    // 2e passage : la sélection garde sa ligne, le reste comble le plus court.
    // La dernière ligne, si elle est incomplète, comble elle aussi : sinon
    // une seule carte ferait déborder sa colonne de 500 px.
    const fullRows = Math.floor(visible.length / cols) * cols;
    const filled = new Array(cols).fill(0);
    colEls.forEach(col => { col.textContent = ''; });
    visible.forEach((el, i) => {
      const target = featured.has(el.dataset.id) && i < fullRows
        ? i % cols
        : filled.indexOf(Math.min(...filled));
      colEls[target].appendChild(el);
      filled[target] += heights.get(el) + gap;
    });

    currentCols = cols;
    observeReveals(masonryEl);
    applyPreview();
  };

  /* Place la coupe juste sous PROJECT_PREVIEW_LAST, plus un morceau de ce
     qui suit. Si la coupe tombe déjà au bout de la grille — un filtre avec
     peu de projets — il n'y a rien à replier et le bouton disparaît. */
  function applyPreview(animate) {
    masonryEl.classList.remove('masonry--preview', 'masonry--folding');
    masonryEl.style.maxHeight = '';

    const cards = Array.from(masonryEl.querySelectorAll('.card'));
    const last = masonryEl.querySelector(`.card[data-id="${PROJECT_PREVIEW_LAST}"]`);
    const box = masonryEl.getBoundingClientRect();
    const full = Math.round(box.height);
    const cut = last
      ? Math.round(last.getBoundingClientRect().bottom - box.top) + PEEK
      : 0;

    const seen = last
      ? cards.filter(c => c.getBoundingClientRect().bottom - box.top <= cut).length
      : cards.length;
    const rest = cards.length - seen;

    // on ne replie que s'il y a vraiment de quoi : cacher trois projets
    // derrière un bouton, c'est de la gymnastique pour rien
    moreBtn.hidden = rest < MIN_HIDDEN;
    moreWrap.classList.toggle('portfolio__more--empty', moreBtn.hidden);
    moreWrap.classList.toggle('portfolio__more--over', !moreBtn.hidden && !expanded);
    if (moreBtn.hidden) return;

    moreBtn.setAttribute('aria-expanded', String(expanded));
    moreLabel.textContent = expanded
      ? 'Replier les projets'
      : `Voir les ${rest} autres projets`;

    if (animate) { foldTo(expanded ? cut : full, expanded ? full : cut); return; }
    if (expanded) return;
    masonryEl.classList.add('masonry--preview');
    masonryEl.style.maxHeight = `${cut}px`;
  }

  /* La grille s'ouvre et se referme à hauteur animée, le dégradé suivant le
     bord bas comme un rideau.

     Au repli, le bouton sert d'ancre : on recale le défilement à chaque image
     pour qu'il ne bouge pas d'un pixel. Sans ça on restait planté dans le pied
     de page, ou on était renvoyé d'un coup tout en haut de la grille — dans
     les deux cas on perd le fil. À l'ouverture, au contraire, on ne touche à
     rien : le nouveau contenu arrive sous nos yeux, là où on était. */
  function foldTo(from, to) {
    const anchor = foldAnchor;
    const keepAt = foldScroll;
    let raf = 0;
    let timer = 0;

    masonryEl.classList.add('masonry--preview', 'masonry--folding');
    masonryEl.style.maxHeight = `${from}px`;
    void masonryEl.offsetHeight;          // fige le point de départ
    masonryEl.style.maxHeight = `${to}px`;

    const hold = () => {
      if (anchor !== null) {
        // repli : le bouton reste exactement où il est
        const drift = moreBtn.getBoundingClientRect().top - anchor;
        if (Math.abs(drift) > 0.5) window.scrollBy({ top: drift, behavior: 'instant' });
      } else if (Math.abs(window.scrollY - keepAt) > 0.5) {
        // ouverture : on ne bouge pas. Le navigateur, lui, veut suivre le bas
        // de la grille qui descend, et nous emmènerait au-delà des projets
        // qui viennent d'apparaître.
        window.scrollTo({ top: keepAt, behavior: 'instant' });
      }
      raf = requestAnimationFrame(hold);
    };
    hold();

    const done = (e) => {
      if (e && (e.target !== masonryEl || e.propertyName !== 'max-height')) return;
      masonryEl.removeEventListener('transitionend', done);
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      masonryEl.classList.remove('masonry--folding');
      if (expanded) {
        masonryEl.classList.remove('masonry--preview');
        masonryEl.style.maxHeight = '';
      }
    };
    masonryEl.addEventListener('transitionend', done);
    timer = setTimeout(done, 1000);       // filet de sécurité
  }

  /* Relevés AVANT le moindre changement : le bouton remonte déjà de 72 px
     rien qu'en changeant de marge, et c'est bien sa position d'origine —
     celle qu'on avait sous les yeux en cliquant — qui doit rester fixe. */
  moreBtn.addEventListener('click', () => {
    foldAnchor = expanded ? moreBtn.getBoundingClientRect().top : null;
    foldScroll = window.scrollY;
    expanded = !expanded;
    applyPreview(true);
  });

  layoutMasonry();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentFilter = btn.dataset.filter;
      expanded = false;
      layoutMasonry();
    });
  });

  // on ne redessine que si le nombre de colonnes change réellement
  let previewTick = false;
  window.addEventListener('resize', () => {
    if (columnCount() !== currentCols) { layoutMasonry(); return; }
    if (previewTick) return;          // la largeur change la hauteur des
    previewTick = true;               // cartes : la coupe doit suivre
    requestAnimationFrame(() => { previewTick = false; applyPreview(); });
  }, { passive: true });

  /* ---------------- Project modal ---------------- */
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  let lastFocused = null;

  /* ---------------- Carousel (galerie du projet) ---------------- */
  let carousel = null;

  /* Un élément de galerie est soit un chemin d'image, soit une vidéo :
     { video: "assets/video/x.mp4", poster: "assets/img/x-poster.jpg" } */
  const renderSlide = (item, project, i) => {
    if (typeof item === 'object' && item.video) {
      return `<video src="${item.video}"${item.poster ? ` poster="${item.poster}"` : ''} controls playsinline preload="none" aria-label="${project.title} — vidéo ${i + 1}"></video>`;
    }
    return `<img src="${item}" alt="${project.title} — image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">`;
  };

  const pauseVideos = () => {
    modalBody.querySelectorAll('video').forEach(v => v.pause());
  };

  const buildCarousel = (project) => {
    const slides = project.gallery;
    const single = slides.length <= 1;

    return `
      <div class="carousel${single ? ' carousel--single' : ''}" id="carousel">
        <div class="carousel__viewport">
          <div class="carousel__track" id="carouselTrack">
            ${slides.map((item, i) => `
              <div class="carousel__slide">
                ${renderSlide(item, project, i)}
              </div>
            `).join('')}
          </div>
          <button class="carousel__btn carousel__btn--prev" id="carouselPrev" aria-label="Image précédente">‹</button>
          <button class="carousel__btn carousel__btn--next" id="carouselNext" aria-label="Image suivante">›</button>
          <span class="carousel__counter" id="carouselCounter">1 / ${slides.length}</span>
        </div>
        <div class="carousel__dots" id="carouselDots">
          ${slides.map((_, i) => `
            <button class="carousel__dot${i === 0 ? ' is-active' : ''}" data-index="${i}" aria-label="Aller à l'image ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    `;
  };

  const initCarousel = (total) => {
    const track = document.getElementById('carouselTrack');
    if (!track) return null;

    const dots = Array.from(document.querySelectorAll('.carousel__dot'));
    const counter = document.getElementById('carouselCounter');
    let index = 0;

    const goTo = (i) => {
      index = (i + total) % total;
      pauseVideos();
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
      if (counter) counter.textContent = `${index + 1} / ${total}`;
    };

    document.getElementById('carouselPrev').addEventListener('click', () => goTo(index - 1));
    document.getElementById('carouselNext').addEventListener('click', () => goTo(index + 1));
    dots.forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.index))));

    // swipe tactile
    let startX = null;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const delta = e.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 45) goTo(delta < 0 ? index + 1 : index - 1);
      startX = null;
    });

    return { prev: () => goTo(index - 1), next: () => goTo(index + 1) };
  };

  function openModal(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;

    modalBody.innerHTML = `
      ${buildCarousel(project)}
      ${tags(project, 'modal__tag')}
      <h2 class="modal__title" id="modalTitle">${project.title}</h2>
      <p class="modal__subtitle">${project.subtitle}</p>
      <p class="modal__desc">${project.description}</p>
      <div class="modal__chips">
        ${project.tags.map(t => `<span class="modal__chip">${t}</span>`).join('')}
      </div>
    `;

    carousel = project.gallery.length > 1 ? initCarousel(project.gallery.length) : null;

    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    pauseVideos();
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    carousel = null;
    if (lastFocused) lastFocused.focus();
  }

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    // les flèches servent à avancer dans la vidéo quand elle a le focus
    if (!carousel || e.target.tagName === 'VIDEO') return;
    if (e.key === 'ArrowLeft') carousel.prev();
    if (e.key === 'ArrowRight') carousel.next();
  });

});
