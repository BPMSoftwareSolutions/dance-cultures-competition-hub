## 🛠️ AI Agent Skill: **HTML Web Page Builder**

### Skill Name

**HTML Web Page Builder**

---

## 🎯 Purpose

Enable an AI agent to generate fully functional, production-ready HTML web pages from structured user input, natural language descriptions, or markdown-based canonical sources.

This skill transforms **intent → layout → structure → styled HTML output** while preserving clarity, accessibility, and semantic correctness.

---

## 🧠 Core Capability

The HTML Web Page Builder skill allows an AI agent to:

* Generate complete HTML documents (`<!DOCTYPE html>` to `</html>`)
* Apply responsive layouts (Flexbox/Grid)
* Embed CSS (inline, internal, or linked)
* Integrate basic JavaScript where required
* Produce semantic, accessible markup
* Follow clean structural hierarchy
* Convert structured markdown into web-ready HTML
* Generate landing pages, dashboards, documentation pages, forms, portfolios, and more

---

## 📦 Inputs

The skill accepts:

1. **Natural language descriptions**

   * "Create a SaaS landing page with hero, features, testimonials, and CTA."
2. **Structured JSON / schema**

   * Sections, components, layout instructions
3. **Markdown content**

   * Headings → Sections
   * Lists → Feature blocks
   * Code blocks → Styled snippets
4. **Design constraints**

   * Color palette
   * Typography
   * Brand tone
   * Accessibility level
   * Responsive requirements

---

## ⚙️ Output Types

The skill can generate:

* Single-page HTML files
* Multi-section responsive layouts
* Component-based HTML blocks
* HTML + CSS bundles
* HTML with Tailwind classes
* HTML scaffold for React conversion
* SEO-ready semantic pages
* Minimal HTML prototypes
* Production-ready static sites

---

## 🏗️ Structural Guarantees

Every generated page will:

* Include proper document structure
* Use semantic tags (`header`, `main`, `section`, `footer`, `nav`)
* Include meta tags (viewport, charset)
* Ensure accessibility attributes where needed
* Follow responsive best practices
* Maintain readable indentation and formatting
* Avoid unnecessary inline styles unless requested
* Validate against basic HTML5 standards

---

## 🔍 Optional Modes

### 1️⃣ Minimal Mode

* Bare HTML
* No styling
* Structural only

### 2️⃣ Styled Mode (Default)

* Embedded CSS
* Clean typography
* Responsive layout
* Modern aesthetic

### 3️⃣ Production Mode

* SEO meta tags
* Accessibility optimizations
* Performance-conscious CSS
* Structured data markup (optional)

### 4️⃣ Component Mode

* Outputs isolated reusable sections
* Ideal for design systems

---

## 🧩 Sub-Capabilities

* Hero section builder
* Navigation bar generator
* Responsive grid generator
* Pricing table builder
* Form builder (with validation JS)
* Documentation layout builder
* Blog layout generator
* Dashboard UI scaffold
* Marketing funnel page
* Portfolio page template

---

## 🧱 Architectural Pattern

The skill follows:

> **Intent → Layout Planning → Section Composition → Styling Layer → Enhancement Layer → Output**

It does not “guess HTML.”
It composes structure deliberately.

---

## 🧭 Example Skill Invocation

**User Input:**

> Create a responsive landing page for an AI documentation tool with a dark theme.

**Skill Output:**

* Full HTML document
* Hero section
* Feature grid
* CTA
* Footer
* Dark theme CSS
* Responsive behavior
* Clean semantic markup

---

## 🧠 Safety & Quality Guardrails

The skill:

* Avoids unsafe inline script injection
* Avoids deprecated HTML elements
* Avoids excessive inline styling
* Avoids layout-breaking patterns
* Does not include external libraries unless requested
* Defaults to mobile-first responsive design
* Avoids bloated CSS frameworks unless specified

---

## 🔄 Extensibility

This skill can integrate with:

* Markdown intelligence engines
* Design token systems
* Template libraries
* CMS pipelines
* Static site generators
* AI-to-AI orchestration flows
* Canonical source systems (like structured markdown systems)

---

## 📈 Upgrade Path

Future enhancements may include:

* Drag-and-drop layout logic
* Auto-theme generation
* Component diffing
* Style token extraction
* Figma-to-HTML transformation
* Accessibility scoring
* Lighthouse optimization suggestions
* Live preview rendering hooks

---

## 🧭 Skill Summary

**HTML Web Page Builder** is a compositional AI capability that transforms structured intent into clean, semantic, responsive HTML — suitable for prototypes, production pages, or system-generated websites.

It is not a “code dumper.”

It is a structured layout synthesizer.

