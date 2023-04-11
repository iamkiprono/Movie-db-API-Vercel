import React from "react";

const page = async () => {
  const url = "https://api.themoviedb.org/3/tv/popular?api_key=";
  const apiKey = "aeeb61963da597e184eba3a9b3377487";

  const res = await fetch(`${url}${apiKey}`);
  const data = await res.json();
  const movies = data.results;
  console.log(data);

  return (
    <div className="App">
      <div className="container">
        {movies.map((movie) => {
          return (
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              />
              <h3>{movie.name}</h3>
              <h5>{movie.original_name}</h5>
              <p>{movie.first_air_date}</p>
              <p>{movie.vote_average}/10</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
