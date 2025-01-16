import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/MovieDetails.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=beaa189b7b76687207f1a54cf2c58b77&append_to_response=credits,videos`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!movie) return <div className="error">Movie not found</div>;

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-details">
      <div
        className="backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="backdrop-overlay">
          <div className="movie-details-content">
            <div className="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <div className="movie-meta">
                <span>{movie.release_date?.split("-")[0]}</span>
                <span>{movie.runtime} min</span>
                <span>{movie.vote_average.toFixed(1)} ⭐</span>
              </div>
              <p className="overview">{movie.overview}</p>
              <div className="genres">
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
              <button
                className={`favorite-btn ${
                  isFavorite(movie.id) ? "active" : ""
                }`}
                onClick={handleFavoriteClick}
              >
                {isFavorite(movie.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
