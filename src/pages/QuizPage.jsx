import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function QuizPage() {
  const { langId, levelId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`/data/${langId}/quizzes.json`);
        const data = await res.json();
        const levelData = data.find((q) => q.level === `Level ${levelId}`);
        setQuestions(levelData ? levelData.questions : []);
      } catch (err) {
        console.error("Error loading quiz data", err);
      }
    };
    fetchQuiz();
  }, [langId, levelId]);

  const handleChange = (qid, selectedOption) => {
    setAnswers((prev) => ({
      ...prev,
      [qid]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleGoToLevels = () => {
    navigate(`/${langId}/quizzes`);
  };

  const getResult = () => {
    let correct = 0;
    let wrong = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });
    return { correct, wrong };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Quiz - Level {levelId} ({langId.charAt(0).toUpperCase() + langId.slice(1)})
        </h1>

        {!submitted ? (
          <>
            {questions.map((q, index) => (
              <div
                key={q.id}
                className="mb-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <h2 className="font-semibold text-lg mb-3 text-gray-800">
                  {index + 1}. {q.question}
                </h2>
                <div className="space-y-2">
                  {q.options.map((option, i) => (
                    <label
                      key={i}
                      className="block bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={answers[q.id] === option}
                        onChange={() => handleChange(q.id, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-8">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Submit Quiz
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center w-full max-w-md border border-gray-200">
              <h2 className="text-3xl font-bold mb-4 text-purple-700">
                🎯 Quiz Results
              </h2>
              <p className="text-lg mb-2 text-gray-800">
                ✅ Correct: <span className="font-semibold">{getResult().correct}</span>
              </p>
              <p className="text-lg mb-4 text-gray-800">
                ❌ Wrong: <span className="font-semibold">{getResult().wrong}</span>
              </p>

              {getResult().correct >= 6 ? (
                <div className="text-green-600 font-bold text-xl mt-4 animate-pulse">
                  🎉 Woohoo! You passed this level with flying colors!
                </div>
              ) : (
                <div className="text-red-600 font-bold text-xl mt-4">
                  💪 Don’t worry! Keep practicing and try again!
                </div>
              )}

              <button
                onClick={handleGoToLevels}
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
              >
                🔙 Go to Levels
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
