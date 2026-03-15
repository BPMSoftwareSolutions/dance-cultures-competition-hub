Here's a great pattern for the All Routines page.

## Best approach

For each routine card:

* **If there is only 1 YouTube video**, show a single responsive embedded video.
* **If there are 2+ videos**, show a small carousel with:

  * previous / next buttons
  * embedded iframe for the active video
  * optional video title / counter
  * dots or thumbnails later if you want

That keeps each card clean and avoids wasting space.

---

# Updated HTML structure for a routine card

## Single video card

```html
<article class="performance-card">
  <header>
    <h3><a href="/performances/eva-fashion">Eva Solo – Fashion</a></h3>
    <span class="badge">Solo</span>
  </header>

  <div class="routine-video-block">
    <div class="video-embed">
      <iframe
        src="https://www.youtube.com/embed/VIDEO_ID_1"
        title="Eva Solo - Fashion reference video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <p>Duration: 1:00</p>
  <p>Status: Draft</p>

  <footer>
    <a href="/performances/eva-fashion">Open</a>
    <button type="button">Mix Builder</button>
  </footer>
</article>
```

---

## Multi-video carousel card

```html
<article class="performance-card">
  <header>
    <h3><a href="/performances/eliza-maestro">Eliza Solo – Maestro of My Heart</a></h3>
    <span class="badge">Solo</span>
  </header>

  <section class="routine-video-carousel" aria-label="Routine reference videos">
    <div class="carousel-frame">
      <button class="carousel-btn prev" type="button" aria-label="Previous video">
        ‹
      </button>

      <div class="carousel-track">
        <div class="carousel-slide is-active" data-index="0">
          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Eliza Maestro reference video 1"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div class="carousel-slide" data-index="1">
          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="Eliza Maestro reference video 2"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <div class="carousel-slide" data-index="2">
          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="Eliza Maestro reference video 3"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <button class="carousel-btn next" type="button" aria-label="Next video">
        ›
      </button>
    </div>

    <div class="carousel-meta">
      <p class="carousel-caption">Reference Video <span class="carousel-count">1 / 3</span></p>

      <div class="carousel-dots" role="tablist" aria-label="Select routine video">
        <button class="carousel-dot is-active" type="button" aria-label="Go to video 1"></button>
        <button class="carousel-dot" type="button" aria-label="Go to video 2"></button>
        <button class="carousel-dot" type="button" aria-label="Go to video 3"></button>
      </div>
    </div>
  </section>

  <p>Duration: ~1:20</p>
  <p>Status: In Progress</p>

  <footer>
    <a href="/performances/eliza-maestro">Open</a>
    <button type="button">Mix Builder</button>
  </footer>
</article>
```

---

# CSS to add

Add this to your stylesheet.

```css
/* =========================
   ROUTINE VIDEO EMBEDS
========================= */

.routine-video-block,
.routine-video-carousel {
  margin-bottom: var(--space-4);
}

.video-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #0f172a;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.video-embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* =========================
   CAROUSEL
========================= */

.carousel-frame {
  position: relative;
}

.carousel-track {
  position: relative;
}

.carousel-slide {
  display: none;
}

.carousel-slide.is-active {
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(15, 23, 42, 0.72);
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.carousel-btn:hover {
  background: rgba(15, 23, 42, 0.9);
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.carousel-meta {
  margin-top: var(--space-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.carousel-caption {
  font-size: 0.92rem;
  color: var(--muted);
  font-weight: 600;
}

.carousel-count {
  color: var(--heading);
  font-weight: 700;
}

.carousel-dots {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 0;
  padding: 0;
  background: #d1d5db;
  cursor: pointer;
}

.carousel-dot.is-active {
  background: var(--primary);
}

/* Better spacing inside cards with videos */
.performance-card {
  align-content: start;
}
```

---

# JavaScript for the carousel

This makes each card carousel work independently.

