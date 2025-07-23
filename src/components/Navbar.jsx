import { NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { TbCategoryPlus } from 'react-icons/tb';
import { RiMovie2AiFill } from 'react-icons/ri';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function APPNavbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    e.preventDefault();

    console.log('Search term:', searchTerm);
    if (searchTerm.trim()) {
      navigate(`/searchresult?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the search input after submission
    }
  }
  return (
    <nav className="bg-black p-3 flex items-center">
      <h1 className="text-3xl w-1/3 flex items-center gap-2 text-white  font-bold">
        Movie Time
        <RiMovie2AiFill />
      </h1>
      <div className="flex  w-1/3 items-center gap-5 justify-center">
        <NavLink to="/" className="text-white text-2xl !no-underline">
          Home
        </NavLink>
        <NavLink to="/movies" className="text-white text-2xl !no-underline">
          Movies
        </NavLink>
        <NavLink to="/favorite" className="text-white text-2xl !no-underline">
          Favorite
        </NavLink>
      </div>
      <div className="w-1/3 flex gap-5 items-center">
        <form
          onSubmit={handleSearch}
          className="flex items-center w-1/2 bg-gray-200 rounded p-2"
        >
          <CiSearch className="text-2xl text-gray-500 mr-2" />
          <input
            type="search"
            placeholder="Search…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-gray-800 focus:outline-none"
          />
        </form>
        <TbCategoryPlus className="text-2xl text-white" />
      </div>
    </nav>
  );
}

export default APPNavbar;
