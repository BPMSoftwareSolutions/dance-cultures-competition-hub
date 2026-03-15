Here’s a **complete CSS foundation** for the screens we mapped out.

It gives you a clean, modern app feel with:

* sidebar + topbar layout
* dashboard cards
* tables
* forms
* panels
* mobile day mode
* reusable buttons, badges, and status styles

## Full CSS

```css
/* =========================
   RESET / BASE
========================= */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  color: #1f2937;
  background: #f4f6f8;
}

img,
svg,
video {
  display: block;
  max-width: 100%;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding-left: 1.25rem;
}

h1,
h2,
h3,
h4,
p,
dl,
dd {
  margin: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
}

:root {
  --bg: #f4f6f8;
  --surface: #ffffff;
  --surface-2: #f9fafb;
  --border: #dbe2ea;
  --border-strong: #c7d0db;
  --text: #1f2937;
  --muted: #6b7280;
  --heading: #111827;
  --primary: #5b4bdb;
  --primary-dark: #4535bb;
  --primary-soft: #ece9ff;
  --success: #17803d;
  --success-soft: #eaf7ef;
  --warning: #b45309;
  --warning-soft: #fff4e5;
  --danger: #b42318;
  --danger-soft: #fdecec;
  --shadow-sm: 0 1px 2px rgba(16, 24, 40, 0.06);
  --shadow-md: 0 10px 25px rgba(16, 24, 40, 0.08);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
}

/* =========================
   APP LAYOUT
========================= */

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
}

.sidebar {
  background: #111827;
  color: #f9fafb;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.brand h1 {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.2;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-2);
}

.main-nav a {
  display: block;
  padding: 0.8rem 0.95rem;
  border-radius: var(--radius-sm);
  color: #d1d5db;
  transition: background 0.2s ease, color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.main-panel {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  position: sticky;
  top: 0;
  z-index: 20;
}

.topbar-left,
.topbar-right {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.page-content,
.page {
  padding: var(--space-6);
}

.page {
  display: grid;
  gap: var(--space-6);
}

/* =========================
   TYPOGRAPHY / HEADERS
========================= */

.eyebrow {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  margin-bottom: var(--space-2);
  font-weight: 700;
}

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.page-header h2 {
  font-size: 1.9rem;
  color: var(--heading);
  line-height: 1.15;
  margin-bottom: var(--space-2);
}

.page-header p {
  color: var(--muted);
}

.page-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

/* =========================
   PANELS / CARDS
========================= */

.panel,
.summary-card,
.performance-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.panel {
  padding: var(--space-5);
}

.panel > header,
.performance-card > header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.panel h3,
.summary-card h3,
.performance-card h3 {
  color: var(--heading);
  font-size: 1.05rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4);
}

.summary-card {
  padding: var(--space-5);
}

.summary-card p {
  margin-top: var(--space-2);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary);
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1fr;
  gap: var(--space-4);
}

.detail-grid,
.mix-builder-layout,
.assets-layout,
.competition-day-bottom-grid {
  display: grid;
  gap: var(--space-4);
}

.detail-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mix-builder-layout {
  grid-template-columns: 1.5fr 1fr;
}

.assets-layout {
  grid-template-columns: 280px 1fr;
}

.competition-day-bottom-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* =========================
   BUTTONS
========================= */

button,
.button,
.page-actions a,
.performance-card footer a {
  appearance: none;
  border: 1px solid transparent;
  background: var(--primary);
  color: #ffffff;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease, border-color 0.2s ease;
}

button:hover,
.button:hover,
.page-actions a:hover,
.performance-card footer a:hover {
  background: var(--primary-dark);
}

button:active,
.button:active {
  transform: translateY(1px);
}

button.secondary,
.button.secondary {
  background: var(--surface);
  color: var(--text);
  border-color: var(--border);
}

button.secondary:hover,
.button.secondary:hover {
  background: var(--surface-2);
}

.action-list,
.output-actions,
.mobile-actions,
.form-actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

/* =========================
   FORMS
========================= */

.search-form {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.search-form label {
  font-weight: 600;
  color: var(--muted);
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  border-radius: 12px;
  padding: 0.8rem 0.95rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(91, 75, 219, 0.12);
}

label {
  display: grid;
  gap: var(--space-2);
  font-weight: 600;
  color: var(--heading);
}

textarea {
  resize: vertical;
  min-height: 140px;
}

.filters-bar form,
.performance-form,
.transitions-form {
  display: grid;
  gap: var(--space-4);
}

.filters-bar form {
  grid-template-columns: repeat(2, minmax(180px, 240px));
}

.performance-form .panel {
  display: grid;
  gap: var(--space-4);
}

.section-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: var(--space-3);
}

fieldset {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: grid;
  gap: var(--space-3);
}

legend {
  padding: 0 var(--space-2);
  font-weight: 700;
  color: var(--heading);
}

/* =========================
   LISTS / STATUS / BADGES
========================= */

.performance-status-list,
.activity-feed,
.source-track-list,
.deliverables-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.performance-status-list li,
.activity-feed li,
.deliverables-list li,
.folder-panel li {
  border-top: 1px solid var(--border);
}

.performance-status-list li:first-child,
.activity-feed li:first-child,
.deliverables-list li:first-child,
.folder-panel li:first-child {
  border-top: 0;
}

.performance-status-list a,
.activity-feed li,
.deliverables-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: 0.9rem 0;
}

.activity-feed time {
  min-width: 60px;
  color: var(--muted);
  font-weight: 700;
}

.status,
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 700;
}

.status-ready,
.badge-ready {
  background: var(--success-soft);
  color: var(--success);
}

.status-review,
.badge-review {
  background: var(--warning-soft);
  color: var(--warning);
}

.status-warning,
.badge-warning {
  background: var(--danger-soft);
  color: var(--danger);
}

.badge {
  background: var(--primary-soft);
  color: var(--primary);
}

/* =========================
   TABLES
========================= */

table {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
}

caption {
  text-align: left;
  padding: 0 0 var(--space-3);
  color: var(--muted);
  font-weight: 600;
}

thead {
  background: var(--surface-2);
}

th,
td {
  padding: 0.95rem 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: 0;
}

th {
  color: var(--heading);
  font-weight: 700;
}

tbody tr:hover {
  background: #fafbff;
}

/* =========================
   PERFORMANCE CARDS
========================= */

.performance-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.performance-card {
  padding: var(--space-5);
  display: grid;
  gap: var(--space-3);
}

.performance-card p {
  color: var(--muted);
}

.performance-card footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

/* =========================
   DETAIL PAGE
========================= */

dl {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: var(--space-3) var(--space-4);
}

dt {
  font-weight: 700;
  color: var(--heading);
}

dd {
  color: var(--muted);
}

.breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-3);
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.95rem;
}

.breadcrumb li::after {
  content: "/";
  margin-left: var(--space-2);
  color: var(--border-strong);
}

.breadcrumb li:last-child::after {
  content: "";
  margin: 0;
}

.deliverables-list li {
  padding: 0.85rem 0;
}

/* =========================
   MIX BUILDER
========================= */

.timeline-ruler {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-2);
  margin-bottom: var(--space-4);
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 700;
}

.timeline-tracks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.track-item {
  display: grid;
  gap: var(--space-3);
}

.timeline-segments {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.segment {
  background: var(--primary-soft);
  color: var(--primary);
  border: 1px solid #d7d1ff;
  border-radius: 999px;
  padding: 0.75rem 1rem;
  font-weight: 700;
}

.source-track-list > li {
  display: grid;
  gap: var(--space-3);
}

.source-track-list ul {
  padding-left: 1rem;
  color: var(--muted);
}

/* =========================
   ASSETS
========================= */

.folder-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.folder-panel a {
  display: block;
  padding: 0.85rem 0;
  color: var(--text);
  font-weight: 600;
}

.folder-panel a:hover {
  color: var(--primary);
}

/* =========================
   MOBILE DAY MODE
========================= */

.mobile-day-mode-page {
  max-width: 560px;
  margin: 0 auto;
}

.mobile-day-header {
  text-align: center;
  display: grid;
  gap: var(--space-2);
}

.mobile-day-header h2 {
  font-size: 1.6rem;
  color: var(--heading);
}

.next-up-panel {
  text-align: center;
}

.next-performance {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
}

/* =========================
   HELPERS
========================= */

.hidden {
  display: none !important;
}

.text-muted {
  color: var(--muted);
}

.text-center {
  text-align: center;
}

.surface-soft {
  background: var(--surface-2);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1200px) {
  .dashboard-grid,
  .mix-builder-layout,
  .detail-grid,
  .competition-day-bottom-grid,
  .performance-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .summary-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .assets-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding: var(--space-4);
  }

  .main-nav ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .topbar-left,
  .topbar-right,
  .page-header,
  .action-list,
  .output-actions,
  .mobile-actions,
  .form-actions {
    width: 100%;
  }

  .dashboard-grid,
  .mix-builder-layout,
  .detail-grid,
  .competition-day-bottom-grid,
  .performance-card-grid,
  .summary-cards,
  .filters-bar form,
  .section-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .page,
  .page-content {
    padding: var(--space-4);
  }

  .panel,
  .summary-card,
  .performance-card {
    padding: var(--space-4);
  }

  .page-header h2 {
    font-size: 1.5rem;
  }

  .topbar {
    padding: var(--space-4);
  }

  th,
  td {
    padding: 0.75rem;
    font-size: 0.95rem;
  }

  button,
  .button,
  .page-actions a,
  .performance-card footer a {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
}
```

## How to attach it

Add this inside your HTML `<head>`:

```html
<link rel="stylesheet" href="styles.css" />
```

Or paste it directly into a `<style>` tag:

```html
<style>
  /* paste CSS here */
</style>
```

## Nice next upgrade

The best next move is to pair this with a small design system using reusable classes for:

* `.btn-primary`
* `.btn-secondary`
* `.card`
* `.panel`
* `.status-*`
* `.grid-*`

That will make the app much easier to scale as you add more dance competitions, performers, mixes, and assets.
