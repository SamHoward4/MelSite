import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import MovingImages from "./components/MovingImages.jsx";
import StillImages from "./components/StillImages.jsx";
import Writing from "./components/Writing.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moving-images" element={<MovingImages />} />
          <Route path="/still-images" element={<StillImages />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
