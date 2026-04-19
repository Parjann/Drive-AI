# LEARNINGS.md

This project was a valuable experience for me in understanding how to build a real-world application that combines frontend development with AI-driven interactions.

---

## What Was New to Me

The biggest new concept for me was treating AI as something that **controls the UI**, not just responds like a chatbot. Instead of simply displaying text, I had to convert user queries into structured JSON and use that to trigger UI updates like filtering cars, navigating sections, and pre-filling forms.

---

## Challenges I Faced

### 1. Handling AI Responses

Initially, the AI responses were not always consistent. Sometimes it returned extra text instead of clean JSON, which caused parsing issues in the frontend.

To fix this:

* I improved the prompt by making it stricter
* I added fallback handling in case parsing failed

---

### 2. Synchronizing AI with UI

One of the hardest parts was making sure that:

* the page scrolls
* the UI updates
* the correct section is highlighted

All at the same time based on a single AI action.

This required careful state management in the main controller (`page.tsx`).

---

### 3. Compare Section Design

I spent a lot of time improving the comparison table UI. Initially, it:

* looked too large
* had horizontal scrolling
* didn’t feel clean

Through multiple iterations, I:

* removed unnecessary scroll
* improved layout alignment
* added a better structured table
* handled empty states properly

---

### 4. Form Behavior and UX

Handling the booking form was another challenge. I had to:

* pre-fill only specific fields from AI (model, city)
* avoid overriding user-selected values (date/time)
* reset the form after submission
* add confirmation dialogs for better UX

---

### 5. Responsive Design

Making the UI responsive across devices required extra effort. Some issues I faced:

* buttons getting hidden on mobile
* layout breaking in compare section
* navbar needing a hamburger menu

I fixed these by adjusting layouts, spacing, and component structure.

---

## What I Learned

* How to use **AI as a controller for UI behavior**
* How to write better prompts to get structured outputs
* The importance of **handling edge cases** when working with AI
* How to improve UI through **iterative refinement**, not perfection

---

## Resources I Used

* Groq API documentation
* UI inspiration from modern automotive websites

---

## What I Would Improve Next

If I had more time, I would:

* Add **voice input** for interacting with the AI assistant
* Improve recommendation logic using more detailed car attributes
* Add smoother animations and transitions
* Persist user preferences for a more personalized experience
* Improve accessibility and keyboard navigation

---

## Final Thoughts

This project helped me understand how AI can be integrated into real applications beyond simple chat interfaces. It also improved my problem-solving skills, especially when dealing with unpredictable AI behavior and UI synchronization.

Overall, it gave me a better understanding of how to build a complete, end-to-end application with a focus on both functionality and user experience.

---
