Here’s a **clean app sitemap plus a fuller wireframe set** built around your actual competition workflow: six performances, mix sections, reference videos, blend-heavy routines, and competition-day readiness. The notes file gives us a strong MVP structure because each routine already has titles, durations, timing sections, and reference links.  

# Product direction

This app should feel like a mix of:

* **project manager**
* **music-cut planner**
* **asset library**
* **competition-day control panel**

The biggest value is centralizing routines like **Eliza’s five cut sections**, **Albina’s two-song blend**, **Savanna’s three-section solo**, and the larger **Jazz/HipHop group routines** into one workflow.  

---

# 1) App sitemap

```text
DANCE CULTURES COMP HUB
│
├── 1. Dashboard
│   ├── Today summary
│   ├── Performance status
│   ├── Priority tasks
│   ├── Recent activity
│   └── Quick actions
│
├── 2. Competitions
│   ├── Competition list
│   ├── Competition detail
│   │   ├── Run of show
│   │   ├── Total runtime
│   │   ├── Team readiness
│   │   └── Export day pack
│   └── Archived competitions
│
├── 3. Performances
│   ├── All performances
│   ├── Solo performances
│   ├── Group performances
│   └── Performance detail
│       ├── Overview
│       ├── Timing sections
│       ├── Songs / blends
│       ├── Reference videos
│       ├── Choreo notes
│       ├── Deliverables
│       └── Revision history
│
├── 4. Mix Builder
│   ├── Section timeline
│   ├── Song clip planner
│   ├── Transition planner
│   ├── Version manager
│   └── Export center
│
├── 5. Assets & References
│   ├── Music files
│   ├── Reference videos
│   ├── Routine folders
│   ├── Notes library
│   └── Tagged search
│
├── 6. Tasks & Approvals
│   ├── Owner requests
│   ├── Review queue
│   ├── Pending fixes
│   ├── Approved mixes
│   └── Final-ready list
│
├── 7. Competition Day
│   ├── Live run order
│   ├── Ready / missing status
│   ├── Cue sheet
│   ├── Emergency backups
│   └── Mobile quick controls
│
└── 8. Settings
    ├── Team branding
    ├── Status labels
    ├── Export defaults
    └── User roles
```

---

# 2) Navigation concept

```text
+----------------------------------------------------------------------------------+
| LOGO | Dashboard | Competitions | Performances | Mix Builder | Day Mode | Search |
+----------------------------------------------------------------------------------+
| USER: You (Mix Creator)                                              [Profile ▼] |
+----------------------------------------------------------------------------------+
```

---

# 3) Main dashboard wireframe

```text
+===================================================================================================+
| DASHBOARD                                                                    MAY 2026 COMPETITION |
+===================================================================================================+

+---------------------------------------+  +---------------------------------------+  +------------+
| OVERVIEW                              |  | PRIORITY ITEMS                        |  | QUICK ADD  |
|---------------------------------------|  |---------------------------------------|  |------------|
| Total performances: 6                 |  | [!] Eliza section flow review        |  | New comp   |
| Total runtime: ~8:44                  |  | [!] Albina song blend polish         |  | New act    |
| Ready mixes: 0/6                      |  | [~] Savanna transitions              |  | New task   |
| Needs owner review: 6                 |  | [ ] Prep Jazz structure notes        |  | Add asset  |
+---------------------------------------+  | [ ] Prepare HipHop export versions    |  +------------+
                                           +---------------------------------------+

+----------------------------------------------------------------------------------+
| PERFORMANCE SNAPSHOT                                                             |
|----------------------------------------------------------------------------------|
| EVA SOLO - FASHION                | Solo  | 1:00 | Ref video | 1 section  | Draft|
| ELIZA - MAESTRO OF MY HEART       | Solo  | ~80s | Ref video | 5 sections  | WIP  |
| ALBINA - NO STATUS / FREEZE       | Solo  | ~43s | 2 videos  | 2-song blend| WIP  |
| SAVANNA - MWA                     | Solo  | ~64s | Ref video | 3 sections  | WIP  |
| JAZZ GROUP - HEART ATTACK         | Group | 1:57 | Ref video | 3 sections  | WIP  |
| HIPHOP GROUP - KAWASAKI/...       | Group | 1:44 | 3 videos  | multi-song  | WIP  |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| RECENT UPDATES                                                                   |
|----------------------------------------------------------------------------------|
| - Master notes imported                                                          |
| - 6 performances created                                                         |
| - Timing sections generated for 5 routines                                       |
| - Reference video links attached                                                 |
+----------------------------------------------------------------------------------+
```

The dashboard is especially useful because the notes already define the core structure for all six acts and their approximate durations. 

