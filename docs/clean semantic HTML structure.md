Below is a **clean semantic HTML structure** for each main screen in the app, based on the competition flow and routines in your master notes. 

## 1) App shell / shared layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dance Cultures Competition Hub</title>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <h1>Dance Cultures Hub</h1>
      </div>

      <nav class="main-nav" aria-label="Primary">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/performances">Performances</a></li>
          <li><a href="/mix-builder">Mix Builder</a></li>
          <li><a href="/competition-day">Competition Day</a></li>
          <li><a href="/assets">Assets & References</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </aside>

    <div class="main-panel">
      <header class="topbar">
        <div class="topbar-left">
          <form class="search-form" role="search">
            <label for="global-search">Search</label>
            <input id="global-search" name="q" type="search" placeholder="Search performances, songs, notes..." />
          </form>
        </div>

        <div class="topbar-right">
          <button type="button">New Routine</button>
          <button type="button">Export Day Pack</button>
          <a href="/profile">Profile</a>
        </div>
      </header>

      <main class="page-content">
        <!-- Screen-specific content goes here -->
      </main>
    </div>
  </div>
</body>
</html>
```

---

## 2) Dashboard screen

```html
<main class="page dashboard-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Competition</p>
      <h2>May 2026 Dance Competition</h2>
      <p>Status: Active</p>
    </div>

    <div class="page-actions">
      <button type="button">Add Performance</button>
      <button type="button">Export Summary</button>
    </div>
  </header>

  <section class="summary-cards" aria-label="Summary">
    <article class="summary-card">
      <h3>Total Performances</h3>
      <p>6</p>
    </article>

    <article class="summary-card">
      <h3>Total Runtime</h3>
      <p>~8m 44s</p>
    </article>

    <article class="summary-card">
      <h3>Ready Mixes</h3>
      <p>4/6</p>
    </article>

    <article class="summary-card">
      <h3>Needs Review</h3>
      <p>2</p>
    </article>
  </section>

  <section class="dashboard-grid">
    <section class="panel performance-status-panel">
      <header>
        <h3>Performance Status</h3>
      </header>

      <ul class="performance-status-list">
        <li>
          <a href="/performances/eva-fashion">
            <span class="status status-ready">Ready</span>
            <span class="title">Eva Solo - Fashion</span>
          </a>
        </li>
        <li>
          <a href="/performances/eliza-maestro">
            <span class="status status-review">In Progress</span>
            <span class="title">Eliza Solo - Maestro of My Heart</span>
          </a>
        </li>
        <li>
          <a href="/performances/albina-no-status">
            <span class="status status-warning">Needs Setup</span>
            <span class="title">Albina Solo - No Status</span>
          </a>
        </li>
        <li>
          <a href="/performances/savanna-mwa">
            <span class="status status-review">Review</span>
            <span class="title">Savanna Solo - MWA</span>
          </a>
        </li>
      </ul>
    </section>

    <section class="panel priorities-panel">
      <header>
        <h3>Upcoming Priorities</h3>
      </header>

      <ol>
        <li>Finish Albina song blend</li>
        <li>Confirm Savanna transitions</li>
        <li>Export HipHop final mix</li>
        <li>Send preview links to owner</li>
      </ol>
    </section>

    <section class="panel quick-actions-panel">
      <header>
        <h3>Quick Actions</h3>
      </header>

      <div class="action-list">
        <button type="button">New Routine</button>
        <button type="button">Add Song Cut</button>
        <button type="button">Attach Reference Video</button>
        <button type="button">Generate Checklist</button>
      </div>
    </section>
  </section>

  <section class="panel recent-activity-panel">
    <header>
      <h3>Recent Activity</h3>
    </header>

    <ul class="activity-feed">
      <li>
        <time datetime="2026-03-12">03/12</time>
        <span>Updated cut points for “Maestro of My Heart”</span>
      </li>
      <li>
        <time datetime="2026-03-12">03/12</time>
        <span>Added reference link for “MWA”</span>
      </li>
      <li>
        <time datetime="2026-03-13">03/13</time>
        <span>Exported Jazz Group preview v2</span>
      </li>
      <li>
        <time datetime="2026-03-14">03/14</time>
        <span>Marked HipHop transitions as approved</span>
      </li>
    </ul>
  </section>
