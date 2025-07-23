import React from 'react';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favouite from './pages/Favouite';
import APPNavbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Searchresult from './pages/Searchresult';

export default function App() {
  return (
    <div>
      <APPNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieCard />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorite" element={<Favouite />} />
        <Route path="/searchresult" element={<Searchresult />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
