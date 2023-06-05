import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import LogisticsPage from "./pages/logistics";
import FaqPage from "./pages/faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/logistics" element={<LogisticsPage />} />
        <Route exact path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  );
}

export default App;
