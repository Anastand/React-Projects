import React from "react";
function MovieCard({ movies }) {
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
          <button>
            ❤️
            {/* add onclick func */}
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
