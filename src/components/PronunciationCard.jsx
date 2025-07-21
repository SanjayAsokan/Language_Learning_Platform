import React from "react";
import { Volume2 } from "lucide-react";

const PronunciationCard = ({ item }) => {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang =
      item.language === "french"
        ? "fr-FR"
        : item.language === "german"
        ? "de-DE"
        : "es-ES";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 group overflow-hidden">
      <div className="absolute top-10 right-0 h-20 w-20 bg-indigo-100 rounded-bl-3xl flex items-center justify-center text-indigo-600 text-3xl">
        {item.text.charAt(0).toUpperCase()}
      </div>

      <div className="pt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.text}</h2>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium text-gray-800">Translation:</span>{" "}
          {item.translation}
        </p>
        <p className="text-sm text-gray-500 italic">
          <span className="text-gray-600 font-medium">Phonetic:</span>{" "}
          {item.phonetic}
        </p>
      </div>

      <button
        onClick={handleSpeak}
        className="mt-6 flex items-center gap-2 bg-indigo-500 text-white py-2 px-5 rounded-full hover:bg-indigo-600 transition"
      >
        <Volume2 className="w-5 h-5" />
        Hear It
      </button>
    </div>
  );
};

export default PronunciationCard;
