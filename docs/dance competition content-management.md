Here’s a **concept sketch pack** for a dance competition content-management app built around your workflow as the **music mix creator** for Dance Cultures, using the competition structure in your notes as the foundation. 

# App concept

A great version of this system would help you manage:

* **performances**
* **music cuts / mixes**
* **timing sections**
* **reference videos**
* **notes from the owner**
* **status tracking**
* **competition-day run order**
* **deliverables for each dancer / group**

---

# 1) Big-picture system sketch

```text
+====================================================================================+
|                         DANCE CULTURES COMPETITION HUB                             |
+====================================================================================+
|                                                                                    |
|   OWNER / DIRECTOR INPUTS                 YOUR CREATIVE WORKSPACE                  |
|   -----------------------                 -----------------------                  |
|   - performance names                     - mix editor notes                       |
|   - dance categories                      - audio section mapping                  |
|   - timing requests                       - transition planning                    |
|   - choreography notes                    - export versions                        |
|   - competition order                     - feedback / revision log                |
|                                                                                    |
|                \                                   |                               |
|                 \                                  |                               |
|                  v                                 v                               |
|         +------------------------------------------------------------------+      |
|         |                    CENTRAL COMPETITION DATABASE                   |      |
|         |------------------------------------------------------------------|      |
|         |  performances | dancers | teams | songs | cuts | videos | notes  |      |
|         +------------------------------------------------------------------+      |
|                              |                    |                               |
|                              |                    |                               |
|                              v                    v                               |
|                  +------------------+   +----------------------+                  |
|                  |  PLANNING VIEW   |   |   COMP DAY VIEW      |                  |
|                  |------------------|   |----------------------|                  |
|                  | run order        |   | checklist by act     |                  |
|                  | status tracking  |   | ready / missing      |                  |
|                  | deadlines        |   | quick access mixes   |                  |
|                  +------------------+   +----------------------+                  |
|                                                                                    |
+====================================================================================+
```

---

# 2) Main dashboard sketch

```text
+=================================================================================================+
| DANCE CULTURES HUB                                                             [Search] [User]  |
+=================================================================================================+
| Competition: MAY 2026 DANCE COMPETITION                                       Status: ACTIVE    |
+-------------------------------------------------------------------------------------------------+
| SUMMARY                                                                                         |
| ------------------------------------------------------------------------------------------------ |
| Total Performances: 6     Total Runtime: ~8m 44s     Ready Mixes: 4/6     Needs Review: 2       |
+-------------------------------------------------------------------------------------------------+

+------------------------------------+  +------------------------------------+  +------------------+
| PERFORMANCE STATUS                 |  | UPCOMING PRIORITIES                |  | QUICK ACTIONS    |
|------------------------------------|  |------------------------------------|  |------------------|
| [✓] EVA SOLO - Fashion             |  | - Finish Albina blend             |  | [+ New Routine]  |
| [~] ELIZA SOLO - Maestro...        |  | - Confirm Savanna transitions     |  | [+ Add Song Cut] |
| [!] ALBINA SOLO - No Status        |  | - Export HipHop final mix         |  | [+ Ref Video]    |
| [~] SAVANNA SOLO - MWA             |  | - Send review links to owner      |  | [+ Checklist]    |
| [✓] JAZZ GROUP - Heart Attack      |  |                                    |  | [Export Day Pack]|
| [✓] HIPHOP GROUP - Kawasaki        |  |                                    |  |                  |
+------------------------------------+  +------------------------------------+  +------------------+

+-------------------------------------------------------------------------------------------------+
| RECENT ACTIVITY                                                                                 |
|-------------------------------------------------------------------------------------------------|
| 03/12  Updated cut points for "Maestro of My Heart"                                             |
| 03/12  Added reference link for "MWA"                                                           |
| 03/13  Exported Jazz Group preview v2                                                           |
| 03/14  Marked HipHop transitions as approved                                                    |
+-------------------------------------------------------------------------------------------------+
```

---

# 3) Performance detail screen

This is the page you’d live in most often.

