import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import { Link } from "react-router-dom";
function Moviefetcher() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        // console.log(movies[0]); // figure out why this is not working
      } catch (err) {
        console.log(err);
        setError("failed to Fetch Movies......");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // Local dummy movie data
  // const movies = [
  //   { id: 1, title: "batman", release_date: "3-2-11" },
  //   { id: 2, title: "falsh", release_date: "1-2-11" },
  //   { id: 3, title: "ironman", release_date: "2-2-11" },
  //   { id: 4, title: "quilbot", release_date: "3-2-11" },
  //   // here we are passing an array of different movie objects
  // ];

  const handleSearch = async (e) => {
    e.preventDefault(); // prevents page reload and keeps input value
    if (!searchTerm.trim()) return;
    // if() return
    try {
      const selectedMovie = await searchMovies(searchTerm);
      setMovies(selectedMovie);
      console.log("im herer");
    } catch (error) {
      console.log(error);
      setError("failed to load searched movie");
    } finally {
      setLoading(false);
    }
  };

  const fetchMovie = async () => {
    // Placeholder for async fetch logic
  };

  return (
    <>
      <div>
        <div>
          <button>
            <Link to="/">HOME</Link>
          </button>
        </div>
        <br />
        <form onSubmit={handleSearch}>
          {/* action goes to the page, type defines button behavior */}
          <input
            type="text"
            placeholder="Search a Movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
          <button>
            <Link to="/fav">fav page</Link>
          </button>
        </form>
      </div>

      {/* Simple map function without search functionality: */}
      {loading ? (
        <div>Loading...... </div>
      ) : (
        <div>
          {movies.map((movies) => (
            <MovieCard movies={movies} key={movies.id} />
          ))}
        </div>
      )}

      {/* Map with search filtering */}
      {/* {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) && (
              <MovieCard movies={movie} key={movie.id} />
            )
          // when the search box is empty all the movies are shown because the startsWith is always true for all the movie until seach term is populated
        )} */}
    </>
  );
}

export default Moviefetcher;
