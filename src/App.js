import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#ffdac6",
        color: "#f85e00",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Router>
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
