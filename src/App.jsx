import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Count from "./pages/Count";
import Moviefetcher from "./pages/Moviefetcher";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/movie" element={<Moviefetcher />} />
      </Routes>
    </>
  );
}

export default App;
