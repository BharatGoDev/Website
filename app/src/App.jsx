import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
