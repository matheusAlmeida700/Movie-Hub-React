import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, showLink = true }) => {
  const imageUrl = import.meta.env.VITE_IMG;
  const { poster_path, title, vote_average, id } = movie;

  return (
    <div className="p-3 w-[330px] md:max-w-[280px] h-[600px] md:h-[510px] text-zinc-200 my-4 flex flex-col justify-between bg-gray-900 overflow-hidden">
      <img
        className="self-center px-1 md:px-3"
        src={`${imageUrl}${poster_path}`}
        alt={title}
      />
      <div className="pl-3">
        <h2 className="text-lg mt-2">{title}</h2>
        <p className="flex items-center gap-2 mb-4">
          <FaStar className="text-yellow-600" /> {vote_average.toFixed(2)}
        </p>
      </div>
      {showLink && (
        <Link
          className="flex w-full justify-center bg-yellow-500 py-1.5 px-4 text-zinc-900 font-semibold border-transparent border-2 hover:bg-transparent hover:text-white hover:border-yellow-500 transition-colors"
          to={`/movie/${id}`}
        >
          Details
        </Link>
      )}
    </div>
  );
};

export default MovieCard;