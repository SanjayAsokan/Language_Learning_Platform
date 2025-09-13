🌍 Language Learning Platform

An interactive platform to learn Spanish, French, and German with lessons, quizzes, flashcards, pronunciation help, and cultural tips — all powered by React + Firebase.

---
📌 Introduction

The Language Learning Platform is a full-stack learning app that helps users practice languages in an engaging way.
It includes interactive lessons, level-based quizzes, flashcards, cultural insights, and pronunciation guides.
User authentication and data storage are powered by Firebase Authentication & Firestore, while content (lessons, quizzes, etc.) is stored in /public/data/ JSON files for easy access.
---
🔧 Project Type

Frontend + Firebase (Fullstack without backend server)
---
🚀 Live Demo

Frontend: https://gregarious-bavarois-88043f.netlify.app/

Backend: ❌ N/A (Firebase only)

Database: Firebase Firestore + Authentication
---
✨ Features

🔐 Firebase Authentication (Login/Signup)

🌍 Language Selector – Choose Spanish, French, or German

📚 Lessons – Topic & level-based lessons from JSON

📝 Quizzes – 10 questions per level

🧠 Flashcards – Vocabulary practice

🔊 Pronunciation – Phonetics & practice words

🌎 Cultural Tips – Learn cultural aspects

🧑‍💻 Protected Routes – Auth-based access

🎨 Responsive UI – Tailwind + animated background

💡 Design Decisions

All content stored in /public/data/ JSON files.

Firebase is used only for authentication & Firestore storage.

No custom backend (purely React + Firebase setup).

Mobile-first responsive design.

Routes generated dynamically based on language + level.

📂 Folder Structure
language-learning-platform/
├── public/
│   ├── data/
│   │   ├── spanish/
│   │   │   ├── lessons.json
│   │   │   ├── quizzes.json
│   │   │   ├── flashcards.json
│   │   │   ├── pronunciation.json
│   │   ├── french/
│   │   ├── german/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── LessonCard.jsx
│   │
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
│
│   ├── firebase.js
│   ├── App.jsx
│   ├── index.js
│
├── tailwind.config.js
├── package.json

⚙️ Getting Started
1. Clone & Install
git clone https://github.com/SanjayAsokan/Language_Learning_Platform.git
cd language-learning-platform
npm install

2. Firebase Setup

Go to Firebase Console

Create a project → Enable Authentication & Firestore

Copy config values → Paste them into firebase.js

3. Run the app
npm start

🧪 Sample Test Credentials
Email: sanjay@gmail.com
Password: 123456

📦 Tech Stack

Frontend: React, React Router

Styling: Tailwind CSS

Authentication: Firebase Auth

Database: Firebase Firestore

Data Storage: JSON files in /public/data

Icons/UI: Lucide

🤝 Contributing

Contributions are welcome 🎉

Fork the repo

Create a feature branch: git checkout -b feature-name

Commit changes: git commit -m "Add feature"

Push to branch: git push origin feature-name

Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License. See LICENSE
 for details.
