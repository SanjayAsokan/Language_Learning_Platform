import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CulturalTips = () => {
  const { langId } = useParams();
  const navigate = useNavigate();
  const [tips, setTips] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadTips = async () => {
      try {
        const res = await fetch(`/data/${langId}/cultural-tips.json`);
        const data = await res.json();
        setTips(data);
      } catch (err) {
        console.error("Failed to load cultural tips:", err);
      }
    };
    loadTips();
  }, [langId]);

  const nextTip = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  const currentTip = tips[currentIndex];

  if (tips.length === 0) {
    return <div className="text-center mt-10">Loading cultural tips...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center p-6">
      <button
        onClick={() => navigate(`/language/${langId}`)}
        className="mb-8 px-6 py-2 mr-320 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-xl shadow-md hover:from-blue-500 hover:to-teal-500 transition"
      >
        ⬅ Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-center mb-4 text-teal-800 drop-shadow">
        {langId.charAt(0).toUpperCase() + langId.slice(1)} Cultural Tips 🎭
      </h1>

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-lg px-10 py-13 text-center border-2 border-blue-100 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
        <div className="text-5xl mb-3">{currentTip.emoji}</div>
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">
          {currentTip.title}
        </h2>
        <p className="text-gray-700 mb-4">{currentTip.description}</p>

        <p className="text-sm text-gray-500">
          Tip {currentIndex + 1} of {tips.length}
        </p>
      </div>

      <button
        onClick={nextTip}
        className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-2 rounded-full shadow-md transition"
      >
        👉 Next Tip
      </button>
    </div>
  );
};

export default CulturalTips;
