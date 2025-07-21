import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="text-white font-bold text-xl">LangLearn 🌍</div>
      {user && (
        <div className="flex items-center gap-4 text-white">
          <span className="hidden sm:inline text-sm font-medium">
            👤 {user.displayName || user.email}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
