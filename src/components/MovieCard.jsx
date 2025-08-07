import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({ movies }) {
  const { isFav, addToFav, removeFav } = useMovieContext();
  const favorite = isFav(movies.id);
  const onFavClick = (e) => {
    e.preventDefault();
    if (favorite) removeFav(movies.id);
    else addToFav(movies);
  };

  return (
    <div className="movie-card-comp">
      <div>
        {/* mvoie poster */}
        <img
          src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`} // just imbd thingd
          alt="add title alt here"
        />
        <div>
          {/* favourite thing */}
          <button
            className={`"btn-fav" ${favorite ? "btn-fav-active" : "btn-fav"}`}
            onClick={onFavClick}
          >
            ❤️
          </button>
          
        </div>
      </div>
      <div>
        {/* movie details */}
        <h3>{movies.title}</h3>
        <h4>{movies.release_date}</h4>
      </div>
    </div>
  );
}

export default MovieCard;
