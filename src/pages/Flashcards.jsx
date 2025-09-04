import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FlashcardViewer = () => {
  const { langId } = useParams();
  const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const loadFlashcards = async () => {
      try {
        const res = await fetch(`/data/${langId}/flashcards.json`);
        const data = await res.json();
        setFlashcards(data);
      } catch (error) {
        console.error("Failed to load flashcards", error);
      }
    };
    loadFlashcards();
  }, [langId]);

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const goToDashboard = () => {
    navigate(`/language/${langId}`);
  };

  if (flashcards.length === 0) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading flashcards...</div>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-blue-100 p-4">
      
      <button onClick={goToDashboard}
      className="mr-300 mb-6 px-6 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl shadow-md hover:from-violet-600 hover:to-purple-700 transition" > ⬅ Back to Dashboard </button>

      <h1 className="text-3xl font-bold mb-6 capitalize text-gray-800">{langId} Flashcards</h1>

      <div
        onClick={() => setFlipped(!flipped)}
        className="w-80 h-48 md:w-96 md:h-56 flex items-center justify-center bg-white shadow-lg rounded-2xl cursor-pointer text-xl text-center p-6 transition-transform transform duration-500 hover:scale-105"
      >
        {flipped ? (
          <div>
            <p className="text-gray-700 text-lg mb-2">
              <span className="font-bold">Translation:</span> {currentCard.translation}
            </p>
            <p className="italic text-sm text-gray-500">{currentCard.example}</p>
          </div>
        ) : (
          <p className="font-bold text-indigo-700 text-2xl">{currentCard.word}</p>
        )}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrev}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full shadow"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full shadow"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
