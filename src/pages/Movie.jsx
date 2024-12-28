import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs";
import { fetchData, formatCurrency } from "../services/api";

const moviesUrl = import.meta.env.VITE_API;
const imageUrl = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetchData(`${moviesUrl}${id}?${apiKey}`);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return null;

  const { poster_path, title, tagline, overview, budget, revenue, runtime } =
    movie;

  return (
    <div className="gap-0 md:gap-6 flex flex-col md:flex-row text-zinc-100 pt-12 p-10">
      <img
        className="w-full md:w-[300px] flex-1 md:flex-none"
        src={`${imageUrl}${poster_path}`}
        alt={title}
      />
      <div className="flex-1">
        <div className="mt-8 md:mt-0 flex flex-col gap-4 flex-1 bg-slate-900 p-4">
          <p>{tagline || "Unknown"}</p>
          <p>{overview || "Unknown"}</p>
        </div>
        <div className="flex-1 mt-5 flex flex-col gap-4 bg-slate-900 p-4">
          {[
            { icon: BsWallet2, label: "Budget", value: formatCurrency(budget) },
            {
              icon: BsGraphUp,
              label: "Revenue",
              value: formatCurrency(revenue),
            },
            {
              icon: BsHourglassSplit,
              label: "Duration",
              value: `${runtime} minutes`,
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="text-yellow-500" />
              <h3>{label}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
