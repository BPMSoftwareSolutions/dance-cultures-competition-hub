This is the best choice when you want a guaranteed local admin/dev login.

You can create a script like `seed-dev-user.js` and run it once.

### `seed-dev-user.js`

```js
const bcrypt = require("bcryptjs");
const { get, run } = require("./db");

async function seedDevUser() {
  const fullName = "Developer";
  const email = "dev@local.test";
  const password = "DevPassword123!";
  const now = Date.now();

  const existing = await get(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existing) {
    console.log("Dev user already exists:");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await run(
    `
    INSERT INTO users (
      full_name,
      email,
      password_hash,
      email_verified,
      verification_token,
      reset_token,
      reset_token_expires_at,
      created_at,
      updated_at
    ) VALUES (?, ?, ?, 1, NULL, NULL, NULL, ?, ?)
    `,
    [fullName, email, passwordHash, now, now]
  );

  console.log("Dev user created successfully.");
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  process.exit(0);
}

seedDevUser().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

### Add script to `package.json`

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "seed:dev": "node seed-dev-user.js"
  }
}
```

Then run:

```bash
npm run seed:dev
```

Now you can log in with:

```text
Email: dev@local.test
Password: DevPassword123!
```

---

## Option 3: Auto-create a dev user on server startup

Good for quick prototypes, but not ideal long-term.

Example idea:

```js
if (process.env.NODE_ENV !== "production") {
  // create default dev account if missing
}
```

This is convenient, but a seed script is cleaner.

---

# What I recommend

For your app, I would do this:

* use **Register** for normal testing
* add a **seed dev user** for reliable local access

That gives you both:

* realistic auth testing
* a guaranteed way back in

---

# One more thing: email verification in development

If you use real verification flow, you need mail working locally.

For development, use one of these approaches:

## Simplest local approach

Mark the seeded dev user as already verified:

```js
email_verified = 1
```

That’s what the seed script above does.

## Or allow auto-verify in development

Example pattern:

```js
const isDevelopment = process.env.NODE_ENV !== "production";
const emailVerified = isDevelopment ? 1 : 0;
```

That avoids getting blocked by email setup during local testing.

---

# Recommended local dev flow

## First run

1. Start backend
2. Run seed script
3. Log in with dev credentials

## After that

* test register flow separately
* test forgot password separately
* keep the dev account as your safe fallback
