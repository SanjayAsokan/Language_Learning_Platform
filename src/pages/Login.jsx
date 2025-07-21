import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Try again!",err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage:"url('/images/img1.jpg')", }}>
      <div className="bg-black/50 backdrop-blur-m border border-white/30 shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md text-white">
        <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-md"> Welcome Back </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <input type="email" placeholder="Email"
            className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={email} onChange={(e) => setEmail(e.target.value)} required/>

          <input type="password" placeholder="Password"
            className="w-full px-4 py-3 bg-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={password} onChange={(e) => setPassword(e.target.value)} required />

          {error && <p className="text-red-300 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white py-3 rounded-lg font-bold transition-all shadow-lg" >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-white/80"> Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-300 font-medium hover:underline"> Sign up </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
