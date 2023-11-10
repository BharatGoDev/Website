import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-center pt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <div className="pb-5">
          <span style={{ color: "#2196F3" }}>Greetings from</span>
          </div>
          <span style={{ color: "#FF9933" }}>Bhar</span>
          <span style={{ color: "#FFFFFF" }}>atG</span>
          <span style={{ color: "#138808" }}>oDev</span>
        </h1>
      </div>
      <div className="flex flex-col items-center mt-8">
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <div className="mb-4 text-left">
            <label htmlFor="email" className="text-sm font-medium">
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md p-2 text-black"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2"
            disabled={loading}
          >
            {loading ? "Loading" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}