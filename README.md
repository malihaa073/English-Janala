# 📘 Vocabulary Learning App

A vocabulary learning platform that fetches data dynamically from public APIs. Built using modern web technologies, this project helps users explore English vocabulary lessons, understand word meanings, and test their knowledge interactively.

---
## live repo:https://cosmic-pithivier-bfe7f4.netlify.app/
## ⚡ API Endpoints

- **Get All Levels:**  
  `https://openapi.programming-hero.com/api/levels/all`

- **Get Words by Level ID:**  
  `https://openapi.programming-hero.com/api/level/{id}`  
  Example: `https://openapi.programming-hero.com/api/level/5`

- **Get Word Details by Word ID:**  
  `https://openapi.programming-hero.com/api/word/{id}`  
  Example: `https://openapi.programming-hero.com/api/word/5`

- **Get All Words:**  
  `https://openapi.programming-hero.com/api/words/all`

---

## 🛠 Requirements Overview

### 📌 Navbar
- Fixed at the top with a bottom border
- Left: Logo & Brand Name
- Right: Buttons with icons
  - **FAQ** (jumps to FAQ section with smooth scroll)
  - **Learn** (jumps to Vocabulary section with smooth scroll)
  - **Logout** (logs user out and hides content)

### 🖼️ Banner
- Left: Title, description, and login form
- Right: Banner image
- Designed exactly as per Figma

---

## ❓ FAQ Section

Includes the following questions and answers:
- The difference between `var`, `let`, and `const`
- The difference between `map()`, `forEach()`, and `filter()`
- Explanation of arrow functions vs regular functions
- How JavaScript Promises work
- How closures work in JavaScript

---

## 📚 Vocabulary Section

- Center-aligned heading
- Dynamically fetch buttons from **API-01** (levels) on page load
- Clicking a lesson button:
  - Loads all words for that lesson using **API-02**
  - Displays them in card format:
    - Word
    - Meaning & pronunciation
    - Two action buttons (icons from Figma)
  - Shows **"No Word Found"** if empty
  - Highlights the selected lesson button

---

## 🔍 Vocabulary Details (Modal)

On clicking the "details" icon:
- Fetch data from **API-03**
- Modal displays:
  - Word & pronunciation
  - Example sentence
  - Synonyms
  - “Complete Learning” button to close modal

---

## 🧪 Challenge Requirements

### ✅ Custom Navigation & Smooth Scroll
- On first load:
  - Only Banner & Footer are visible
- Login functionality:
  - Show alert if name is empty
  - Show alert if password is incorrect (`123456` is valid)
  - On success:
    - Show success alert
    - Show Navbar, Vocabulary, and FAQ sections
    - Hide Banner
- Logout functionality:
  - Hides Navbar, Vocabulary, and FAQ
  - Shows Banner & Footer only
- Smooth scrolling for navigation buttons

### ❗ Handling Invalid Data
- Avoid rendering `null`, `undefined`, or empty values
- Show fallback messages when no data is available

### 🔄 Loading Spinner
- Displays spinner while fetching vocabulary data

---

## 📁 Technologies Used

- **React JS**
- **Tailwind CSS**
- **React Icons**
- **React Router (optional)**
- **Custom Modals & Forms**
- **Vanilla JavaScript logic**

---
