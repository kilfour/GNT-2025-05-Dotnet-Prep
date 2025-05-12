# 🪜 XP Onboarding: Zero-to-Something Story Path

This backlog walks absolute beginners through XP-style development, starting from zero and slowly building toward an app like a story tracker.

Each item is a **true XP story**: valuable, testable, and small.

---

## 🧩 Story: Print a message

**As a** beginning developer
**I want** to print a message to the console
**So that** I know my setup works

### Estimate: 0.1 ideal day

---

## 🧩 Story: Define a story object

**As a** developer
**I want** to define an object that represents a story
**So that** I can start thinking in terms of real data

### Acceptance Criteria

* [ ] `title`, `estimate`, and `done` fields
* [ ] Can create one with a variable

---

## 🧩 Story: Store multiple stories

**As a** developer
**I want** to store multiple stories in an array
**So that** I can manage more than one unit of work

### Acceptance Criteria

* [ ] Array with at least 3 story objects
* [ ] Each story has different content

---

## 🧩 Story: Count completed stories

**As a** developer
**I want** a function to count done stories
**So that** I can track progress

### Acceptance Criteria

* [ ] Function returns a number
* [ ] Only counts stories where `done === true`

---

## 🧩 Story: Output stories as plain text

**As a** user
**I want** to see all stories listed in plain text
**So that** I can read them on the screen

### Acceptance Criteria

* [ ] Each story appears with its title and estimate
* [ ] Done stories marked with a ✅

---

## 🧩 Story: Render stories to the DOM

**As a** web user
**I want** to see stories in the browser, not just the console
**So that** the interface feels real

### Acceptance Criteria

* [ ] Each story becomes an HTML list item
* [ ] Story content shown with proper formatting

---

## 🧩 Story: Add a mark-as-done button

**As a** user
**I want** to click a button to mark a story done
**So that** I can track my progress manually

### Acceptance Criteria

* [ ] Button appears next to each story
* [ ] Clicking it updates the story state

---

## 🧩 Story: Filter to show only unfinished stories

**As a** user
**I want** to hide done stories
**So that** I can focus on what’s left

### Acceptance Criteria

* [ ] A toggle or filter is available
* [ ] List updates accordingly

---

*These stories can stretch across multiple weeks or serve as a guided XP ladder. Each one helps students think in terms of real iteration and feedback.*
