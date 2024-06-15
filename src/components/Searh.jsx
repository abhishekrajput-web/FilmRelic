import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Searh = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
   const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchedMovie}`);
  }

  return (
    <div className="flex-none gap-2">
    <form className="form-control" onSubmit={handleSearch}>
    <input type="text" placeholder="search..." value={searchedMovie} onChange={(e) => setSearchedMovie(e.target.value)} className="w-full max-w-xs rounded-lg px-4 py-2 outline-none focus-within:bg-slate-800" />
    </form>
  </div>
  )
}

export default Searh;