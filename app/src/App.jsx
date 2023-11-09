import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