</main>
```

---

## 3) Performances list screen

```html
<main class="page performances-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Performances</p>
      <h2>All Routines</h2>
      <p>Manage solos, group numbers, timings, references, and mix status.</p>
    </div>

    <div class="page-actions">
      <button type="button">Filter</button>
      <button type="button">Sort</button>
      <button type="button">Add Performance</button>
    </div>
  </header>

  <section class="filters-bar" aria-label="Performance filters">
    <form>
      <label>
        Status
        <select name="status">
          <option value="">All</option>
          <option value="draft">Draft</option>
          <option value="review">Review</option>
          <option value="approved">Approved</option>
          <option value="final">Final</option>
        </select>
      </label>

      <label>
        Type
        <select name="type">
          <option value="">All</option>
          <option value="solo">Solo</option>
          <option value="group">Group</option>
        </select>
      </label>
    </form>
  </section>

  <section class="performance-card-grid">
    <article class="performance-card">
      <header>
        <h3><a href="/performances/eva-fashion">Eva Solo - Fashion</a></h3>
        <span class="badge">Solo</span>
      </header>
      <p>Duration: 1:00</p>
      <p>Status: Ready</p>
      <footer>
        <a href="/performances/eva-fashion">Open</a>
        <button type="button">Export</button>
      </footer>
    </article>

    <article class="performance-card">
      <header>
        <h3><a href="/performances/eliza-maestro">Eliza Solo - Maestro of My Heart</a></h3>
        <span class="badge">Solo</span>
      </header>
      <p>Duration: ~1:20</p>
      <p>Status: In Progress</p>
      <footer>
        <a href="/performances/eliza-maestro">Open</a>
        <button type="button">Export</button>
      </footer>
    </article>

    <article class="performance-card">
      <header>
        <h3><a href="/performances/jazz-heart-attack">Jazz Group - Heart Attack</a></h3>
        <span class="badge">Group</span>
      </header>
      <p>Duration: ~1:57</p>
      <p>Status: Approved</p>
      <footer>
        <a href="/performances/jazz-heart-attack">Open</a>
        <button type="button">Export</button>
      </footer>
    </article>
  </section>
</main>
```

---

## 4) Performance detail screen

```html
<main class="page performance-detail-page">
  <header class="page-header">
    <div>
      <nav aria-label="Breadcrumb">
        <ol class="breadcrumb">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/performances">Performances</a></li>
          <li aria-current="page">Eliza Solo - Maestro of My Heart</li>
        </ol>
      </nav>

      <h2>Eliza Solo - Maestro of My Heart</h2>
      <p>Solo performance with five selected timing sections.</p>
    </div>

    <div class="page-actions">
      <button type="button">Edit</button>
      <button type="button">Duplicate</button>
      <button type="button">Export</button>
    </div>
  </header>

  <section class="detail-grid">
    <article class="panel performance-info-panel">
      <header>
        <h3>Performance Info</h3>
      </header>

      <dl>
        <dt>Type</dt>
        <dd>Solo</dd>

        <dt>Dancer</dt>
        <dd>Eliza</dd>

        <dt>Song</dt>
        <dd>Kiss of Life - Maestro of My Heart</dd>

        <dt>Estimated Length</dt>
        <dd>~80 seconds</dd>

        <dt>Status</dt>
        <dd>In Progress</dd>
      </dl>
    </article>

    <article class="panel mix-structure-panel">
      <header>
        <h3>Mix Structure</h3>
      </header>

      <table>
        <caption>Selected timing sections</caption>
        <thead>
          <tr>
            <th scope="col">Section</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Length</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Section 1</th>
            <td>0:01</td>
            <td>0:27</td>
            <td>26s</td>
            <td>Mapped</td>
          </tr>
          <tr>
            <th scope="row">Section 2</th>
            <td>0:38</td>
            <td>0:45</td>
            <td>7s</td>
            <td>Mapped</td>
          </tr>
          <tr>
            <th scope="row">Section 3</th>
            <td>0:58</td>
            <td>1:16</td>
            <td>18s</td>
            <td>Review</td>
          </tr>
          <tr>
            <th scope="row">Section 4</th>
            <td>2:00</td>
            <td>2:21</td>
            <td>21s</td>
            <td>Pending Blend</td>
          </tr>
          <tr>
            <th scope="row">Section 5</th>
            <td>2:52</td>
            <td>3:00</td>
            <td>8s</td>
            <td>Pending Blend</td>
          </tr>
        </tbody>
      </table>
    </article>

    <article class="panel references-panel">
      <header>
        <h3>References</h3>
      </header>

      <ul>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Open reference video</a></li>
        <li><a href="#" target="_blank" rel="noopener noreferrer">Open choreography sample</a></li>
      </ul>
    </article>

    <article class="panel notes-panel">
      <header>
        <h3>Notes</h3>
      </header>

      <ul>
        <li>Five distinct sections to choreograph</li>
        <li>Work on transitions to maintain flow</li>
        <li>Focus on the beat and energy</li>
        <li>Build a cleaner bridge into later sections</li>
      </ul>
    </article>

    <article class="panel deliverables-panel">
      <header>
        <h3>Deliverables</h3>
      </header>

      <ul class="deliverables-list">
        <li>
          <span>Preview Mix v1</span>
          <button type="button">Download</button>
        </li>
        <li>
          <span>Final Mix</span>
          <button type="button">Generate</button>
        </li>
        <li>
          <span>Coach Notes PDF</span>
          <button type="button">Create</button>
        </li>
      </ul>
    </article>
  </section>
