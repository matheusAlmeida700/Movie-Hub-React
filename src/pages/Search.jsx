import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { fetchData } from "../services/api";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("q");

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const data = await fetchData(`${searchUrl}?${apiKey}&query=${query}`);
      setMovies(data?.results || []);
    };
    if (query) fetchSearchedMovies();
  }, [query]);

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-2xl text-zinc-50 py-10">
        Results for <span className="text-yellow-500">{query}</span>
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-10">
        {movies.length === 0 ? (
          <p>Loading...</p>
        ) : (
          movies
            .filter(({ poster_path }) => poster_path)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Search;
