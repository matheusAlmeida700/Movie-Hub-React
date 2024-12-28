import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchData } from "../services/api";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const data = await fetchData(`${moviesUrl}top_rated?${apiKey}`);
      setTopMovies(data?.results || []);
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-2xl text-zinc-50 py-10">Top Rated Movies</h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-0 md:gap-10">
        {topMovies.length === 0 ? (
          <p>Loading...</p>
        ) : (
          topMovies
            .filter(({ poster_path }) => poster_path)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default Home;
