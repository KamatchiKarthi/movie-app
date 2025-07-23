import React from 'react';
import { fetchMovieById } from '../Service/service';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import Loading from '../components/Loading';

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetailCard, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoviedetails = async () => {
      try {
        const responseDetails = await fetchMovieById(id);

        if (responseDetails.status === 200) {
          setMovieDetails(responseDetails.data);
          console.log(responseDetails.data);
        } else {
          console.error(
            'Failed to fetch movie details:',
            responseDetails.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviedetails();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              {/* Movie Header */}
              <div className="md:flex">
                {/* Poster Image */}
                <div className="md:w-1/3">
                  <img
                    className="w-full h-full object-cover"
                    src={
                      movieDetailCard.Poster !== 'N/A'
                        ? movieDetailCard.Poster
                        : 'https://via.placeholder.com/300x450'
                    }
                    alt={movieDetailCard.Title}
                  />
                </div>

                {/* Movie Info */}
                <div className="p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {movieDetailCard.Title}
                    </h1>
                    <button className="text-red-500 hover:text-red-700 focus:outline-none">
                      <HeartOutlined className="text-2xl" />
                    </button>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                      {movieDetailCard.Year}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                      {movieDetailCard.Rated || 'N/A'}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                      {movieDetailCard.Runtime || 'N/A'}
                    </span>
                    {movieDetailCard.imdbRating && (
                      <span className="flex items-center ml-auto">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-900 font-bold">
                          {movieDetailCard.imdbRating}/10
                        </span>
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6">{movieDetailCard.Plot}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">
                        Director
                      </h3>
                      <p className="text-gray-900">
                        {movieDetailCard.Director || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">
                        Writer
                      </h3>
                      <p className="text-gray-900">
                        {movieDetailCard.Writer || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">
                        Actors
                      </h3>
                      <p className="text-gray-900">
                        {movieDetailCard.Actors || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">
                        Genre
                      </h3>
                      <p className="text-gray-900">
                        {movieDetailCard.Genre || 'N/A'}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">
                      Awards
                    </h3>
                    <p className="text-gray-900">
                      {movieDetailCard.Awards || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Section */}
              <div className="bg-gray-50 px-8 py-6">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-500">
                      Language
                    </h3>
                    <p className="text-gray-900">
                      {movieDetailCard.Language || 'N/A'}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-500">
                      Country
                    </h3>
                    <p className="text-gray-900">
                      {movieDetailCard.Country || 'N/A'}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                    <h3 className="text-sm font-semibold text-gray-500">
                      Box Office
                    </h3>
                    <p className="text-gray-900">
                      {movieDetailCard.BoxOffice || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
