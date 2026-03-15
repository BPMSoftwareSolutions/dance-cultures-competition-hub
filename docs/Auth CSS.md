---

# Auth CSS

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
  background: #eef2f6;
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

h1,
h2,
h3,
p,
ul {
  margin: 0;
}

ul {
  padding-left: 1.25rem;
}

/* =========================
   TOKENS
========================= */

:root {
  --bg: #eef2f6;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --surface-dark: #0f172a;
  --surface-dark-2: #111827;

  --text: #1f2937;
  --text-soft: #64748b;
  --text-light: #cbd5e1;
  --heading: #0f172a;

  --border: #d9e2ec;
  --border-strong: #c7d2df;

  --primary: #5b4bdb;
  --primary-dark: #4738c7;
  --primary-soft: #ece9ff;

  --success: #15803d;
  --warning: #b45309;
  --danger: #b42318;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 20px 50px rgba(15, 23, 42, 0.12);

  --radius-sm: 10px;
  --radius-md: 18px;
  --radius-lg: 28px;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
}

/* =========================
   PAGE LAYOUT
========================= */

.auth-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(91, 75, 219, 0.08), transparent 28%),
    linear-gradient(180deg, #f6f8fb 0%, #eef2f6 100%);
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
}

.auth-shell-centered {
  grid-template-columns: 1fr;
  place-items: center;
  padding: var(--space-8);
}

.auth-brand-panel {
  position: relative;
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(17, 24, 39, 0.96)),
    linear-gradient(135deg, #0f172a, #1e293b);
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: clamp(2rem, 4vw, 4rem);
  overflow: hidden;
}

.auth-brand-panel::before,
.auth-brand-panel::after {
  content: "";
  position: absolute;
  border-radius: 999px;
  opacity: 0.25;
  pointer-events: none;
}

.auth-brand-panel::before {
  width: 420px;
  height: 420px;
  background: rgba(91, 75, 219, 0.28);
  top: -120px;
  right: -80px;
  filter: blur(20px);
}

.auth-brand-panel::after {
  width: 280px;
  height: 280px;
  background: rgba(255, 255, 255, 0.08);
  bottom: -70px;
  left: -40px;
  filter: blur(10px);
}

.auth-brand-content {
  position: relative;
  z-index: 1;
  max-width: 560px;
  display: grid;
  gap: var(--space-5);
}

.auth-logo {
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
}

.auth-brand-content h1 {
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.auth-description {
  font-size: 1.05rem;
  color: var(--text-light);
  max-width: 44ch;
}

.auth-feature-list {
  margin-top: var(--space-3);
  display: grid;
  gap: var(--space-3);
  color: #e2e8f0;
}

.auth-feature-list li {
  list-style: none;
  position: relative;
  padding-left: 1.5rem;
}

.auth-feature-list li::before {
  content: "";
  position: absolute;
  top: 0.62rem;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #8b7fff;
}

/* =========================
   FORM PANEL
========================= */

.auth-form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1.5rem, 4vw, 4rem);
}

.auth-card {
  width: 100%;
  max-width: 520px;
  background: var(--surface);
  border: 1px solid rgba(217, 226, 236, 0.9);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  display: grid;
  gap: var(--space-6);
}

.auth-card-message {
  max-width: 560px;
  text-align: center;
}

.auth-card-header {
  display: grid;
  gap: var(--space-3);
}

.auth-card-header h2 {
  font-size: clamp(1.7rem, 2vw, 2.2rem);
  line-height: 1.15;
  color: var(--heading);
  letter-spacing: -0.02em;
}

.auth-card-header p {
  color: var(--text-soft);
  max-width: 50ch;
}

.auth-card-message .auth-card-header {
  justify-items: center;
}

.auth-card-message .auth-card-header p {
  max-width: 44ch;
}

/* =========================
   TYPOGRAPHY HELPERS
========================= */

.auth-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 800;
  color: #7c8aa0;
}

.auth-brand-panel .auth-eyebrow {
  color: #c8d2e2;
}

/* =========================
   FORMS
========================= */

.auth-form {
  display: grid;
  gap: var(--space-5);
}

.form-group {
  display: grid;
  gap: var(--space-2);
}

.form-group label,
.checkbox-field {
  font-weight: 700;
  color: var(--heading);
}