---

# 4) Competitions list screen

```text
+=====================================================================================+
| COMPETITIONS                                                                        |
+=====================================================================================+

+----+-----------------------------+------------+--------+--------------+-------------+
| ID | NAME                        | DATE       | ACTS   | TOTAL TIME   | STATUS      |
+----+-----------------------------+------------+--------+--------------+-------------+
| 01 | May 2026 Dance Competition  | May 2026   | 6      | ~8m 44s      | Active      |
| 00 | Spring Showcase 2025        | Archived   | 9      | 14m 12s      | Archived    |
+----+-----------------------------+------------+--------+--------------+-------------+

[Open Competition]   [Duplicate Setup]   [Archive]
```

---

# 5) Competition detail screen

```text
+===================================================================================================+
| COMPETITION DETAIL: MAY 2026 DANCE COMPETITION                                     [Export Pack] |
+===================================================================================================+

+-----------------------------------+  +-----------------------------------------------------------+
| EVENT INFO                        |  | READINESS                                                 |
|-----------------------------------|  |-----------------------------------------------------------|
| Performances: 6                   |  | Mixes drafted: 6/6                                        |
| Estimated total: ~8:44            |  | Mixes approved: 0/6                                       |
| Solos: 4                          |  | Notes attached: 6/6                                       |
| Groups: 2                         |  | Backups exported: 0/6                                     |
+-----------------------------------+  +-----------------------------------------------------------+

+---------------------------------------------------------------------------------------------------+
| RUN OF SHOW                                                                                       |
|---------------------------------------------------------------------------------------------------|
| 1. EVA SOLO - FASHION                                                                             |
| 2. ELIZA SOLO - MAESTRO OF MY HEART                                                               |
| 3. ALBINA SOLO - NO STATUS                                                                        |
| 4. SAVANNA SOLO - MWA                                                                             |
| 5. JAZZ GROUP - HEART ATTACK                                                                      |
| 6. HIPHOP GROUP - KAWASAKI                                                                        |
+---------------------------------------------------------------------------------------------------+
```

This screen comes directly from the schedule in your notes. 

---

# 6) Performances list screen

```text
+====================================================================================================+
| PERFORMANCES                                                          [Filter: All] [Sort: Order] |
+====================================================================================================+

+----+--------------------------------+--------+--------+--------------+-------------+-------------+
| #  | TITLE                          | TYPE   | DANCER | DURATION     | STRUCTURE   | STATUS      |
+----+--------------------------------+--------+--------+--------------+-------------+-------------+
| 1  | Fashion                        | Solo   | Eva    | 1:00         | 1 clip      | Draft       |
| 2  | Maestro of My Heart            | Solo   | Eliza  | ~80 sec      | 5 sections  | In Progress |
| 3  | No Status / Freeze             | Solo   | Albina | ~43 sec      | 2-song blend| In Progress |
| 4  | MWA                            | Solo   | Savanna| ~64 sec      | 3 sections  | In Progress |
| 5  | Heart Attack                   | Group  | Jazz   | ~1:57        | 3 sections  | In Progress |
| 6  | Kawasaki / Power / Bet Your... | Group  | HipHop | ~1:44        | 3-song mix  | In Progress |
+----+--------------------------------+--------+--------+--------------+-------------+-------------+
```

---

# 7) Performance detail wireframe

This is the core screen of the app.

```text
+====================================================================================================+
| PERFORMANCE: ALBINA SOLO - NO STATUS / FREEZE                                  [Save] [Export]    |
+====================================================================================================+

+---------------------------------------+  +---------------------------------------+
| BASIC INFO                            |  | STATUS                                |
|---------------------------------------|  |---------------------------------------|
| Type: Solo                            |  | Mix state: In Progress                |
| Dancer: Albina                        |  | Owner review: Not sent                |
| Approx duration: 43 sec               |  | Final export: No                      |
| Category: Competition routine         |  | Backup export: No                     |
+---------------------------------------+  +---------------------------------------+

+----------------------------------------------------------------------------------+
| SONG STRUCTURE                                                                   |
|----------------------------------------------------------------------------------|
| Song 1: No-Status                                                                |
|   - Clip: 1:30 -> 2:00  (30 sec)                                                 |
| Song 2: Freeze                                                                   |
|   - Clip: 2:47 -> 3:10  (23 sec)                                                 |
| Transition goal: smooth blend between songs                                      |
+----------------------------------------------------------------------------------+

+---------------------------------------+  +---------------------------------------+
| REFERENCES                            |  | CREATIVE NOTES                        |
|---------------------------------------|  |---------------------------------------|
| [▶] BUS - No-status Status            |  | - Blend seamlessly                    |
| [▶] PERSES - Freeze                   |  | - Keep timing + flow tight            |
|                                       |  | - Build clean handoff between tracks  |
+---------------------------------------+  +---------------------------------------+

+----------------------------------------------------------------------------------+
| DELIVERABLES                                                                      |
|----------------------------------------------------------------------------------|
| Preview MP3 [ ]   Final MP3 [ ]   Backup MP3 [ ]   Cue Sheet [ ]   Notes PDF [ ] |
+----------------------------------------------------------------------------------+
```

