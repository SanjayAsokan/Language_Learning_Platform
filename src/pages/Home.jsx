import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img1.jpg')" }}
    >
      {user && <Navbar />}

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-black/60 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-2xl text-white text-center">
          {!user ? (
            <>
              <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
                Welcome to LangLearn 🎓
              </h1>
              <p className="mb-6 text-white/80">
                Master Spanish, French, or German with fun lessons, quizzes & flashcards!
              </p>
              <Link
                to="/login"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <img
                src="/images/mascot.png"
                alt="Mascot"
                className="w-24 h-24 mx-auto mb-4 rounded-full border border-white/30 shadow"
              />
              <h2 className="text-3xl font-bold mb-2">Welcome, {user.displayName || "Learner"}!</h2>
              <p className="mb-6 text-white/80">Ready to continue your learning journey?</p>

              <button
                onClick={() => navigate("/language-selector")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
              >
                Choose Language
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