</main>
```

---

## 5) Mix builder screen

```html
<main class="page mix-builder-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Mix Builder</p>
      <h2>Savanna Solo - MWA</h2>
      <p>Build transitions and assemble the final performance cut.</p>
    </div>

    <div class="page-actions">
      <button type="button">Preview</button>
      <button type="button">Save Version</button>
      <button type="button">Export MP3</button>
    </div>
  </header>

  <section class="mix-builder-layout">
    <article class="panel timeline-panel">
      <header>
        <h3>Timeline</h3>
      </header>

      <div class="timeline-ruler" aria-label="Timeline ruler">
        <span>0:00</span>
        <span>0:20</span>
        <span>0:40</span>
        <span>1:00</span>
        <span>1:20</span>
        <span>1:40</span>
        <span>2:00</span>
      </div>

      <ol class="timeline-tracks">
        <li class="track-item">
          <h4>Performance Cut Track</h4>
          <div class="timeline-segments">
            <div class="segment">Section 1 (0:00–0:35)</div>
            <div class="segment">Section 2 (1:24–1:38)</div>
            <div class="segment">Section 3 (1:40–1:55)</div>
          </div>
        </li>
      </ol>
    </article>

    <article class="panel source-tracks-panel">
      <header>
        <h3>Source Tracks</h3>
      </header>

      <ul class="source-track-list">
        <li>
          <h4>Track A: MWA!</h4>
          <ul>
            <li>Clip 1: 0:00–0:35</li>
            <li>Clip 2: 1:24–1:38</li>
            <li>Clip 3: 1:40–1:55</li>
          </ul>
        </li>
      </ul>
    </article>

    <article class="panel transitions-panel">
      <header>
        <h3>Transitions</h3>
      </header>

      <form class="transitions-form">
        <fieldset>
          <legend>Clip 1 → Clip 2</legend>
          <label>
            Transition Type
            <select name="transition-1">
              <option>Crossfade</option>
              <option>Hard Cut</option>
              <option>Echo Out</option>
            </select>
          </label>

          <label>
            FX Notes
            <input type="text" name="fx-1" value="Impact rise + beat snap" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Clip 2 → Clip 3</legend>
          <label>
            Transition Type
            <select name="transition-2">
              <option>Hard Cut</option>
              <option>Crossfade</option>
              <option>Filter Sweep</option>
            </select>
          </label>

          <label>
            FX Notes
            <input type="text" name="fx-2" value="Vocal pickup + accent hit" />
          </label>
        </fieldset>
      </form>
    </article>

    <article class="panel output-panel">
      <header>
        <h3>Output</h3>
      </header>

      <dl>
        <dt>Total Time</dt>
        <dd>64 sec</dd>

        <dt>Loudness</dt>
        <dd>OK</dd>

        <dt>Current Version</dt>
        <dd>v3</dd>
      </dl>

      <div class="output-actions">
        <button type="button">Preview Mix</button>
        <button type="button">Export MP3</button>
      </div>
    </article>
  </section>