.form-group input {
  width: 100%;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  border-radius: 14px;
  padding: 0.95rem 1rem;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

input:hover,
select:hover,
textarea:hover {
  border-color: var(--border-strong);
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(91, 75, 219, 0.12);
}

.auth-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.checkbox-field {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text);
  cursor: pointer;
}

.checkbox-field input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--primary);
}

.form-actions,
.message-actions,
.social-auth {
  display: grid;
  gap: var(--space-3);
}

/* =========================
   BUTTONS / LINKS
========================= */

button,
.auth-link-button {
  appearance: none;
  border: 1px solid transparent;
  background: var(--primary);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.95rem 1.25rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}

button:hover,
.auth-link-button:hover {
  background: var(--primary-dark);
}

button:active,
.auth-link-button:active {
  transform: translateY(1px);
}

button:focus-visible,
.auth-link-button:focus-visible,
.auth-link:focus-visible,
input:focus-visible {
  outline: none;
}

button:focus-visible,
.auth-link-button:focus-visible {
  box-shadow: 0 0 0 4px rgba(91, 75, 219, 0.16);
}

.social-auth button {
  background: #ffffff;
  color: var(--heading);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.social-auth button:hover {
  background: var(--surface-soft);
  border-color: var(--border-strong);
}

.auth-link {
  color: var(--primary);
  font-weight: 700;
}

.auth-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}

.auth-card-footer {
  padding-top: var(--space-2);
  border-top: 1px solid #edf2f7;
}

.auth-card-footer p {
  color: var(--text-soft);
}

.message-actions {
  justify-items: stretch;
}

.auth-card-message .message-actions {
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
}

/* =========================
   DIVIDER
========================= */

.auth-divider {
  position: relative;
  text-align: center;
}

.auth-divider::before {
  content: "";
  position: absolute;
  inset: 50% 0 auto 0;
  border-top: 1px solid #e5ebf2;
  transform: translateY(-50%);
}

.auth-divider span {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 0.9rem;
  background: var(--surface);
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 600;
}

/* =========================
   PASSWORD RULES
========================= */

.password-rules {
  background: var(--surface-soft);
  border: 1px solid #e7edf4;
  border-radius: var(--radius-md);
  padding: var(--space-4);
  display: grid;
  gap: var(--space-3);
}

.password-rules h3 {
  font-size: 1rem;
  color: var(--heading);
}

.password-rules ul {
  margin: 0;
  padding-left: 1.15rem;
  color: var(--text-soft);
  display: grid;
  gap: var(--space-2);
}

/* =========================
   STATUS / MESSAGE VARIANTS
========================= */

.auth-card-message .auth-eyebrow {
  justify-self: center;
}

.password-updated-page .auth-card,
.verify-email-page .auth-card,
.check-email-page .auth-card {
  max-width: 560px;
}

/* Optional success-style button spacing */
.message-actions > * {
  width: 100%;
}

/* =========================
   SMALL VISUAL ENHANCEMENTS
========================= */

.auth-card strong {
  color: var(--heading);
}

.auth-shell-centered .auth-form-panel {
  width: 100%;
  padding: 0;
}

.forgot-password-page .auth-card,
.reset-password-page .auth-card {
  max-width: 500px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1024px) {
  .auth-shell {
    grid-template-columns: 1fr;
  }

  .auth-brand-panel {
    min-height: 320px;
  }

  .auth-brand-content {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .auth-form-panel,
  .auth-shell-centered {
    padding: var(--space-4);
  }

  .auth-brand-panel {
    padding: var(--space-8) var(--space-5);
    min-height: auto;
  }

  .auth-card {
    border-radius: 22px;
    padding: var(--space-5);
  }

  .auth-card-header h2 {
    font-size: 1.7rem;
  }

  .auth-row {
    flex-direction: column;
    align-items: flex-start;
  }

  button,
  .auth-link-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .auth-brand-content h1 {
    font-size: 1.9rem;
  }

  .auth-logo {
    font-size: 1.35rem;
  }

  .auth-card {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  input,
  select,
  textarea {
    padding: 0.9rem 0.95rem;
  }
}
```

---

# How to attach it

In your HTML `<head>`:

```html
<link rel="stylesheet" href="auth.css" />
```

Or inline:

```html
<style>
  /* paste the CSS here */
</style>
```

---

# Nice next step

The cleanest next move is to add:

* error states
* success alerts
* password visibility toggle
* field validation styles
* subtle icon support
