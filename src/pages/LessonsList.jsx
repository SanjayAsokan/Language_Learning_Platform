import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LessonsList = () => {
  const { langId } = useParams();
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(`/data/${langId}/lessons_${langId}.json`);
        const data = await response.json();
        setLessons(data);
        setIndex(0);
      } catch (error) {
        console.error("Failed to fetch lessons:", error);
      }
    };

    fetchLessons();
  }, [langId]);

  const currentLesson = lessons[index];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 flex flex-col items-center p-8">
      <button onClick={() => navigate(`/language/${langId}`)}
      className="mt-15 mb-8 px-6 py-2 mr-300 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl shadow-md hover:from-teal-600 hover:to-cyan-600 transition"> ⬅ Back to Dashboard </button>


      {lessons.length > 0 ? (
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-5xl transition-all mt-4">
          <h2 className="text-4xl font-bold mb-6 text-center capitalize text-indigo-700">
            {langId} Lesson
          </h2>

          <div className="mb-6 text-center text-gray-500 text-lg">
            Lesson {index + 1} of {lessons.length}
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {currentLesson.title}
            </h3>
            <p className="text-md text-gray-600 mb-1">
              <strong>Level:</strong> {currentLesson.level}
            </p>
            <p className="text-md text-gray-600 mb-4">
              <strong>Topic:</strong> {currentLesson.topic}
            </p>
            <div className="bg-indigo-50 p-6 rounded-xl shadow-inner">
              <p className="text-xl text-gray-800 leading-relaxed">
                {currentLesson.content}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setIndex((prev) => prev - 1)}
              disabled={index === 0}
              className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              ⬅ Prev
            </button>
            <button
              onClick={() => setIndex((prev) => prev + 1)}
              disabled={index === lessons.length - 1}
              className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600 mt-10">Loading lessons...</p>
      )}
    </div>
  );
};

export default LessonsList;
