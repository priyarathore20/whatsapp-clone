// import { useState } from "react";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // const [loading, setLoading] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
