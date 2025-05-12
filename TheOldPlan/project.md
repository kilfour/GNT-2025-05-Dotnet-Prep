# 🧭 The Tracker ToolKit Project

In this course, we'll build a **real, working web application** — not just to learn how to code, but to simulate working on a modern development team.

---

## 📦 What We’re Building 

The Bootcamp Tracker is made up of several key features:

- ✅ **Ticket System** – Tracks work to be done and what’s been completed
- 📔 **Journal System** – Logs daily reflections, moods, learning notes
- 📊 **Dashboard & Metrics** – Shows burndown charts, activity stats, and team progress
- 🧪 **Testing Playground** – Makes sure everything works and is testable

You’ll build this collaboratively in small, agile teams. Each team owns a different part of the app, with clear responsibilities.

---

## 👥 Teams & Responsibilities

| Team | Responsibility |
|------|----------------|
| **Team Alpha** | Ticket System  |
| **Team Bravo** | Journal Module | 
| **Team Charlie** | Dashboard | 

Each team is **vertical** — meaning you’ll work across the full stack for your feature:
- Data modeling and validation
- UI & DOM rendering
- Unit testing
- Integration with the whole app

Expect to rotate teams or get “poached” by another one during the course — just like in real life.

---

## 🧑‍💻 How We'll Work

- Tools: VS Code, Git, GitHub, CI, Node, Vite, Vitest
- Every day starts with a **stand-up**, and ends with a **stand-down**
- Estimate, assign, and complete real tickets
- Write tests and review each other’s code
- Deploy and demo your work by the end of the course

---

## 🗂 Feature Specifications

### ✅ Ticket Board Interface
To keep things realistic but accessible, the initial ticket board will:
- Display tickets grouped by `status` (e.g., To Do / In Progress / Done)
- Allow users to change status using a `<select>` dropdown per ticket
- Use functions to filter and display each group

**Example Features:**
- `tickets.filter(t => t.status === "todo")`
- Each ticket card includes title, estimate, and status selector
- Bonus: display counts or total estimates per column

**Stretch Goals:**
- Add animations or reorderable lists
- Let users assign themselves to a ticket
- Implement basic drag-and-drop (optional)

### 📔 Journal Interface
The journal helps learners reflect, log their journey, and track moods or focus over time.
- Users can add a journal entry per day
- Each entry includes a date, free-form text, optional tags, and a mood rating

**Example Features:**
- `entries.filter(e => e.date === today)`
- Support markdown-style formatting
- Display entries grouped by date or tag

**Stretch Goals:**
- Mood visualizations (emoji bar, slider)
- Search or filter by keyword/tag
- Link entries to specific tickets

### 📊 Dashboard & Metrics 
The dashboard gives learners and instructors visibility into progress and trends.
- Show counts of tickets by status
- Visualize journal activity and moods
- Display team burndown chart or similar metrics

**Example Features:**
- Count completed tickets by user
- Visualize log frequency per day
- Compare current estimates vs completed

**Stretch Goals:**
- Generate a printable summary or shareable report
- Highlight blockers or low-activity patterns
- Export data as JSON or CSV

