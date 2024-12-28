import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="flex justify-between items-center pt-8 px-8">
      <h2 className="text-yellow-500">
        <Link className="flex gap-3 items-center text-2xl" to="/">
          <BiCameraMovie className="text-3xl" /> Movie Hub
        </Link>
      </h2>
      <form className="flex items-center gap-3" onSubmit={handleSubmit}>
        <input
          className="pl-3 py-1 rounded outline-none bg-gray-100"
          type="text"
          placeholder="Search a movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BiSearchAlt2 className="text-yellow-500 text-3xl" />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
