import Link from "next/link";


export default async function Home() {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=";
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
            <Link href={`${movie.id}`}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}/10</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
