import { useParams, useNavigate } from "react-router-dom";

const sections = [
  { title: "Lessons", path: "lessons", emoji: "📘" },
  { title: "Flashcards", path: "flashcards", emoji: "🧠" },
  { title: "Quizzes", path: "quizzes", emoji: "❓" },
  { title: "Cultural Tips", path: "cultural-tips", emoji: "🎭" },
  { title: "Pronunciation", path: "pronunciation", emoji: "🔊" },
];

const LanguageDashboard = () => {
  const { langId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {langId.charAt(0).toUpperCase() + langId.slice(1)} Learning Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {sections.map((sec) => (
            <div
              key={sec.path}
              onClick={() => navigate(`/${langId}/${sec.path}`)}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer hover:scale-105 transition-all duration-200 text-center"
            >
              <div className="text-5xl mb-4">{sec.emoji}</div>
              <div className="text-2xl font-semibold text-gray-800">{sec.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDashboard;
