import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { searchMoives } from '../Service/service';
import { useState } from 'react';
import { Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Loading from '../components/Loading';

export default function Searchresult() {
  const [Movies, setMovies] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    const searchResults = async () => {
      setLoading(true);
      try {
        const response = await searchMoives(query, currentPage);
        console.log(response.data.Search);
        setMovies(response.data.Search || []);
        setTotalPages(Math.ceil(response.data.totalResults / 10));
        // Assuming 10 results per page
      } catch (error) {
        console.log('search error: ', error);
      } finally {
        setLoading(false);
      }
    };
    searchResults();
  }, [query, currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h2 className="mt-2 ml-2">
        Search Results for: <span className="text-black-700">{query}</span>
      </h2>

      {loading ? (
        <Loading />
      ) : Movies.length === 0 ? (
        <div className="p-4 text-center text-red-600 text-xl">
          No results found for: <strong>{query}</strong>
        </div>
      ) : (
        <>
          <h3 className="mt-2 ml-2">Explore Movies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {Movies.map(movie => (
              <Card
                key={movie.imdbID}
                hoverable
                cover={
                  <div className="relative">
                    <Link to={`/movie/${movie.imdbID}`}>
                      <img
                        alt={movie.Title}
                        src={
                          movie.Poster !== 'N/A'
                            ? movie.Poster
                            : 'https://via.placeholder.com/150'
                        }
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </Link>
                    <HeartOutlined className="text-white text-2xl absolute top-2 right-2" />
                  </div>
                }
              >
                <Link
                  to={`/movie/${movie.imdbID}`}
                  className="text-decoration-none"
                >
                  <Card.Meta
                    title={movie.Title}
                    description={`Year: ${movie.Year}`}
                  />
                </Link>
              </Card>
            ))}
          </div>

          <footer className="flex justify-center my-4">
            <Pagination
              current={currentPage}
              total={totalPages * 10}
              onChange={handlePageChange}
            />
          </footer>
        </>
      )}
    </div>
  );
}
