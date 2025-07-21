# Language Learning Platform

## Introduction
A language learning platform to learn **Spanish**, **French**, and **German**. Users can access interactive lessons, level-based quizzes, flashcards, pronunciation help, and cultural tips — all organized using JSON files stored in the `/public` directory. Firebase is used for authentication, and the UI is built using React + Tailwind CSS.

---

## 🔧 Project Type
Fullstack (Frontend + Firebase)

---

## 🚀 Deployed Links
- Frontend: [https://your-frontend-url.vercel.app]  
- Backend: ❌ N/A (uses Firebase only)  
- Database: Firebase Firestore & Authentication

---

## 📁 Folder Structure

language-learning-platform/
├── public/
│   ├── data/
│   │   ├── spanish/
│   │   │   ├── lessons.json
│   │   │   ├── quizzes.json
│   │   │   ├── flashcards.json
│   │   │   ├── pronunciation.json
│   │   ├── french/
│   │   │__ german
|   |   | 
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── LessonCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── LessonsList.jsx
│   │   ├── QuizLevels.jsx
│   │   ├── QuizPage.jsx
│   │   ├── Flashcards.jsx
│   │   ├── CulturalTips.jsx
│   │   ├── PronunciationList.jsx
│   ├── firebase.js
│   ├── App.jsx
│   ├── index.js
├── tailwind.config.js
├── package.json


## ✨ Features

✅ Firebase Auth (Login/Signup)  
🌍 Language Selector (Spanish, French, German)  
📚 Lessons from JSON (by topic and level)  
📝 Level-wise Quizzes (10 per level)  
🧠 Flashcards per language  
🔊 Pronunciation with phonetics  
🌎 Cultural Tips  
🧑‍💻 Protected Routes using Auth  
🎨 Fully responsive with Tailwind + animated background

## 💡 Design Decisions & Assumptions

All learning data is stored in `/public/data/` for easy access via fetch.  
Firebase used for authentication only.  
No backend server – purely frontend + cloud-based Firebase setup.  
Mobile-first UI with responsive components.  
Routes are dynamically generated based on language and level.

## ⚙️ Getting Started
### 1. Clone & Install
```bash
git clone https://github.com/your-username/language-learning-platform.git
cd language-learning-platform
npm install

## 🧪 Sample Test Credentials:

Email: sanjay@gmail.com
Password: 123456

## 📦 Tech Stack:

Frontend: React, React Router, JSX
Styling: Tailwind CSS
Auth: Firebase Authentication
Data: Local JSON files in /public
Icons & UI: Lucide
Deployment: Vercel