</main>
```

---

## 6) Competition day board screen

```html
<main class="page competition-day-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Competition Day</p>
      <h2>May 2026 Event Board</h2>
      <p>Track readiness, check-ins, and performance order.</p>
    </div>

    <div class="page-actions">
      <button type="button">Print Board</button>
      <button type="button">Export Checklist</button>
    </div>
  </header>

  <section class="panel run-order-panel">
    <header>
      <h3>Run Order</h3>
    </header>

    <table>
      <caption>Competition performance lineup</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Performance</th>
          <th scope="col">Type</th>
          <th scope="col">Length</th>
          <th scope="col">Mix Ready</th>
          <th scope="col">Notes Ready</th>
          <th scope="col">Check-In</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Eva Solo - Fashion</td>
          <td>Solo</td>
          <td>1:00</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Done</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eliza Solo - Maestro of My Heart</td>
          <td>Solo</td>
          <td>~1:20</td>
          <td>WIP</td>
          <td>Yes</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Albina Solo - No Status</td>
          <td>Solo</td>
          <td>~0:43</td>
          <td>WIP</td>
          <td>Yes</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Savanna Solo - MWA</td>
          <td>Solo</td>
          <td>~1:04</td>
          <td>Review</td>
          <td>Yes</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jazz Group - Heart Attack</td>
          <td>Group</td>
          <td>~1:57</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Done</td>
        </tr>
        <tr>
          <td>6</td>
          <td>HipHop Group - Kawasaki</td>
          <td>Group</td>
          <td>~1:44</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Done</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="competition-day-bottom-grid">
    <article class="panel totals-panel">
      <header>
        <h3>Totals</h3>
      </header>
      <p>Total Show Time: ~8:44</p>
    </article>

    <article class="panel alerts-panel">
      <header>
        <h3>Alerts</h3>
      </header>
      <ul>
        <li>Eliza mix still needs final blend</li>
        <li>Albina transition needs approval</li>
      </ul>
    </article>

    <article class="panel emergency-panel">
      <header>
        <h3>Emergency Access</h3>
      </header>
      <ul>
        <li><button type="button">Open Backup Mix Folder</button></li>
        <li><button type="button">Download All MP3s</button></li>
        <li><button type="button">Show Contact Sheet</button></li>
      </ul>
    </article>
  </section>
</main>
```

---

## 7) Mobile “day mode” screen

```html
<main class="page mobile-day-mode-page">
  <header class="mobile-day-header">
    <h2>Dance Cultures - Day Mode</h2>
    <p>Event: May 2026 Competition</p>
  </header>

  <section class="panel next-up-panel">
    <h3>Next Up</h3>
    <p class="next-performance">Eliza Solo</p>
    <p>Starts in: 12 min</p>

    <div class="mobile-actions">
      <button type="button">Play Preview</button>
      <button type="button">Open Notes</button>
      <button type="button">Show Timings</button>
      <button type="button">Mark Ready</button>
    </div>
  </section>

  <section class="panel timing-snapshot-panel">
    <h3>Timing Snapshot</h3>
    <ul>
      <li>Section 1: 0:01–0:27</li>
      <li>Section 2: 0:38–0:45</li>
      <li>Section 3: 0:58–1:16</li>
      <li>Section 4: 2:00–2:21</li>
      <li>Section 5: 2:52–3:00</li>
    </ul>
  </section>

  <section class="panel status-panel">
    <h3>Status</h3>
    <dl>
      <dt>Mix File</dt>
      <dd>Ready</dd>

      <dt>Coach Approval</dt>
      <dd>Waiting</dd>

      <dt>Backup Export</dt>
      <dd>Yes</dd>
    </dl>
  </section>
