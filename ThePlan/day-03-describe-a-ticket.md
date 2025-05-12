### Day 3 — Describe a Ticket

**CRC Card Activity:**  
Each team creates a CRC card for their main class:
- **Team Alpha:** `Ticket`
- **Team Bravo:** `JournalEntry`
- **Team Charlie:** `DashboardMetrics`

On paper or in a shared doc, list:
- **Class Name**
- **Responsibilities** (what it does)
- **Collaborators** (what other objects it talks to)

Use this to prepare for your implementation — these cards are a stepping stone toward proper class modeling later in the course.

**Per Team Focus:**
- **Team Alpha:** Formalize the shape of a ticket and how you might extend it later (e.g., assignment, priority).
- **Team Bravo:** Consider if any logic or structure from tickets could be reused for journal entries.
- **Team Charlie:** Start identifying what fields you'd want to collect for stats (e.g., estimates, completion time).

> **Team Alpha & Bravo Hint:** Ticket and journal objects are very similar. Begin noting any differences or overlaps in structure — you might eventually want to reuse or refactor shared logic.

**Theme:** Make code represent a real task — your own.  
**Goal:** Model a “ticket” in JS using an object.

**Concepts:**
- Objects revisited
- Functions: input/output
- Simulating a tracker system

**Tasks:**
- Create `ticket.js`
- Build a `createTicket(title, estimate, completed)` function
- Add `markDone(ticket)` to update the ticket
- Store and manage tickets in an array

**Stretch:**
- Sort tickets by estimate
- Count completed tickets

**Reflection Prompt:**
> "What makes a task feel finished? How can a tool help with that?"

**Stand-down Activity:**
- Share your ticket object in small groups. What would you add if this were a real tool?