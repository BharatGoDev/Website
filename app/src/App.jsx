import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Services from "./components/Services";
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Account from './components/Account';

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
    <div>
      <Navbar />
      {session ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <>
          <Hero />
          <Services />
          <Projects />
          <ContactForm />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;