</main>
```

---

## 8) Assets & references screen

```html
<main class="page assets-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Assets & References</p>
      <h2>Media Library</h2>
      <p>Store videos, music files, exports, and backup assets.</p>
    </div>

    <div class="page-actions">
      <button type="button">Upload File</button>
      <button type="button">Create Folder</button>
    </div>
  </header>

  <section class="assets-layout">
    <aside class="panel folder-panel">
      <h3>Folders</h3>
      <ul>
        <li><a href="#">Eva - Fashion</a></li>
        <li><a href="#">Eliza - Maestro</a></li>
        <li><a href="#">Albina - No Status</a></li>
        <li><a href="#">Savanna - MWA</a></li>
        <li><a href="#">Jazz - Heart Attack</a></li>
        <li><a href="#">HipHop - Kawasaki</a></li>
      </ul>
    </aside>

    <section class="panel files-panel">
      <header>
        <h3>Selected Folder Contents</h3>
      </header>

      <table>
        <thead>
          <tr>
            <th scope="col">File Name</th>
            <th scope="col">Type</th>
            <th scope="col">Version</th>
            <th scope="col">Updated</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>maestro-preview-v1.mp3</td>
            <td>Audio</td>
            <td>v1</td>
            <td>2026-03-12</td>
            <td><button type="button">Open</button></td>
          </tr>
          <tr>
            <td>reference-video-link</td>
            <td>Reference</td>
            <td>-</td>
            <td>2026-03-12</td>
            <td><button type="button">Open</button></td>
          </tr>
          <tr>
            <td>coach-notes.pdf</td>
            <td>Document</td>
            <td>v2</td>
            <td>2026-03-14</td>
            <td><button type="button">Open</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</main>
```

---

## 9) New / edit performance form

```html
<main class="page edit-performance-page">
  <header class="page-header">
    <div>
      <p class="eyebrow">Performance Editor</p>
      <h2>Create or Update Routine</h2>
    </div>
  </header>

  <form class="performance-form">
    <section class="panel">
      <h3>Basic Info</h3>

      <label>
        Performance Title
        <input type="text" name="title" />
      </label>

      <label>
        Dancer / Team
        <input type="text" name="performer" />
      </label>

      <label>
        Type
        <select name="type">
          <option value="solo">Solo</option>
          <option value="group">Group</option>
        </select>
      </label>

      <label>
        Estimated Duration
        <input type="text" name="duration" placeholder="e.g. 1:20" />
      </label>
    </section>

    <section class="panel">
      <h3>Music & Sections</h3>

      <div class="section-row">
        <label>
          Song Title
          <input type="text" name="song_title[]" />
        </label>

        <label>
          Start Time
          <input type="text" name="start_time[]" />
        </label>

        <label>
          End Time
          <input type="text" name="end_time[]" />
        </label>

        <label>
          Notes
          <input type="text" name="section_notes[]" />
        </label>
      </div>

      <button type="button">Add Section</button>
    </section>

    <section class="panel">
      <h3>Reference Links</h3>

      <label>
        Video URL
        <input type="url" name="reference_url[]" />
      </label>

      <button type="button">Add Reference</button>
    </section>

    <section class="panel">
      <h3>Production Notes</h3>
      <label>
        Notes
        <textarea name="notes" rows="8"></textarea>
      </label>
    </section>

    <footer class="form-actions">
      <button type="button">Cancel</button>
      <button type="submit">Save Performance</button>
    </footer>
  </form>
</main>
```

---

## 10) Suggested route map

```html
/dashboard
/performances
/performances/:id
/performances/:id/edit
/mix-builder/:id
/competition-day
/assets
/settings
```

## Best next step

The cleanest build path is:

1. **App shell**
2. **Dashboard**
3. **Performances list**
4. **Performance detail**
5. **Mix builder**
6. **Competition day**
7. **Assets**