```text
+=================================================================================================+
| PERFORMANCE DETAIL: ELIZA SOLO - MAESTRO OF MY HEART                            [Edit] [Export] |
+=================================================================================================+

+------------------------------------+  +--------------------------------------------------------+
| PERFORMANCE INFO                   |  | MIX STRUCTURE                                          |
|------------------------------------|  |--------------------------------------------------------|
| Type: Solo                         |  | Section 1   0:01 --> 0:27   [26s]   [✓ mapped]        |
| Dancer: Eliza                      |  | Section 2   0:38 --> 0:45   [ 7s]   [✓ mapped]        |
| Category: Solo                     |  | Section 3   0:58 --> 1:16   [18s]   [~ review]        |
| Total Est: ~80 sec                 |  | Section 4   2:00 --> 2:21   [21s]   [ ] not blended   |
| Status: In Progress                |  | Section 5   2:52 --> 3:00   [ 8s]   [ ] not blended   |
+------------------------------------+  +--------------------------------------------------------+

+------------------------------------+  +--------------------------------------------------------+
| REFERENCES                         |  | NOTES                                                  |
|------------------------------------|  |--------------------------------------------------------|
| [▶] YouTube reference              |  | - five distinct sections                              |
| [▶] choreography sample            |  | - smooth transitions needed                           |
|                                    |  | - preserve beat + emotional energy                    |
|                                    |  | - create cleaner bridge into section 4                |
+------------------------------------+  +--------------------------------------------------------+

+-------------------------------------------------------------------------------------------------+
| DELIVERABLES                                                                                     |
|-------------------------------------------------------------------------------------------------|
| Preview Mix v1   [Download]      Final Mix   [Pending]      Coach Notes PDF   [Generate]        |
+-------------------------------------------------------------------------------------------------+
```

---

# 4) Mix builder workflow sketch

```text
+================================================================================================+
| MIX BUILDER                                                                      Routine: MWA  |
+================================================================================================+

TIMELINE
--------------------------------------------------------------------------------------------------
| 0:00      0:20      0:40      1:00      1:20      1:40      2:00                              |
|------------------------------------------------------------------------------------------------|
| [SECTION 1===================]                [SEC 2====] [SECTION 3======]                    |
| 0:00-0:35                                    1:24-1:38   1:40-1:55                            |
--------------------------------------------------------------------------------------------------

SOURCE TRACKS
--------------------------------------------------------------------------------------------------
| Track A: MWA!                                                                    [Loaded]       |
| Clip 1: 0:00-0:35                                                                [Trimmed]      |
| Clip 2: 1:24-1:38                                                                [Trimmed]      |
| Clip 3: 1:40-1:55                                                                [Trimmed]      |
--------------------------------------------------------------------------------------------------

TRANSITIONS
--------------------------------------------------------------------------------------------------
| Between Clip 1 -> Clip 2 : [ crossfade 0.8s ] [ impact rise ] [ beat snap ]                    |
| Between Clip 2 -> Clip 3 : [ hard cut ] [ vocal pickup ] [ accent hit ]                        |
--------------------------------------------------------------------------------------------------

OUTPUT
--------------------------------------------------------------------------------------------------
| Total Time: 64 sec          Loudness: OK          Version: v3          [Export MP3] [Preview]  |
--------------------------------------------------------------------------------------------------
```

---

# 5) Competition run-of-show board

```text
+===========================================================================================================+
| COMPETITION DAY BOARD                                                                      MAY 2026 EVENT |
+===========================================================================================================+

+----+-------------------------------+----------+-----------+------------+--------------+----------------+
| #  | PERFORMANCE                   | TYPE     | LENGTH    | MIX READY  | NOTES READY  | CHECK-IN       |
+----+-------------------------------+----------+-----------+------------+--------------+----------------+
| 1  | EVA SOLO - FASHION            | Solo     | 1:00      |    YES     |     YES      |     DONE       |
| 2  | ELIZA - MAESTRO OF MY HEART   | Solo     | ~1:20     |    WIP     |     YES      |     PENDING    |
| 3  | ALBINA - NO STATUS            | Solo     | ~0:43     |    WIP     |     YES      |     PENDING    |
| 4  | SAVANNA - MWA                 | Solo     | ~1:04     |    REVIEW  |     YES      |     PENDING    |
| 5  | JAZZ GROUP - HEART ATTACK     | Group    | ~1:57     |    YES     |     YES      |     DONE       |
| 6  | HIPHOP GROUP - KAWASAKI       | Group    | ~1:44     |    YES     |     YES      |     DONE       |
+----+-------------------------------+----------+-----------+------------+--------------+----------------+

TOTAL SHOW TIME: ~8:44
ALERTS:
 - Eliza mix still needs final blend
 - Albina transition between songs still needs approval
```