```html
<script>
  document.querySelectorAll('.routine-video-carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const count = carousel.querySelector('.carousel-count');

    let currentIndex = 0;

    function updateCarousel(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });

      if (count) {
        count.textContent = `${index + 1} / ${slides.length}`;
      }

      currentIndex = index;
    }

    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      return;
    }

    prevBtn?.addEventListener('click', () => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(newIndex);
    });

    nextBtn?.addEventListener('click', () => {
      const newIndex = (currentIndex + 1) % slides.length;
      updateCarousel(newIndex);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateCarousel(i));
    });

    updateCarousel(0);
  });
</script>
```

---

# Even better: one reusable structure for both single and multiple videos

You can also use **one component structure** for every card and let JavaScript decide whether to show controls.

## Unified HTML pattern

```html
<article class="performance-card">
  <header>
    <h3><a href="/performances/savanna-mwa">Savanna Solo – MWA</a></h3>
    <span class="badge">Solo</span>
  </header>

  <section class="routine-video-carousel" aria-label="Routine reference videos">
    <div class="carousel-frame">
      <button class="carousel-btn prev" type="button" aria-label="Previous video">‹</button>

      <div class="carousel-track">
        <div class="carousel-slide is-active" data-index="0">
          <div class="video-embed">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Savanna MWA reference video 1"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </div>

        <!-- Add more slides only if needed -->
      </div>

      <button class="carousel-btn next" type="button" aria-label="Next video">›</button>
    </div>

    <div class="carousel-meta">
      <p class="carousel-caption">Reference Video <span class="carousel-count">1 / 1</span></p>
      <div class="carousel-dots" role="tablist" aria-label="Select routine video">
        <button class="carousel-dot is-active" type="button" aria-label="Go to video 1"></button>
      </div>
    </div>
  </section>

  <p>Duration: ~1:04</p>
  <p>Status: Review</p>

  <footer>
    <a href="/performances/savanna-mwa">Open</a>
    <button type="button">Mix Builder</button>
  </footer>
</article>
```

Then let JS hide:

* arrows when there’s only one video
* dots when there’s only one video
* maybe even the whole meta row if you want

### Add this small improvement to the JS

```html
<script>
  document.querySelectorAll('.routine-video-carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const count = carousel.querySelector('.carousel-count');
    const dotsWrap = carousel.querySelector('.carousel-dots');

    let currentIndex = 0;

    function updateCarousel(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });

      if (count) {
        count.textContent = `${index + 1} / ${slides.length}`;
      }

      currentIndex = index;
    }

    if (slides.length <= 1) {
      if (prevBtn) prevBtn.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      if (dotsWrap) dotsWrap.hidden = true;
      if (count) count.textContent = '1 / 1';
      return;
    }

    prevBtn?.addEventListener('click', () => {
      updateCarousel((currentIndex - 1 + slides.length) % slides.length);
    });

    nextBtn?.addEventListener('click', () => {
      updateCarousel((currentIndex + 1) % slides.length);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => updateCarousel(i));
    });

    updateCarousel(0);
  });
</script>
```

---

# Recommendation for your app

For your routines page, I’d use:

* **single shared component**
* always render the same video section
* hide carousel controls automatically when there’s only one video

That gives you:

* simpler code
* consistent card layout
* easy scaling later when a routine gets more reference videos

---

# Data example

If you later wire this to JavaScript data, each routine could look like this:

```js
const routines = [
  {
    title: "Eva Solo - Fashion",
    type: "Solo",
    duration: "1:00",
    status: "Draft",
    videos: [
      { youtubeId: "abc123xyz" }
    ]
  },
  {
    title: "Eliza Solo - Maestro of My Heart",
    type: "Solo",
    duration: "~1:20",
    status: "In Progress",
    videos: [
      { youtubeId: "idOne123" },
      { youtubeId: "idTwo456" },
      { youtubeId: "idThree789" }
    ]
  }
];
```

---

## Small UX note

Embedded YouTube videos inside cards are nice, but if you put **6 cards with live iframes** on one screen, the page can get heavy.

A smarter production version is:

* show a **thumbnail preview first**
* click to load the iframe only when needed

That will make the page much faster.
