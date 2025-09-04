import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LanguageSelector from "./components/LanguageSelector";
import LanguageDashboard from "./components/LanguageDashboard";
import LessonsList from "./pages/LessonsList";
import QuizLevels from "./pages/QuizLevels";
import QuizPage from "./pages/QuizPage";
import Flashcards from "./pages/Flashcards";
import CulturalTips from "./pages/CulturalTips";
import PronunciationList from "./pages/PronunciationList";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
  <>
  {user && <Navbar />}
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
    <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
    
    {/* New: Language Selector Route */}
    <Route path="/language-selector" element={user ? <LanguageSelector /> : <Navigate to="/login" />}/>
    
    {/* Protected Routes (require login + language selection) */}
    <Route path="/language/:langId" element={user ? <LanguageDashboard /> : <Navigate to="/login" />}/>
    <Route path="/:langId/lessons"  element={user ? <LessonsList /> : <Navigate to="/login" />}/>
    <Route path="/:langId/quizzes"  element={user ? <QuizLevels /> : <Navigate to="/login" />}/>
    <Route path="/:langId/quizzes/level/:levelId" element={user ? <QuizPage /> : <Navigate to="/login" />}/>
    <Route path="/:langId/flashcards" element={user ? <Flashcards /> : <Navigate to="/login" />}/>
    <Route path="/:langId/cultural-tips" element={user ? <CulturalTips /> : <Navigate to="/login" />}/>
    <Route path="/:langId/pronunciation" element={user ? <PronunciationList /> : <Navigate to="/login" />}/>
    </Routes>
    </>
  );
};

export default App;
