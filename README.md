# DriveAI — Project Documentation

## 📌 Overview
DriveAI is a single-page car dealership website powered by an AI assistant.
Unlike a normal chatbot, the AI:
- Understands user queries
- Converts them into structured actions
- Dynamically updates the UI
- Navigates the page automatically

👉 The goal is to create a “conversation-driven website”, not just a UI.

## 🎯 Objective
Build a system where:
`User Query → AI → JSON Action → UI Updates`

**Example:**
User: “Show SUVs under 20 lakhs”
System: Scrolls to models → Filters SUVs → Updates UI → Shows response

## 🧠 Core Concept
This project is based on: **AI as a UI Controller**
Instead of: user clicking buttons ❌
We allow: user talking to AI ✅

## 🏗️ Architecture
Frontend (Next.js UI)
   ↓
API Route (/api/ai)
   ↓
AI (Groq / OpenAI)
   ↓
JSON Response
   ↓
UI Updates

## ⚙️ Tech Stack
- **Next.js** — frontend + backend
- **Tailwind CSS** — styling
- **Groq API** — AI processing
- **Vercel** — deployment

## 🧩 Features
1. **Hero Section**
   - Brand intro
   - CTA
2. **Car Models Section**
   - Displays 4–6 cars
   - Shows: name, type (SUV, Sedan), price, seats
3. **AI Assistant (Core Feature)**
   - Floating assistant that accepts user input, processes queries, and triggers UI actions
4. **Comparison Section**
   - Compare 2 cars dynamically
5. **Booking Form**
   - Pre-filled using AI
   - Example: model, date, city
6. **Pricing System**
   - Currency switching (INR ↔ USD)

## 🧠 AI Query System
The AI converts natural language into structured JSON.

**Example 1 — Filter**
```json
{
  "action": "FILTER",
  "type": "SUV",
  "price": 2000000
}
```

**Example 2 — Compare**
```json
{
  "action": "COMPARE",
  "cars": ["Porsche Cayenne", "Range Rover"]
}
```

**Example 3 — Booking**
```json
{
  "action": "BOOK",
  "car": "Porsche Cayenne",
  "date": "Saturday",
  "city": "Kochi"
}
```

**Example 4 — Navigation**
```json
{
  "action": "NAVIGATE",
  "section": "features"
}
```

## 🔁 Data Flow
1. User enters query
2. Frontend sends request → `/api/ai`
3. API calls AI
4. AI returns JSON
5. Frontend: updates state, scrolls, updates UI

## 🧱 Component Design
- **Controller**: `page.tsx` → handles all AI actions
- **Sections**: Hero, Models, Compare, Booking, Contact
- **UI Components**: CarCard, Button, Input
- **AI Layer**: ChatAssistant, AI API route

## 🔥 Key Functional Requirements
The system must support at least 6 query types:
✅ 1. Filter Cars (“Show SUVs under 20 lakhs”)
✅ 2. Compare Cars (“Compare top 2 models”)
✅ 3. Book Test Drive (“Book test drive Saturday Kochi”)
✅ 4. Recommendation (“Best car for family of 5”)
✅ 5. Currency Change (“Show price in dollars”)
✅ 6. Navigation (“Go to features section”)

## 🎨 UI Behavior Rules
Each AI query must:
- Scroll to relevant section
- Update UI dynamically
- Show response

👉 If not → project fails evaluation