Albina’s routine is a great example of why the app needs explicit support for multi-song blending. 

---

# 8) Alternate performance detail for section-based routines

```text
+====================================================================================================+
| PERFORMANCE: ELIZA SOLO - MAESTRO OF MY HEART                                  [Timeline] [Edit]  |
+====================================================================================================+

+----------------------------------------------------------------------------------+
| TIMING SECTIONS                                                                  |
|----------------------------------------------------------------------------------|
| 1. 0:01 - 0:27   (26 sec)                                                        |
| 2. 0:38 - 0:45   (7 sec)                                                         |
| 3. 0:58 - 1:16   (18 sec)                                                        |
| 4. 2:00 - 2:21   (21 sec)                                                        |
| 5. 2:52 - 3:00   (8 sec)                                                         |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| FLOW PLAN                                                                        |
|----------------------------------------------------------------------------------|
| [Section 1]---gap---[Section 2]-[Section 3]-----------gap-----------[4]-gap-[5] |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| MIX NOTES                                                                        |
|----------------------------------------------------------------------------------|
| - Maintain emotional flow                                                        |
| - Preserve beat and energy                                                       |
| - Smooth transitions across all five cut points                                  |
+----------------------------------------------------------------------------------+
```

This structure maps exactly to Eliza’s routine notes. 

---

# 9) Mix Builder screen

```text
+====================================================================================================+
| MIX BUILDER: HIPHOP GROUP - KAWASAKI / POWER / BET YOUR LIFE                    [Preview] [Export]|
+====================================================================================================+

SONG LAYERS
------------------------------------------------------------------------------------------------------
| KAWASAKI       | [ OPENING SEGMENT ====================================== ]                         |
| POWER          |                         [ 1:13-1:15 ] [====== 1:30-1:47 ======]                  |
| BET YOUR LIFE  |                                               [==1:23-1:32==][====1:42-2:03====]|
------------------------------------------------------------------------------------------------------

TRANSITIONS
------------------------------------------------------------------------------------------------------
| KAWASAKI -> POWER         | energy shift / hard impact / crowd lift                                |
| POWER -> BET YOUR LIFE    | seamless handoff / maintain hype                                       |
------------------------------------------------------------------------------------------------------

OUTPUT CHECK
------------------------------------------------------------------------------------------------------
| Runtime target: ~1:44    | Blend smoothness: [ 8/10 ]   | Ready for owner review: [ No ]         |
------------------------------------------------------------------------------------------------------
```

The HipHop routine justifies a dedicated mix-building screen because it blends three songs with multiple extracted sections. 

---

# 10) Assets & references screen

```text
+====================================================================================================+
| ASSETS & REFERENCES                                                          [Search assets...]    |
+====================================================================================================+

+----------------------+--------------------------------------------------------+-------------------+
| PERFORMANCE          | ASSETS                                                 | STATUS            |
+----------------------+--------------------------------------------------------+-------------------+
| Eva - Fashion        | 1 ref video                                            | linked            |
| Eliza - Maestro      | 1 ref video                                            | linked            |
| Albina - No/Freeze   | 2 ref videos                                           | linked            |
| Savanna - MWA        | 1 ref video                                            | linked            |
| Jazz - Heart Attack  | 1 ref video                                            | linked            |
| HipHop - Kawasaki    | 3 ref videos                                           | linked            |
+----------------------+--------------------------------------------------------+-------------------+

Selected routine: HipHop Group
--------------------------------------------------------------------------------------
| [▶] KAWASAKI video                                                               |
| [▶] POWER video                                                                  |
| [▶] BET YOUR LIFE video                                                          |
| [Upload music file] [Attach stems] [Add rehearsal cut]                           |
--------------------------------------------------------------------------------------
```

Your notes contain reference links for every routine, with HipHop having three separate references.  

---

# 11) Tasks & approvals screen