---

# 6) Mobile “competition day” view

```text
+--------------------------------------+
| DANCE CULTURES - DAY MODE            |
+--------------------------------------+
| Event: May 2026 Competition          |
| Next Up: ELIZA SOLO                  |
| Starts In: 12 min                    |
+--------------------------------------+
| [PLAY PREVIEW]                       |
| [OPEN NOTES]                         |
| [SHOW TIMINGS]                       |
| [MARK READY]                         |
+--------------------------------------+

+--------------------------------------+
| TIMING SNAPSHOT                      |
|--------------------------------------|
| Sec 1  0:01-0:27                     |
| Sec 2  0:38-0:45                     |
| Sec 3  0:58-1:16                     |
| Sec 4  2:00-2:21                     |
| Sec 5  2:52-3:00                     |
+--------------------------------------+

+--------------------------------------+
| STATUS                               |
|--------------------------------------|
| Mix File:        READY               |
| Coach Approval:  WAITING             |
| Backup Export:   YES                 |
+--------------------------------------+
```

---

# 7) Data model sketch

```text
+-------------------+        +-------------------+        +-------------------+
|   COMPETITION     |        |   PERFORMANCE     |        |      MIX          |
|-------------------|        |-------------------|        |-------------------|
| id                |<------>| id                |<------>| id                |
| name              |        | competition_id     |        | performance_id    |
| date              |        | title             |        | version           |
| venue             |        | dancer/team       |        | duration          |
| total_runtime     |        | category          |        | status            |
+-------------------+        | est_length        |        | export_path       |
                             | status            |        +-------------------+
                             +-------------------+
                                       |
                                       v
                             +-------------------+
                             |   SECTION / CUT   |
                             |-------------------|
                             | id                |
                             | performance_id    |
                             | source_song       |
                             | start_time        |
                             | end_time          |
                             | transition_type   |
                             | notes             |
                             +-------------------+
```

---

# 8) “Dream version” workflow sketch

```text
OWNER ADDS IDEA
     |
     v
+------------------+
| New performance  |
| or update notes  |
+------------------+
     |
     v
+----------------------------+
| System extracts timings,   |
| songs, links, duration,    |
| and required deliverables  |
+----------------------------+
     |
     v
+----------------------------+
| You build / revise mix     |
| inside a guided workspace  |
+----------------------------+
     |
     v
+----------------------------+
| Owner reviews preview      |
| and leaves comments        |
+----------------------------+
     |
     v
+----------------------------+
| Final export package       |
| - competition mp3          |
| - backup version           |
| - cue sheet                |
| - notes sheet              |
+----------------------------+
     |
     v
+----------------------------+
| Competition day dashboard  |
| keeps everything ready     |
+----------------------------+
```

---

# 9) Killer features for this app

```text
+----------------------------------------------------------------------------------+
| FEATURE IDEAS                                                                    |
+----------------------------------------------------------------------------------+
| 1. Auto-parse master notes into performances                                     |
| 2. Track every cut section with timestamps                                        |
| 3. Keep all reference videos attached to each routine                            |
| 4. Mark mixes as Draft / Review / Approved / Final                               |
| 5. Export cue sheets automatically                                               |
| 6. Generate competition-day checklist                                            |
| 7. Store revisions by version                                                    |
| 8. Keep backup mix files for emergencies                                         |
| 9. See total runtime for whole event                                             |
| 10. Mobile quick access on competition day                                       |
+----------------------------------------------------------------------------------+
```

---

# Best app structure

I’d organize it into **5 main tabs**:

1. **Dashboard**
2. **Performances**
3. **Mix Builder**
4. **Competition Day**
5. **Assets & References**

---

# MVP version

If you want the first version to stay simple, build only this:

```text
MVP
---
- competition list
- performance cards
- timing sections
- reference links
- notes area
- mix status tracker
- export checklist
```

---

# Future “wow” version

```text
WOW VERSION
-----------
- waveform-based mix timeline
- drag-and-drop sections
- auto-duration calculator
- owner approval workflow
- dancer/team profile pages
- SMS-ready comp-day reminders
- instant backup export package
```
