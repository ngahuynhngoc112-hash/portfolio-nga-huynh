
(() => {
  'use strict';

  const projects = (window.PORTFOLIO_PROJECTS || [])
    .filter(p => p.id !== 'samset');

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const esc = (val = '') =>
    String(val).replace(/[&<>"']/g, c => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[c]));

  const pad = n => String(n).padStart(2, '0');

  // ==========================================
  // 1. DANH SÁCH DỰ ÁN
  // ==========================================

  function renderIndex() {
    const container = $('#projectCards');
    if (!container) return;

    const cards = (duplicate = false) =>
      projects.map((p, i) => `
        <a class="project-card"
          href="#${esc(p.id)}"
          aria-label="Xem chi tiết dự án ${esc(p.name)}"
          data-id="${esc(p.id)}"
          ${duplicate ? 'tabindex="-1"' : ''}>

          <div class="card-media">
            <img
              src="${esc(p.visual)}"
              data-custom="assets/cover-${esc(p.id)}.jpg"
              loading="lazy"
              decoding="async"
              alt="Hình bìa dự án ${esc(p.name)}">
          </div>

          <div class="card-topline">
            <span class="card-num">${pad(i + 1)}</span>
            <span class="card-category">${esc(p.segment)}</span>
          </div>

          <div class="card-body">
            <h3 class="card-title">${esc(p.name)}</h3>
            <span class="card-detail-btn">Xem chi tiết</span>
          </div>
        </a>
      `).join('');

    container.innerHTML = `
      <div class="carousel-lane">
        <div class="carousel-set">${cards(false)}</div>
        <div class="carousel-set" aria-hidden="true">
          ${cards(true)}
        </div>
      </div>
    `;
  }

  // ==========================================
  // 2. THANH TIÊU ĐỀ CHẠY NGANG
  // ==========================================

  function initChapterMarquees() {
    $$('.chapter-band').forEach(band => {
      const no = band.dataset.number || '';
      const title = band.dataset.title || '';

      const item = `
        <span class="chapter-item">
          <span class="chapter-mark" aria-hidden="true"></span>
          <strong>${esc(no)}. ${esc(title)}</strong>
        </span>
      `;

      const group = item.repeat(14);

      band.innerHTML = `
        <div class="chapter-track" aria-hidden="true">
          <div class="chapter-group">${group}</div>
          <div class="chapter-group">${group}</div>
        </div>
      `;
    });
  }

  // ==========================================
  // 3. LOGO PHẦN MỀM
  // ==========================================

  function initSoftwareLogos() {
    $$('.software-slot img').forEach(img => {
      const slot = img.closest('.software-slot');

      const onError = () => {
        slot.classList.add('is-missing');
        img.style.display = 'none';
      };

      img.addEventListener('error', onError, {
        once: true
      });

      img.addEventListener('load', () => {
        slot.classList.remove('is-missing');
        img.style.display = 'block';
      }, {
        once: true
      });

      if (img.complete && img.naturalWidth === 0) {
        onError();
      }
    });
  }

  // ==========================================
  // 4. CHI TIẾT TỪNG DỰ ÁN
  // ==========================================

  function renderCases() {
    const container = $('#caseStudies');
    if (!container) return;

    container.innerHTML = projects.map((p, i) => {
      const safeLinks = p.id === 'zenith'
        ? [
            ...(p.links || []),
            {
              label: 'Xem chi tiết',
              url: 'https://drive.google.com/file/d/1AoCJIVetebIJZLmYHbIeLp1UzaBEyVuB/view'
            }
          ]
        : (p.links || []);

      return `
        <section id="${esc(p.id)}"
          class="case-section"
          aria-labelledby="${esc(p.id)}-heading">

          <div class="section-wrap">

            <header class="case-heading-wrap reveal">
              <span class="case-big-number" aria-hidden="true">
                ${pad(i + 1)}
              </span>

              <h2 class="case-heading"
                id="${esc(p.id)}-heading">
                ${esc(p.name)}
              </h2>

              <div class="case-meta">
                <span>${esc(p.eyebrow)}</span>
                <span class="case-role">
                  Vai trò: ${esc(p.role)}
                </span>
              </div>
            </header>

            <div class="case-background reveal">
              <h3 class="case-section-label">
                Bối cảnh dự án
              </h3>

              <div>
                <p>${esc(p.context)}</p>
                <p>
                  <strong class="case-question">
                    Bài toán đặt ra:
                  </strong>
                  ${esc(p.challenge)}
                </p>
              </div>
            </div>

            <div class="case-scope reveal">
              <div class="case-scope-heading">
                <h3 class="case-section-label">
                  Phạm vi công việc của tôi
                </h3>
              </div>

              <div class="scope-accordion-list">
                ${p.scope.map(s => `
                  <article class="scope-accordion always-open">
                    <h4>${esc(s.title)}</h4>
                    <p class="scope-content">
                      ${esc(s.text)}
                    </p>
                  </article>
                `).join('')}
              </div>
            </div>

            <div class="case-outcomes reveal">
              <h3 class="case-section-label">
                Kết quả & số liệu
              </h3>

              <div class="metric-grid">
                ${p.outcomes.map(o => `
                  <article class="metric">
                    <div class="metric-value">
                      ${esc(o.value)}
                    </div>
                    <div class="metric-label">
                      ${esc(o.label)}
                    </div>
                    <div class="metric-note">
                      ${esc(o.note)}
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="case-gallery reveal">
            <div class="gallery-heading">
              <h3 class="case-section-label">
                Sản phẩm & bằng chứng
              </h3>
            </div>

            <div class="gallery-grid">
              ${p.gallery.map((g, j) => `
                <button
                  type="button"
                  class="gallery-item"
                  data-project="${esc(p.id)}"
                  data-image="${j}"
                  aria-label="Xem hình: ${esc(g.title)}">

                  <img
                    src="${esc(g.src)}"
                    data-custom="${
                      p.id === 'zenith' && j === 1
                        ? 'assets/gallery-zenith-bmc.jpg'
                        : `assets/gallery-${esc(p.id)}-${pad(j + 1)}.jpg`
                    }"
                    loading="lazy"
                    decoding="async"
                    alt="${esc(g.title)}">

                  <span class="gallery-copy">
                    <strong>${esc(g.title)}</strong>
                    <small>${esc(g.type)}</small>
                  </span>
                </button>
              `).join('')}
            </div>

            ${safeLinks.length ? `
              <div class="case-links">
                ${safeLinks.map(l => `
                  <a class="case-link"
                    href="${esc(l.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="${esc(l.label)}">
                    Xem chi tiết
                  </a>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </section>
      `;
    }).join('');
  }

  // ==========================================
  // 5. TỰ ĐỘNG THAY ẢNH THẬT
  // ==========================================

  function enableImageOverrides() {
    $$('img[data-custom]').forEach(img => {
      const path = img.dataset.custom;
      const test = new Image();

      test.onload = () => {
        img.src = path;
      };

      test.onerror = () => {
        // Giữ ảnh demo nếu chưa có ảnh mới.
      };

      test.src = path;
    });
  }

  // ==========================================
  // 6. HIỆU ỨNG SCROLL REVEAL
  // ==========================================

  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(e => {
        e.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.09,
        rootMargin: '0px 0px -14px 0px'
      }
    );

    $$('.reveal').forEach((e, i) => {
      if (e.classList.contains('project-card')) {
        e.style.transitionDelay = `${(i % 5) * 50}ms`;
      }
      observer.observe(e);
    });
  }

  // ==========================================
  // 7. CAROUSEL TỰ CHẠY VÔ HẠN
  // ==========================================

  function initCarousel() {
    const track = $('#projectCards');
    if (!track) return;

    const firstSet = $('.carousel-set', track);
    if (!firstSet) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let pausedUntil = 0;
    let hovered = false;
    let dragging = false;
    let pointerDown = false;
    let dragStartX = 0;
    let scrollStart = 0;
    let cancelClick = false;

    const setWidth = () =>
      firstSet.getBoundingClientRect().width;

    const wrapScroll = () => {
      const width = setWidth();
      if (width <= 0) return;

      if (track.scrollLeft >= width) {
        track.scrollLeft -= width;
      }

      if (track.scrollLeft < 0) {
        track.scrollLeft += width;
      }
    };

    const pause = (duration = 2300) => {
      pausedUntil = performance.now() + duration;
    };

    track.addEventListener('pointerenter', () => {
      hovered = true;
    });

    track.addEventListener('pointerleave', () => {
      hovered = false;
      pause(900);
    });

    track.addEventListener('focusin', () => {
      pause(4500);
    });

    track.addEventListener(
      'touchstart',
      () => pause(4000),
      { passive: true }
    );

    track.addEventListener(
      'scroll',
      wrapScroll,
      { passive: true }
    );

    track.addEventListener('pointerdown', e => {
      pause(4500);

      if (e.pointerType !== 'mouse' || e.button !== 0) {
        return;
      }

      pointerDown = true;
      dragging = false;
      dragStartX = e.clientX;
      scrollStart = track.scrollLeft;
    });

    window.addEventListener('pointermove', e => {
      if (!pointerDown) return;

      const delta = e.clientX - dragStartX;

      if (Math.abs(delta) > 5) {
        dragging = true;
        track.classList.add('is-dragging');
        track.scrollLeft = scrollStart - delta;
        wrapScroll();
      }
    });

    window.addEventListener('pointerup', () => {
      if (dragging) {
        cancelClick = true;

        setTimeout(() => {
          cancelClick = false;
        }, 90);
      }

      pointerDown = false;
      dragging = false;
      track.classList.remove('is-dragging');
      pause(1300);
    });

    track.addEventListener('click', e => {
      if (cancelClick) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    track.addEventListener('keydown', e => {
      if (e.target !== track) return;

      if (
        e.key !== 'ArrowLeft' &&
        e.key !== 'ArrowRight'
      ) return;

      e.preventDefault();

      track.scrollLeft +=
        (e.key === 'ArrowRight' ? 1 : -1) * 280;

      wrapScroll();
      pause(4500);
    });

    if (reduced) return;

    let lastTime;

    const frame = time => {
      if (lastTime === undefined) lastTime = time;

      const dt = Math.min(60, time - lastTime);
      lastTime = time;

      if (
        !document.hidden &&
        !hovered &&
        !pointerDown &&
        performance.now() > pausedUntil &&
        !track.contains(document.activeElement)
      ) {
        track.scrollLeft += dt * 0.034;
        wrapScroll();
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  // ==========================================
  // 8. LIGHTBOX CHI TIẾT ẢNH
  // ==========================================

  let lightboxProject;
  let lightboxIndex = 0;
  let previousFocus;

  function activeImage(p, index) {
    const img = $(
      `.gallery-item[data-project="${p.id}"][data-image="${index}"] img`
    );
    return img ? img.src : p.gallery[index].src;
  }

  function updateLightbox() {
    const p = projects.find(x => x.id === lightboxProject);
    if (!p) return;

    lightboxIndex =
      (lightboxIndex + p.gallery.length) % p.gallery.length;

    const g = p.gallery[lightboxIndex];

    $('#lightboxImage').src = activeImage(
      p,
      lightboxIndex
    );
    $('#lightboxImage').alt = g.title;
    $('#lightboxTitle').textContent = g.title;
    $('#lightboxCaption').textContent = g.caption;

    $('#lightboxCount').textContent =
      `${pad(lightboxIndex + 1)} / ${pad(p.gallery.length)}`;
  }

  function openLightbox(id, index) {
    previousFocus = document.activeElement;
    lightboxProject = id;
    lightboxIndex = index;

    updateLightbox();

    $('#lightbox').setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    $('#lightboxClose').focus();
  }

  function closeLightbox() {
    if (
      $('#lightbox').getAttribute('aria-hidden') === 'true'
    ) return;

    $('#lightbox').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    previousFocus?.focus?.();
  }

  function initLightbox() {
    document.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');

      if (item) {
        openLightbox(
          item.dataset.project,
          Number(item.dataset.image)
        );
      }

      if (e.target.matches('[data-close="true"]')) {
        closeLightbox();
      }
    });

    $('#lightboxClose').addEventListener('click', closeLightbox);

    $('#lightboxPrev').addEventListener('click', () => {
      lightboxIndex--;
      updateLightbox();
    });

    $('#lightboxNext').addEventListener('click', () => {
      lightboxIndex++;
      updateLightbox();
    });

    document.addEventListener('keydown', e => {
      if (
        $('#lightbox').getAttribute('aria-hidden') !== 'false'
      ) return;

      if (e.key === 'Escape') {
        closeLightbox();
      }

      if (e.key === 'ArrowLeft') {
        lightboxIndex--;
        updateLightbox();
      }

      if (e.key === 'ArrowRight') {
        lightboxIndex++;
        updateLightbox();
      }

      if (e.key === 'Tab') {
        const controls = [
          $('#lightboxClose'),
          $('#lightboxPrev'),
          $('#lightboxNext')
        ];

        const idx = controls.indexOf(document.activeElement);

        if (e.shiftKey && idx === 0) {
          e.preventDefault();
          controls.at(-1).focus();
        } else if (
          !e.shiftKey &&
          idx === controls.length - 1
        ) {
          e.preventDefault();
          controls[0].focus();
        }
      }
    });
  }

  // ==========================================
  // 9. NAVIGATION
  // ==========================================

  function updateScrollState() {
    const y = window.scrollY || 0;
    const coverHeight = $('.cover')?.offsetHeight || 0;

    $('#topbar').classList.toggle(
      'is-scrolled',
      y > Math.max(40, coverHeight - 70)
    );

    const max =
      document.documentElement.scrollHeight - window.innerHeight;

    $('#scrollProgress').style.width =
      `${max > 0 ? (y / max) * 100 : 0}%`;
  }

  // ==========================================
  // 10. INITIALIZE
  // ==========================================

  renderIndex();
  renderCases();
  initChapterMarquees();
  initSoftwareLogos();
  enableImageOverrides();
  observeReveals();
  initCarousel();
  initLightbox();

  window.addEventListener(
    'scroll',
    updateScrollState,
    { passive: true }
  );

  window.addEventListener(
    'resize',
    updateScrollState,
    { passive: true }
  );

  updateScrollState();
})();
