# Auth UI enhancements CSS

```css
/* =========================
   EXTRA TOKENS
========================= */

:root {
  --info: #1d4ed8;
  --info-soft: #eff6ff;

  --success-soft: #ecfdf3;
  --warning-soft: #fff7ed;
  --danger-soft: #fef2f2;

  --success-border: #bbf7d0;
  --warning-border: #fed7aa;
  --danger-border: #fecaca;
  --info-border: #bfdbfe;

  --success-text: #166534;
  --warning-text: #9a3412;
  --danger-text: #b42318;
  --info-text: #1d4ed8;

  --field-bg-invalid: #fffafa;
  --field-bg-valid: #f7fff9;
  --field-ring-invalid: rgba(180, 35, 24, 0.14);
  --field-ring-valid: rgba(21, 128, 61, 0.14);

  --disabled-bg: #cbd5e1;
  --disabled-text: #64748b;
}

/* =========================
   FORM HELPERS
========================= */

.form-group {
  position: relative;
}

.field-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.field-helper {
  font-size: 0.88rem;
  color: var(--text-soft);
  margin-top: 0.35rem;
}

.field-note {
  font-size: 0.82rem;
  color: var(--text-soft);
}

.field-required {
  color: var(--danger);
  margin-left: 0.2rem;
}

/* =========================
   INPUT WITH ICON / ACTION
========================= */

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrap input {
  padding-right: 3rem;
}

.input-icon {
  position: absolute;
  left: 0.95rem;
  width: 1rem;
  height: 1rem;
  color: #94a3b8;
  pointer-events: none;
}

.input-wrap.has-leading-icon input {
  padding-left: 2.65rem;
  padding-right: 1rem;
}

.input-wrap.has-leading-icon .input-icon {
  left: 0.95rem;
}

.field-action {
  position: absolute;
  right: 0.65rem;
  border: 0;
  background: transparent;
  color: var(--text-soft);
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
}

.field-action:hover {
  background: #f1f5f9;
  color: var(--heading);
}

.field-action:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(91, 75, 219, 0.12);
}

/* =========================
   VALIDATION STATES
========================= */

.form-group.is-invalid input,
.form-group.is-invalid select,
.form-group.is-invalid textarea {
  border-color: var(--danger);
  background: var(--field-bg-invalid);
  box-shadow: 0 0 0 4px var(--field-ring-invalid);
}

.form-group.is-valid input,
.form-group.is-valid select,
.form-group.is-valid textarea {
  border-color: var(--success);
  background: var(--field-bg-valid);
  box-shadow: 0 0 0 4px var(--field-ring-valid);
}

.field-error,
.field-success {
  margin-top: 0.45rem;
  font-size: 0.88rem;
  font-weight: 600;
}

.field-error {
  color: var(--danger-text);
}

.field-success {
  color: var(--success-text);
}

/* =========================
   ALERTS
========================= */

.auth-alert {
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0.95rem 1rem;
  display: grid;
  gap: 0.35rem;
}

.auth-alert-title {
  font-weight: 800;
  font-size: 0.95rem;
}

.auth-alert p {
  margin: 0;
  font-size: 0.92rem;
}

.auth-alert-info {
  background: var(--info-soft);
  border-color: var(--info-border);
  color: var(--info-text);
}

.auth-alert-success {
  background: var(--success-soft);
  border-color: var(--success-border);
  color: var(--success-text);
}

.auth-alert-warning {
  background: var(--warning-soft);
  border-color: var(--warning-border);
  color: var(--warning-text);
}

.auth-alert-danger {
  background: var(--danger-soft);
  border-color: var(--danger-border);
  color: var(--danger-text);
}

/* =========================
   BUTTON STATES
========================= */

button.is-secondary,
.auth-link-button.is-secondary {
  background: #ffffff;
  color: var(--heading);
  border-color: var(--border);
}

button.is-secondary:hover,
.auth-link-button.is-secondary:hover {
  background: var(--surface-soft);
}

button.is-danger {
  background: var(--danger);
}

button.is-danger:hover {
  background: #991b1b;
}

button:disabled,
.auth-link-button:disabled,
button.is-disabled {
  background: var(--disabled-bg);
  color: var(--disabled-text);
  border-color: var(--disabled-bg);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

button.is-loading {
  position: relative;
  color: transparent !important;
  pointer-events: none;
}

button.is-loading::after {
  content: "";
  position: absolute;
  inset: 50% auto auto 50%;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  margin-left: -9px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  animation: auth-spin 0.8s linear infinite;
}

button.is-secondary.is-loading::after {
  border: 2px solid rgba(15, 23, 42, 0.15);
  border-top-color: var(--heading);
}

@keyframes auth-spin {
  to {
    transform: rotate(360deg);
  }
}

/* =========================
   PASSWORD STRENGTH
========================= */

.password-strength {
  display: grid;
  gap: 0.55rem;
}

.password-strength-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: #e5ebf2;
  overflow: hidden;
}

.password-strength-fill {
  height: 100%;
  width: 0%;
  border-radius: 999px;
  transition: width 0.25s ease;
}

.password-strength-fill.is-weak {
  width: 33%;
  background: #f97316;
}

.password-strength-fill.is-medium {
  width: 66%;
  background: #eab308;
}

.password-strength-fill.is-strong {
  width: 100%;
  background: #22c55e;
}

.password-strength-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-soft);
}

/* =========================
   PASSWORD RULE CHECKLIST
========================= */

.password-rules.is-compact {
  gap: var(--space-2);
}

.password-rule-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.password-rule {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-soft);
  font-size: 0.92rem;
}

.password-rule::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #cbd5e1;
  flex: 0 0 auto;
}

.password-rule.is-met {
  color: var(--success-text);
  font-weight: 600;
}

.password-rule.is-met::before {
  background: var(--success);
}

/* =========================
   INLINE STATUS ROWS
========================= */

.form-status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.form-meta-text {
  font-size: 0.88rem;
  color: var(--text-soft);
}

/* =========================
   AUTH CARD ICON BADGE
========================= */

.auth-status-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-2);
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  font-weight: 800;
}

.auth-status-icon.success {
  background: var(--success-soft);
  color: var(--success-text);
}

.auth-status-icon.info {
  background: var(--info-soft);
  color: var(--info-text);
}

.auth-status-icon.warning {
  background: var(--warning-soft);
  color: var(--warning-text);
}

.auth-status-icon.danger {
  background: var(--danger-soft);
  color: var(--danger-text);
}

/* =========================
   CODE / TOKEN / EMAIL TEXT
========================= */

.inline-emphasis {
  color: var(--heading);
  font-weight: 800;
}

.inline-code {
  display: inline-block;
  padding: 0.2rem 0.45rem;
  border-radius: 8px;
  background: #f1f5f9;
  color: var(--heading);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.88rem;
}

/* =========================
   RESEND / TEXT ACTIONS
========================= */

.text-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.text-actions .auth-link {
  font-size: 0.92rem;
}

/* =========================
   SHAKE FOR INVALID SUBMIT
========================= */

.auth-card.has-error {
  animation: auth-shake 0.28s ease-in-out 1;
}

@keyframes auth-shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
  100% { transform: translateX(0); }
}

/* =========================
   DARK BRAND PANEL SMALL BADGES
========================= */

.auth-brand-stats {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  margin-top: var(--space-3);
}

.auth-brand-stat {
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #e5e7eb;
  font-size: 0.88rem;
  font-weight: 700;
  backdrop-filter: blur(6px);
}

/* =========================
   RESPONSIVE ENHANCEMENTS
========================= */

@media (max-width: 720px) {
  .field-label-row,
  .form-status-row,
  .text-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .auth-status-icon {
    width: 56px;
    height: 56px;
    font-size: 1.2rem;
  }
}
```

