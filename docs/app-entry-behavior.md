The auth flow I gave you covered the **screens**, but not the **app entry behavior** or the **state model** that decides whether a user should see auth or the app.

## What the app should do on first visit

Your app should have **two top-level states**:

* **Unauthenticated**
* **Authenticated**

And the very first load should check that state **before** deciding what screen to show.

## Recommended default behavior

When the app opens:

* if the user is **not logged in**, show **`#login`**
* if the user **is logged in**, show **`#dashboard`**

So the app should **not** default to `#dashboard` blindly.

---

# Recommended flow map

```text
APP LOAD
   |
   v
CHECK SESSION
   |
   +------------------------------+
   |                              |
   v                              v
NOT AUTHENTICATED             AUTHENTICATED
   |                              |
   v                              v
SHOW LOGIN                     SHOW DASHBOARD
   |                              |
   |                              |
   +--> Register                  +--> Performances
   +--> Forgot Password           +--> Mix Builder
   +--> Reset Password            +--> Competition Day
   +--> Verify Email              +--> Assets
```

---

# What “session state” means here

At minimum, you need a central auth state like this:

```js
const authState = {
  isAuthenticated: false,
  token: null,
  user: null
};
```

You can populate it from:

* `localStorage` token
* or a cookie/session from the backend

---

# Recommended rule set

## Logged out user

Allowed screens:

* `#login`
* `#register`
* `#forgot-password`
* `#reset-password`
* `#verify-email`

Blocked screens:

* `#dashboard`
* `#performances`
* `#mix-builder`
* `#competition-day`
* `#assets`

If they try to hit a protected route, redirect to:

```text
#login
```

## Logged in user

Allowed screens:

* `#dashboard`
* all app screens

Optional behavior:

* if they visit `#login` again while logged in, redirect them to `#dashboard`

---

# Best UX for first visit

I’d define it like this:

## First-ever visitor

Show:

```text
#login
```

With links to:

* sign up
* forgot password

## Returning visitor with valid session

Show:

```text
#dashboard
```

## Returning visitor with expired/bad token

Clear session and show:

```text
#login
```

---

# Why your current behavior is wrong

You said:

> Right now the app defaults to #dashboard when there's no hash.

That means your router is probably doing something like:

```js
const route = window.location.hash || '#dashboard';
```

That should be replaced with logic that depends on auth state.

---

# Better route bootstrap

Use this instead:

```js
function getDefaultRoute(isAuthenticated) {
  return isAuthenticated ? '#dashboard' : '#login';
}

const route = window.location.hash || getDefaultRoute(authState.isAuthenticated);
```

---

# Better full auth gate logic

Here’s a cleaner version you can drop into your app.

```js
const publicRoutes = new Set([
  '#login',
  '#register',
  '#forgot-password',
  '#reset-password',
  '#verify-email',
  '#check-email',
  '#password-updated'
]);

const protectedRoutes = new Set([
  '#dashboard',
  '#performances',
  '#performance-detail',
  '#mix-builder',
  '#competition-day',
  '#assets',
  '#settings'
]);

const authState = {
  token: localStorage.getItem('authToken'),
  user: null,
  get isAuthenticated() {
    return Boolean(this.token);
  }
};

function getDefaultRoute() {
  return authState.isAuthenticated ? '#dashboard' : '#login';
}

function normalizeRoute(hash) {
  if (!hash || hash === '#') return getDefaultRoute();
  return hash;
}

function resolveRoute(hash) {
  const route = normalizeRoute(hash);

  if (!authState.isAuthenticated && protectedRoutes.has(route)) {
    return '#login';
  }

  if (authState.isAuthenticated && publicRoutes.has(route)) {
    return '#dashboard';
  }

  return route;
}

function navigate(hash) {
  const finalRoute = resolveRoute(hash);

  if (window.location.hash !== finalRoute) {
    window.location.hash = finalRoute;
    return;
  }

  renderRoute(finalRoute);
}

function renderRoute(route) {
  document.querySelectorAll('[data-screen]').forEach((screen) => {
    screen.hidden = screen.dataset.screen !== route.replace('#', '');
  });
}

window.addEventListener('hashchange', () => {
  navigate(window.location.hash);
});

window.addEventListener('DOMContentLoaded', () => {
  navigate(window.location.hash);
});
```

---

# Example HTML structure for this router

```html
<section data-screen="login" hidden>
  <!-- login screen -->
</section>

<section data-screen="register" hidden>
  <!-- register screen -->
</section>

<section data-screen="dashboard" hidden>
  <!-- dashboard screen -->
</section>

<section data-screen="performances" hidden>
  <!-- performances screen -->
</section>
```

---

# Login and logout behavior

## On successful login

After the backend returns a token:

```js
function handleLoginSuccess(data) {
  localStorage.setItem('authToken', data.token);
  authState.token = data.token;
  authState.user = data.user;
  navigate('#dashboard');
}
```

## On logout

```js
function logout() {
  localStorage.removeItem('authToken');
  authState.token = null;
  authState.user = null;
  navigate('#login');
}
```

---

# Better session validation

Just checking for a token in `localStorage` is okay for a prototype, but better is:

1. load token from storage
2. call `/api/auth/me`
3. if valid, keep user logged in
4. if invalid, clear token and redirect to login

Example:

```js
async function bootstrapAuth() {
  const token = localStorage.getItem('authToken');

  if (!token) {
    authState.token = null;
    navigate(window.location.hash || '#login');
    return;
  }

  try {
    const res = await fetch('http://localhost:4000/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) throw new Error('Session invalid');

    const data = await res.json();
    authState.token = token;
    authState.user = data.user;
    navigate(window.location.hash || '#dashboard');
  } catch (error) {
    localStorage.removeItem('authToken');
    authState.token = null;
    authState.user = null;
    navigate('#login');
  }
}

window.addEventListener('DOMContentLoaded', bootstrapAuth);
```

---

# Recommended product rule

For your app, I’d define it this way:

## Unauthenticated shell

Show only auth screens:

* login
* register
* forgot/reset/verify flows

## Authenticated shell

Show the full app:

* dashboard
* all routines
* competition tools

That means the app should really have **two app shells**, not just many pages.

---

# Cleaner mental model

```text
Root App
├── Auth Shell
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   ├── Reset Password
│   └── Verify Email
└── App Shell
    ├── Dashboard
    ├── Performances
    ├── Mix Builder
    ├── Competition Day
    └── Assets
```

---

# What you should change right now

Change your default route from:

```js
window.location.hash || '#dashboard'
```

to:

```js
window.location.hash || (authState.isAuthenticated ? '#dashboard' : '#login')
```

And add a protected-route check so logged-out users cannot stay on app pages.

---

# Best next step

The next thing to build is a **single router/auth bootstrap script** that includes:

* initial login gate
* protected routes
* session restore from storage
* logout
* redirect rules

