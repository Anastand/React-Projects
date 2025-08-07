import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
function Favourite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div>
        <button>
          <Link to="/movie">movie page</Link>
        </button>
        No favorites found.
      </div>
    );
  }

  return (
    <div>
      <button>
        <Link to="/movie">movie page</Link>
      </button>
      {favorites.map((movie) => (
        <MovieCard movies={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Favourite;
