import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const languages = [
  {
    id: "spanish",
    name: "Spanish",
    color: "bg-yellow-200",
    flag: "🇪🇸",
  },
  {
    id: "french",
    name: "French",
    color: "bg-blue-200",
    flag: "🇫🇷",
  },
  {
    id: "german",
    name: "German",
    color: "bg-green-200",
    flag: "🇩🇪",
  },
];

const LanguageSelector = () => {
  const navigate = useNavigate();
  const { setSelectedLanguage } = useContext(LanguageContext);

  const handleSelect = (langId) => {
    setSelectedLanguage(langId);
    navigate(`/language/${langId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select a Language</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((lang) => (
          <div
            key={lang.id}
            onClick={() => handleSelect(lang.id)}
            className={`cursor-pointer p-6 rounded-2xl shadow-md hover:scale-105 transform transition-all duration-300 ${lang.color}`}
          >
            <div className="text-5xl mb-2">{lang.flag}</div>
            <div className="text-xl font-semibold">{lang.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
