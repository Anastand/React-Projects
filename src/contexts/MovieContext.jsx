// my first time with this so i dont understand a lot

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

const MovieContext = createContext();
// ➡️ This creates a new context object. It’s like creating a global "space" to store data (favorites) that other components can subscribe to.
// Think of this as your "Movie App Global Data Store".

export const useMovieContext =()=> useContext(MovieContext);
// ➡️ This is a custom hook you made to access the context easily.

export const MovieProvider = ({ children }) => {
  // ➡️ This is your provider component.You wrap your whole app in this component, and it allows any component inside to access the MovieContext.
  // Think of it like: “this component provides access to the global movie state to any child inside it.”

  const [favorites, setFavourites] = useState([]);
  // simple react code , just stores the favourite movies as the empty arrays

  useEffect(() => {
    // this will run when the website will load and the goal for this is to figure out if we have favoutite and store those favourite in the state created above
    const storedFav = localStorage.getItem("favorites"); // !userstand the local storage more
    if (storedFav) setFavourites(JSON.parse(storedFav)); // !ask more explanantion late
    // ➡️ This useEffect runs once when the component mounts ([] dependency array).
    // It checks if there are saved favorites in localStorage. If there are, it loads them into state by parsing the JSON string into an array
    // ✅ This gives your app persistent favorites.
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // ➡️ This useEffect runs every time favorites changes.
    // It saves the current list to localStorage, so the list is stored even after a page refresh.
  }, [favorites]);
  const addToFav = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };
  const removeFav = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    return favorites.some((movie) => movie.id == movieId);
  };

  const value = {
    favorites,
    setFavourites,
    addToFav,
    removeFav,
    isFav,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
