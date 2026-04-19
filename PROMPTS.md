# PROMPTS.md

This document captures the key prompts I used while building the DriveAI project, along with what worked, what didn’t, and how I iterated.

---

## 1. UI Refinement – Compare Table Layout

**Prompt:**
"now at the compare table use only cars image without the background like how this image without any background and the whole compare table is too large fix the viewport width"

**Result:**
⚠️ Partially worked — background was removed but layout looked stretched and unbalanced.

**Fix:**
Followed up with layout adjustments to control width and spacing.

---

## 2. Removing Horizontal Scroll

**Prompt:**
"now its look bad and i dont want the bottom scroll at the table"

**Result:**
⚠️ Removed scroll but broke layout responsiveness.

**Fix:**
Reworked layout to distribute content properly instead of relying on overflow.

---

## 3. Improving Table Structure

**Prompt:**
"no put this at the right side of the car image and spread the width of the table"

**Result:**
✅ Improved alignment and visual balance.

---

## 4. Booking Form Automation

**Prompt:**
"now after clicking the book test drive should fill the vehicle model automatically at the test drive form then instead of stay connected section change to contact details then add contact at the navbar and lastly can we some animation or something for the ai assistant icon so that it will always highlited like a light"

**Result:**
✅ Successfully implemented:

* Auto-filled model
* Updated section to contact details
* Added navbar link
* Improved AI assistant visibility

---

## 5. Contact Section Enhancement

**Prompt:**
"put something contact details number, place etc"

**Result:**
✅ Added realistic contact information.

---

## 6. Compare Section State Handling

**Prompt:**
"now compare section should not show compares cars after reload the page its should show compare if we ask the AI or click compare"

**Result:**
⚠️ Initially removed data completely.

**Follow-up Prompt:**
"no no show the table with empty fields"

**Result:**
✅ Final solution: empty state table shown until AI interaction.

---

## 7. Booking UX Improvements

**Prompt:**
"now add a successful dialog box after click the confirm reservation and add a calendar so that the user can select date and time"

**Result:**
✅ Added dialog + calendar input.

---

## 8. AI Data Control Fix

**Prompt:**
"but the date and time is fetching on the ui automatically through the AI assistant only fetching vehicle model and city"

**Result:**
✅ Restricted AI to only fill specific fields.

---

## 9. Time Format Fix

**Prompt:**
"but its showing in 15:00 not in 3PM we have to update the ui i think"

**Result:**
✅ Updated to user-friendly time format.

---

## 10. Reset Booking State

**Prompt:**
"its working now but after confirm and click book another test drive it should remove the previous test drive from the ui"

**Result:**
✅ Fixed state reset after submission.

---

## 11. Newsletter Interaction

**Prompt:**
"also add a successful dialog box after clicking subscribe at the contact details"

**Result:**
✅ Added feedback dialog.

---

## 12. Code Structure Improvement

**Prompt:**
"move the footer section from page.tsx to layout/footer"

**Result:**
✅ Improved component structure and reusability.

---

## 13. Responsive Design

**Prompt:**
"now we are make responsive every component for mobile devices add hamburger menu for the navbar for responsive, the car cards, the compare section everything"

**Result:**
⚠️ Initial layout broke on small screens.

**Fix:**
Refined spacing, stacking, and component behavior.

---

## 14. UI Polishing

**Prompt:**
"fix the ai assistant pop up also and reservation details time its not look good"

**Result:**
✅ Improved UI consistency and readability.

---

## 15. Mobile UX Fixes

**Prompt:**
"also at the join our newsletter the subscribe button is getting hidden in all mobile devices"

**Result:**
✅ Fixed layout overflow issue.

---

## 16. Compare UI Redesign

**Prompt:**
"okay now can we do something for the compare table see this image"

**Result:**
⚠️ Needed multiple refinements.

**Follow-up Prompt:**
"no dont use the sticky column lock remove it"

**Result:**
✅ Final clean comparison layout achieved.

---

**Result:**
✅ Consolidated and refined prompts for documentation.

---
