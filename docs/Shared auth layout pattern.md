# Shared auth layout pattern

Each page uses:

* `auth-page`
* `auth-shell`
* `auth-brand-panel`
* `auth-form-panel`
* `auth-card`

That makes the CSS phase much easier.

---

## 1) Login page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page login-page">
    <div class="auth-shell">
      <section class="auth-brand-panel" aria-label="Brand introduction">
        <div class="auth-brand-content">
          <a href="/" class="auth-logo">Dance Cultures Hub</a>
          <p class="auth-eyebrow">Competition Content Management</p>
          <h1>Create mixes. Track routines. Stay competition-ready.</h1>
          <p class="auth-description">
            Manage music cuts, reference videos, routine notes, and competition-day readiness in one place.
          </p>

          <ul class="auth-feature-list">
            <li>Routine management</li>
            <li>Reference video tracking</li>
            <li>Mix builder workflow</li>
            <li>Competition day prep</li>
          </ul>
        </div>
      </section>

      <section class="auth-form-panel" aria-label="Login form area">
        <div class="auth-card">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Welcome Back</p>
            <h2>Log in to your account</h2>
            <p>Access routines, mixes, assets, and competition planning tools.</p>
          </header>

          <form class="auth-form" action="/dashboard" method="post">
            <div class="form-group">
              <label for="login-email">Email Address</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="login-password">Password</label>
              <input
                id="login-password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div class="auth-row">
              <label class="checkbox-field" for="remember-me">
                <input id="remember-me" name="remember_me" type="checkbox" />
                <span>Remember me</span>
              </label>

              <a href="/forgot-password" class="auth-link">Forgot password?</a>
            </div>

            <div class="form-actions">
              <button type="submit">Log In</button>
            </div>
          </form>

          <div class="auth-divider" aria-hidden="true">
            <span>Or continue with</span>
          </div>

          <div class="social-auth">
            <button type="button">Continue with Google</button>
          </div>

          <footer class="auth-card-footer">
            <p>Don’t have an account? <a href="/register" class="auth-link">Sign up</a></p>
          </footer>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 2) Register page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page register-page">
    <div class="auth-shell">
      <section class="auth-brand-panel" aria-label="Brand introduction">
        <div class="auth-brand-content">
          <a href="/" class="auth-logo">Dance Cultures Hub</a>
          <p class="auth-eyebrow">Set Up Your Workspace</p>
          <h1>Build your competition workflow from day one.</h1>
          <p class="auth-description">
            Create an account to organize routines, track edits, store references, and prepare for performance day.
          </p>
        </div>
      </section>

      <section class="auth-form-panel" aria-label="Registration form area">
        <div class="auth-card">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Create Account</p>
            <h2>Start your workspace</h2>
            <p>Set up your account for routine management and music production planning.</p>
          </header>

          <form class="auth-form" action="/verify-email" method="post">
            <div class="form-group">
              <label for="register-name">Full Name</label>
              <input
                id="register-name"
                name="full_name"
                type="text"
                autocomplete="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-email">Email Address</label>
              <input
                id="register-email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-password">Password</label>
              <input
                id="register-password"
                name="password"
                type="password"
                autocomplete="new-password"
                placeholder="Create a password"
                required
              />
            </div>

            <div class="form-group">
              <label for="register-confirm-password">Confirm Password</label>
              <input
                id="register-confirm-password"
                name="confirm_password"
                type="password"
                autocomplete="new-password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <label class="checkbox-field" for="accept-terms">
              <input id="accept-terms" name="accept_terms" type="checkbox" required />
              <span>I agree to the Terms and Privacy Policy</span>
            </label>

            <div class="form-actions">
              <button type="submit">Create Account</button>
            </div>
          </form>

          <footer class="auth-card-footer">
            <p>Already have an account? <a href="/login" class="auth-link">Log in</a></p>
          </footer>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 3) Forgot password page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Forgot Password | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page forgot-password-page">
    <div class="auth-shell auth-shell-centered">
      <section class="auth-form-panel" aria-label="Forgot password form area">
        <div class="auth-card">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Forgot Password</p>
            <h2>Reset your password</h2>
            <p>Enter your email address and we’ll send you a password reset link.</p>
          </header>

          <form class="auth-form" action="/check-email" method="post">
            <div class="form-group">
              <label for="forgot-email">Email Address</label>
              <input
                id="forgot-email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div class="form-actions">
              <button type="submit">Send Reset Link</button>
            </div>
          </form>

          <footer class="auth-card-footer">
            <p><a href="/login" class="auth-link">Back to Log In</a></p>
          </footer>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 4) Check email page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Check Email | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page check-email-page">
    <div class="auth-shell auth-shell-centered">
      <section class="auth-form-panel" aria-label="Check email message">
        <div class="auth-card auth-card-message">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Check Your Email</p>
            <h2>Password reset link sent</h2>
            <p>
              We sent a password reset link to <strong>user@email.com</strong>.
              Open the link in your inbox to continue.
            </p>
          </header>

          <div class="message-actions">
            <button type="button">Resend Email</button>
            <a href="/login" class="auth-link-button">Back to Log In</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 5) Reset password page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Password | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page reset-password-page">
    <div class="auth-shell auth-shell-centered">
      <section class="auth-form-panel" aria-label="Reset password form area">
        <div class="auth-card">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Reset Password</p>
            <h2>Create a new password</h2>
            <p>Choose a strong password for your account.</p>
          </header>

          <form class="auth-form" action="/password-updated" method="post">
            <div class="form-group">
              <label for="new-password">New Password</label>
              <input
                id="new-password"
                name="new_password"
                type="password"
                autocomplete="new-password"
                placeholder="Enter new password"
                required
              />
            </div>

            <div class="form-group">
              <label for="confirm-new-password">Confirm New Password</label>
              <input
                id="confirm-new-password"
                name="confirm_new_password"
                type="password"
                autocomplete="new-password"
                placeholder="Confirm new password"
                required
              />
            </div>

            <section class="password-rules" aria-label="Password requirements">
              <h3>Password requirements</h3>
              <ul>
                <li>At least 8 characters</li>
                <li>At least 1 number</li>
                <li>At least 1 special character</li>
              </ul>
            </section>

            <div class="form-actions">
              <button type="submit">Update Password</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 6) Password updated success page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Updated | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page password-updated-page">
    <div class="auth-shell auth-shell-centered">
      <section class="auth-form-panel" aria-label="Password update confirmation">
        <div class="auth-card auth-card-message">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Success</p>
            <h2>Password updated</h2>
            <p>Your password has been updated successfully. You can now log in to your account.</p>
          </header>

          <div class="message-actions">
            <a href="/login" class="auth-link-button">Go to Log In</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