---

# Recommended HTML additions

To use the extra CSS well, here are the **small markup upgrades** I’d add to your auth pages.

---

## 1) Error alert at top of login form

```html
<div class="auth-alert auth-alert-danger" role="alert" aria-live="polite">
  <div class="auth-alert-title">Login failed</div>
  <p>Your email or password was incorrect. Please try again.</p>
</div>
```

---

## 2) Info alert on forgot password

```html
<div class="auth-alert auth-alert-info" role="status" aria-live="polite">
  <div class="auth-alert-title">Need help?</div>
  <p>Enter the email tied to your account and we’ll send a reset link.</p>
</div>
```

---

## 3) Invalid field example

```html
<div class="form-group is-invalid">
  <label for="login-email">Email Address</label>
  <input
    id="login-email"
    name="email"
    type="email"
    aria-invalid="true"
    aria-describedby="login-email-error"
  />
  <p id="login-email-error" class="field-error">Please enter a valid email address.</p>
</div>
```

---

## 4) Valid field example

```html
<div class="form-group is-valid">
  <label for="register-email">Email Address</label>
  <input
    id="register-email"
    name="email"
    type="email"
    aria-describedby="register-email-success"
  />
  <p id="register-email-success" class="field-success">This email looks good.</p>
</div>
```

---

## 5) Password field with show / hide toggle

```html
<div class="form-group">
  <label for="register-password">Password</label>

  <div class="input-wrap">
    <input
      id="register-password"
      name="password"
      type="password"
      autocomplete="new-password"
      placeholder="Create a password"
    />
    <button class="field-action" type="button" aria-label="Show password">
      Show
    </button>
  </div>

  <p class="field-helper">Use at least 8 characters with a number and symbol.</p>
</div>
```

---

## 6) Password strength block

```html
<div class="password-strength" aria-live="polite">
  <div class="password-strength-bar">
    <div class="password-strength-fill is-medium"></div>
  </div>
  <div class="password-strength-label">Password strength: Medium</div>
</div>
```

---

## 7) Password rule checklist

```html
<section class="password-rules is-compact" aria-label="Password requirements">
  <h3>Password requirements</h3>

  <ul class="password-rule-list">
    <li class="password-rule is-met">At least 8 characters</li>
    <li class="password-rule">At least 1 number</li>
    <li class="password-rule">At least 1 special character</li>
  </ul>
</section>
```

---

## 8) Loading button example

```html
<button type="submit" class="is-loading">Log In</button>
```

---

## 9) Success message screen with icon

```html
<div class="auth-card auth-card-message">
  <div class="auth-status-icon success" aria-hidden="true">✓</div>

  <header class="auth-card-header">
    <p class="auth-eyebrow">Success</p>
    <h2>Password updated</h2>
    <p>Your password has been updated successfully. You can now log in.</p>
  </header>

  <div class="message-actions">
    <a href="/login" class="auth-link-button">Go to Log In</a>
  </div>
</div>
```

---

# Tiny JavaScript you’ll probably want next

For the password toggle:

```html
<script>
  document.querySelectorAll('.field-action').forEach((button) => {
    button.addEventListener('click', () => {
      const wrap = button.closest('.input-wrap');
      const input = wrap?.querySelector('input');

      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      button.textContent = isPassword ? 'Hide' : 'Show';
      button.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });
</script>
```
