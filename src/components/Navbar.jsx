import { NavLink } from 'react-router-dom';

function APPNavbar() {
  return (
    <nav className="bg-dark p-4 flex items-center gap-4">
      
      <h1 className="text-3xl text-white  font-bold">Movie Time</h1>
      <NavLink to="/" className="text-white !no-underline">
        Home
      </NavLink>
      <NavLink to="/movies" className="text-white !no-underline">
        Movies
      </NavLink>
      <NavLink to="/favorite" className="text-white !no-underline">
        Favorite
      </NavLink>
    </nav>
  );
}

export default APPNavbar;
