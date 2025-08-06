import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Count from "./pages/Count";
import Moviefetcher from "./pages/Moviefetcher";
import { MovieProvider } from "./contexts/MovieContext";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/movie" element={<Moviefetcher />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
