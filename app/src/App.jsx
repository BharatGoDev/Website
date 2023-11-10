import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Account from "./components/Account";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              session ? (
                <Account key={session.user.id} session={session} />
              ) : (
                <>
                  <Hero />
                  <Services />
                  <Projects />
                  <Contact />
                  <Footer />
                </>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
