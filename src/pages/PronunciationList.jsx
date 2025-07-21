import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PronunciationCard from "../components/PronunciationCard";

const PronunciationList = () => {
  const { langId } = useParams();
  const [pronunciations, setPronunciations] = useState([]);

  useEffect(() => {
    const loadPronunciations = async () => {
      try {
        const response = await fetch(`/data/${langId}/pronunciation.json`);
        if (!response.ok) throw new Error("Failed to load pronunciation data");
        const data = await response.json();
        setPronunciations(data);
      } catch (error) {
        console.error("Error loading pronunciation data:", error);
        setPronunciations([]);
      }
    };

    if (langId) loadPronunciations();
  }, [langId]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-100 to-cyan-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-10 mt-32 capitalize">
        {langId} Pronunciation Practice
      </h1>

      <div className="text-center mb-10">
        <Link
          to={`/language/${langId}`}
          className="inline-block mr-300 bg-emerald-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-emerald-700 transition"
        >
          ⬅ Back to Dashboard
        </Link>
      </div>

      {pronunciations.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pronunciations.map((item) => (
            <PronunciationCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-20 text-lg">
          No pronunciation data found for this language.
        </div>
      )}
    </div>
  );
};

export default PronunciationList;
