import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Timer from "./Components/Timer";
import TimerTwo from "./Components/TimerTwo";
import Home from "./Components/Home";
// STYLE
import "./Components/style/style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/TimerTwo" element={<TimerTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
