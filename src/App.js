import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Timer from "./components/Timer";
import Home from "./components/Home";
// STYLE
import "./components/style/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer/:sound" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