## 7) Verify email page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Email | Dance Cultures Hub</title>
</head>
<body>
  <main class="auth-page verify-email-page">
    <div class="auth-shell auth-shell-centered">
      <section class="auth-form-panel" aria-label="Verify email message">
        <div class="auth-card auth-card-message">
          <header class="auth-card-header">
            <p class="auth-eyebrow">Verify Your Email</p>
            <h2>Account created</h2>
            <p>
              Your account has been created. We sent a verification email to
              <strong>user@email.com</strong>.
            </p>
            <p>Please verify your email before accessing the full dashboard.</p>
          </header>

          <div class="message-actions">
            <button type="button">Resend Email</button>
            <a href="/login" class="auth-link-button">Go to Log In</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>
```

---

# Optional single-file version

If you want to prototype quickly, you can also place each screen in the same HTML file and toggle them later.

## Single-file auth prototype structure

```html
<main class="auth-prototype">

  <section class="auth-screen" id="login-screen">
    <!-- login markup -->
  </section>

  <section class="auth-screen" id="register-screen">
    <!-- register markup -->
  </section>

  <section class="auth-screen" id="forgot-password-screen">
    <!-- forgot password markup -->
  </section>

  <section class="auth-screen" id="check-email-screen">
    <!-- check email markup -->
  </section>

  <section class="auth-screen" id="reset-password-screen">
    <!-- reset password markup -->
  </section>

  <section class="auth-screen" id="password-updated-screen">
    <!-- password updated markup -->
  </section>

  <section class="auth-screen" id="verify-email-screen">
    <!-- verify email markup -->
  </section>

</main>
```

---

# Recommended route structure

```html
/login
/register
/forgot-password
/check-email
/reset-password
/password-updated
/verify-email
```

---

# Shared class checklist for your CSS step

These are the main classes worth styling next:

```html
.auth-page
.auth-shell
.auth-shell-centered
.auth-brand-panel
.auth-brand-content
.auth-logo
.auth-eyebrow
.auth-description
.auth-feature-list
.auth-form-panel
.auth-card
.auth-card-message
.auth-card-header
.auth-form
.form-group
.auth-row
.checkbox-field
.form-actions
.auth-divider
.social-auth
.auth-card-footer
.auth-link
.auth-link-button
.message-actions
.password-rules
```
