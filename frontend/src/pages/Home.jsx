import MovieCard from "../components/MovieCard";
import Categories from "../components/Categories";
import { useState, useEffect } from "react";
import {
  searchMovies,
  getPopularMovies,
  getMoviesByCategory,
} from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    loadMovies();
  }, [selectedCategory]);

  const loadMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      let movieData;
      if (selectedCategory) {
        movieData = await getMoviesByCategory(selectedCategory);
      } else {
        movieData = await getPopularMovies();
      }
      setMovies(movieData);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery?.trim()) return;
    if (loading) return;

    setLoading(true);
    setError(null);
    setSelectedCategory(null);

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.error(err);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="search-button"
            disabled={loading}
            aria-label={loading ? "Searching" : "Search"}
          >
            {loading ? "..." : "Search"}
          </button>
        </form>
      </div>

      <Categories
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {error && <div className="error-message">{error}</div>}

      <div className="content-container">
        {loading ? (
          <div className="loading">Loading movies...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
