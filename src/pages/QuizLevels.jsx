import { useParams, useNavigate } from "react-router-dom";

const QuizLevels = () => {
  const { langId } = useParams();
  const navigate = useNavigate();
  const levels = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10 mt-10 text-gray-800">
        {langId.charAt(0).toUpperCase() + langId.slice(1)} – Choose a Quiz Level
      </h1>

      <button
        onClick={() => navigate(`/language/${langId}`)}
        className="mb-10 px-6 py-2 mr-300 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-xl shadow-md hover:from-orange-500 hover:to-red-500 transition"
      >
        ⬅ Back to Dashboard
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
        {levels.map((lvl) => (
          <div
            key={lvl}
            onClick={() => navigate(`/${langId}/quizzes/level/${lvl}`)}
            className="bg-gradient-to-br from-yellow-100 to-orange-200 p-8 rounded-2xl text-center cursor-pointer hover:scale-105 transition shadow-lg"
          >
            <div className="text-2xl font-semibold text-gray-800">Level {lvl}</div>
            <div className="text-5xl mt-3">❓</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizLevels;
