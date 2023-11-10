import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check if there's an active session
    const user = supabase.auth.user();
    setSession(user);
  }, []);

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

  if (session) {
    // User is signed in, hide the sign-in option
    return <div>User is already signed in!</div>;
  }

  return (
    <div className="row flex flex-center">
      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <h1 className="header pb-1 pt-1 text-sm text-gray-700">Sign in</h1>
        <p className="description"></p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField text-center pb-1 text-gray-700"
              type="email"
              placeholder="Enter your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "150px"}}
            />
          </div>
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <button className={'button block text-sm text-gray-700'} disabled={loading} style={{ textAlign: 'center', width: '100%', backgroundColor: '#000080', color: '#fff', borderRadius: '30%', padding: '10px' }}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
