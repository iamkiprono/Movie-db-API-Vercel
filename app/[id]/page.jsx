export default async function page ({ params })  {
  const { id } = params;

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=aeeb61963da597e184eba3a9b3377487`;

  
    const res = await fetch(url);
    const data = await res.json();

    const details = data;
  

  return (
    <div className="container">
      <div className="movie-details">
        <h2>Movie Details</h2>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt=""
          />
          <h3>{details.original_title}</h3>
          <p className="overview">{details.overview}</p>
          <p>{details.release_date}</p>
          <p>{details.status}</p>
        </div>
        <a target="_blank" href={details.homepage}>
          Visit{" "}
        </a>
      </div>
    </div>
  );
};


