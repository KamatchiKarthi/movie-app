import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'antd';
import { fetchMovies } from '../Service/service';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { Pagination } from 'antd';

export default function MovieCard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  // Memoized fetch function to prevent unnecessary recreations
  const fetchMovieData = useCallback(async () => {
    // const keywords = [];
    setLoading(true);

    try {
      const response = await fetchMovies('war', 'movie', currentPage);
      console.log('Fetched movies:', response);
      setMovies(response.data.Search || []);
      setTotalPages(Math.ceil(response.data.totalResults / 10)); // Assuming 10 results per page
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    fetchMovieData();
  }, [currentPage, fetchMovieData]);

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="bg-gray-100 min-h-screen">
            <h3 className="mt-2 ml-2">Explore Movies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {movies.map(movie => (
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
          </div>
          <footer className="flex justify-center my-4">
            <Pagination
              disabled={false}
              current={currentPage}
              total={totalPages * 10}
              // pageSize={10}
              onChange={handlePageChange}
            />
          </footer>
        </div>
      )}
    </div>
  );
}