```text
+====================================================================================================+
| TASKS & APPROVALS                                                                    [New Task]    |
+====================================================================================================+

+----+----------------------------------------------+-------------+----------+----------------------+
| ID | TASK                                         | ROUTINE     | OWNER    | STATUS               |
+----+----------------------------------------------+-------------+----------+----------------------+
| 01 | Smooth transitions between all 5 sections    | Eliza       | Pending  | In Progress          |
| 02 | Blend No-Status into Freeze                  | Albina      | Pending  | In Progress          |
| 03 | Blend all MWA sections smoothly              | Savanna     | Pending  | In Progress          |
| 04 | Build energy arc through long main section   | Jazz Group  | Pending  | Planned              |
| 05 | Keep high energy across 3-song hiphop mix    | HipHop      | Pending  | Planned              |
+----+----------------------------------------------+-------------+----------+----------------------+
```

These tasks are pulled naturally from the note guidance about transitions, synchronization, and energy continuity.  

---

# 12) Competition day screen

```text
+====================================================================================================+
| COMPETITION DAY MODE                                                           EVENT: MAY 2026     |
+====================================================================================================+

+----------------------------------------------------------------------------------+
| LIVE ORDER                                                                       |
|----------------------------------------------------------------------------------|
| NOW      | EVA SOLO - FASHION                                                    |
| NEXT     | ELIZA SOLO - MAESTRO OF MY HEART                                      |
| ON DECK  | ALBINA SOLO - NO STATUS / FREEZE                                      |
+----------------------------------------------------------------------------------+

+--------------------------------------+  +----------------------------------------+
| READY CHECK                          |  | QUICK OPEN                             |
|--------------------------------------|  |----------------------------------------|
| Eva mix                 [READY]      |  | [Open current mix]                     |
| Eliza mix               [READY]      |  | [Open cue sheet]                       |
| Albina mix              [REVIEW]     |  | [Open backup folder]                   |
| Savanna mix             [READY]      |  | [Open all notes]                       |
| Jazz mix                [READY]      |  |                                        |
| HipHop mix              [READY]      |  |                                        |
+--------------------------------------+  +----------------------------------------+

+----------------------------------------------------------------------------------+
| ALERTS                                                                           |
|----------------------------------------------------------------------------------|
| - Albina final approval still pending                                            |
| - HipHop backup export not yet marked                                            |
+----------------------------------------------------------------------------------+
```

---

# 13) Mobile version wireframe

```text
+-----------------------------------------+
| DANCE CULTURES DAY MODE                 |
+-----------------------------------------+
| Next: ELIZA SOLO                        |
| Start: 12 min                           |
| Status: Review notes                    |
+-----------------------------------------+
| [Play Mix]                              |
| [Timing]                                |
| [Notes]                                 |
| [Backup]                                |
+-----------------------------------------+

+-----------------------------------------+
| TIMING                                 |
|-----------------------------------------|
| 0:01 - 0:27                            |
| 0:38 - 0:45                            |
| 0:58 - 1:16                            |
| 2:00 - 2:21                            |
| 2:52 - 3:00                            |
+-----------------------------------------+
```

---

# 14) Recommended MVP feature set

## Must-have

```text
1. Competitions
2. Performances
3. Timing sections
4. Song blend planning
5. Reference links
6. Notes
7. Mix status
8. Export checklist
9. Competition-day board
```

## Nice-to-have

```text
1. Version history
2. Owner comment thread
3. Backup file tracking
4. Auto-generated cue sheet
5. Searchable asset library
```

---

# 15) Best database structure

```text
Competition
- id
- name
- date
- venue
- total_runtime

Performance
- id
- competition_id
- title
- dancer_or_group
- type
- est_duration
- order_index
- status

SourceTrack
- id
- performance_id
- name
- artist
- ref_video_url

MixSection
- id
- performance_id
- source_track_id
- start_time
- end_time
- section_label
- notes

Transition
- id
- performance_id
- from_section_id
- to_section_id
- transition_goal
- approved

Deliverable
- id
- performance_id
- kind
- status
- file_path
```

---

# 16) Smartest screen flow

```text
Dashboard
   ↓
Competition Detail
   ↓
Performance Detail
   ↓
Mix Builder
   ↓
Review / Approval
   ↓
Competition Day Mode
```

---

# 17) Strong product pitch

```text
This app helps Dance Cultures manage every competition routine in one place —
from source songs and timing cuts to mix revisions, reference videos, approvals,
and competition-day readiness.
```

---

# 18) My recommendation for phase 1

Build these 4 screens first:

```text
1. Dashboard
2. Competition Detail
3. Performance Detail
4. Competition Day Mode
```

That gives you immediate practical value without needing to build a full audio editor on day one.

# 19) Best tech direction

For a first build, I’d shape it like this:

```text
Frontend: React / Next.js
Backend: Supabase or Firebase
Storage: cloud folders for mixes + assets
Auth: simple login for you + owner
Mobile: responsive web app first
```
