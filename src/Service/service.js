import axios from 'axios';

const API_KEY = '4ddbe638';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchterm = '', type, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${searchterm}&type=${type}&page=${page}`
    );
    return response;
  } catch (error) {
    console.log('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (searchterm, type) => {
  try {
    const responsedetails = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${searchterm}&type=${type}`
    );
    return responsedetails;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieById = async id => {
  try {
    const reponseId = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return reponseId;
  } catch (error) {
    console.log('Error fetching movie by ID:', error);
    throw error;
  }
};

export const searchMoives = async (searchterm, page) => {
  try {
    const responsemovies = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${searchterm}&page=${page}`
    );
    return responsemovies;
  } catch (error) {
    console.log('Error searching movies:', error);
    throw error;
  }
};
