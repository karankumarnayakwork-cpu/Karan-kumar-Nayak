(() => {
          /* ── Site Loader (first visit only) ── */
      const siteLoader = document.getElementById('site-loader');
      const slBar = document.getElementById('sl-bar');
      const slPct = document.getElementById('sl-pct');

      function runLoader(onDone) {
        const slVideoWrap = document.getElementById('sl-video-wrap');
        const slVideo     = document.getElementById('sl-video');
        let pct = 0;
        let videoTriggered = false;

        function finishLoader() {
          slBar.style.width = '100%';
          slPct.textContent = '100';
          setTimeout(() => {
            siteLoader.classList.add('sl-out');
            siteLoader.addEventListener('transitionend', () => {
              siteLoader.classList.add('sl-gone');
              onDone && onDone();
            }, { once: true });
          }, 600);
        }

        function tick() {
          // At 94% — pause, play video, resume after it ends
          if (pct >= 94 && !videoTriggered) {
            videoTriggered = true;
            slBar.style.width = '94%';
            slPct.textContent = '94';
            slVideoWrap.classList.add('sl-vid-show');
            slVideo.play().catch(() => {
              // Autoplay blocked — skip video and finish
              slVideoWrap.classList.remove('sl-vid-show');
              finishLoader();
            });
            slVideo.addEventListener('ended', () => {
              slVideoWrap.classList.remove('sl-vid-show');
              finishLoader();
            }, { once: true });
            return;
          }

          if (pct >= 100) { finishLoader(); return; }

          pct++;
          slBar.style.width = pct + '%';
          slPct.textContent = pct;
          // Eased delay: fast edges, slow middle
          let delay;
          if      (pct < 20)  delay = 25;
          else if (pct < 40)  delay = 45;
          else if (pct < 70)  delay = 72;
          else if (pct < 90)  delay = 38;
          else                delay = 20;
          setTimeout(tick, delay);
        }
        setTimeout(tick, 350);
      }

      if (!sessionStorage.getItem('kk-visited')) {
        runLoader(() => sessionStorage.setItem('kk-visited', '1'));
      } else {
        siteLoader.classList.add('sl-gone');
      }

      /* Cursor */
      const dot = document.getElementById('cur-dot');
      const ring = document.getElementById('cur-ring');
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      });
      (function tick() {
        rx += (mx - rx) * .1; ry += (my - ry) * .1;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(tick);
      })();
      document.addEventListener('mouseover', e => {
        const el = e.target.closest('a,button,[data-page]');
        if (el) { dot.style.width = '14px'; dot.style.height = '14px'; }
        else { dot.style.width = '7px'; dot.style.height = '7px'; }
      });

      /* Page titles per section */
      const titles = {
        home: '<span class="italic">Karan</span> Ku.<sup class="t-sup">Nayak</sup>',
        works: '<span class="italic">My</span> Works<sup class="t-sup">01</sup>',
        about: '<span class="italic">About</span> Me<sup class="t-sup">02</sup>',
        experience: '<span class="italic">Experience</span><sup class="t-sup">03</sup>',
        contact: '<span class="italic">Con</span>tact<sup class="t-sup">04</sup>',
      };

      const chromeNav = document.getElementById('chrome-nav');
      const navGhost = document.getElementById('nav-ghost');
      const heroTitle = document.getElementById('hero-title');
      const overlay = document.getElementById('overlay');
      const ovTitle = document.getElementById('ov-title');
      const ovPct = document.getElementById('ov-pct');
      const navLinks = document.querySelectorAll('.nav-link');
      let current = 'home';

      /* Nav hover */
      navLinks.forEach(l => {
        l.addEventListener('mouseenter', () => {
          navGhost.textContent = l.getAttribute('data-name');
          chromeNav.classList.add('hovered');
        });
        l.addEventListener('mouseleave', () => chromeNav.classList.remove('hovered'));
      });

      /* Navigate */
      function goTo(pageId) {
        if (pageId === current) return;
        const name = document.querySelector(`[data-page="${pageId}"]`)?.getAttribute('data-name') || pageId;
        ovTitle.textContent = name;
        overlay.classList.add('show');
        chromeNav.classList.remove('hovered');
        let pct = 0; ovPct.textContent = '0';
        const iv = setInterval(() => {
          pct += Math.floor(Math.random() * 14) + 5;
          if (pct >= 100) {
            pct = 100; ovPct.textContent = pct; clearInterval(iv);
            setTimeout(() => {
              switchPage(pageId);
              overlay.classList.remove('show');
              ovPct.textContent = 0;
              window.scrollTo(0, 0);
            }, 320);
          } else ovPct.textContent = pct;
        }, 42);
      }

      function switchPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + pageId).classList.add('active');
        heroTitle.innerHTML = titles[pageId] || titles.home;
        current = pageId;
        /* active nav link */
        navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('data-page') === pageId));
      }

      document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault();
          goTo(el.getAttribute('data-page'));
        });
      });

      /* Set home as default active */
      navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('data-page') === 'home'));
      /* ── Contact Form ── */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.cf-btn');
        btn.textContent = 'Sending…';
        btn.disabled = true;

        const data = new FormData(contactForm);

        try {
          const res = await fetch('https://formspree.io/f/xnjlzbne', { 
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
          });

          if (res.ok) {
            btn.textContent = 'Message sent ✓';
            contactForm.reset();
          } else {
            btn.textContent = 'Error — try again';
            btn.disabled = false;
          }
        } catch {
          btn.textContent = 'Error — try again';
          btn.disabled = false;
        }
      });
    }
    })();