import { useState, useEffect } from 'react';
import Movies from "./components/Movies";
import Nav from './components/Nav';
import axios from 'axios';

import MovieCard from './components/MovieCard';



const URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDBAPI;

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};



function App() {
  
const [originals, setOriginals] = useState([]);
const [trending, setTrending] = useState([]);
const [nowPlaying, setNowPlaying] = useState([]);
const [popular, setPopular] = useState([]);
const [topRated, setTopRated] = useState([]);
const [upcoming, setUpcoming] = useState([]);

useEffect(() => {
  // Load Originals
  axios
    .get(`${URL}${endpoints.originals}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setOriginals(res.data.results));

  // Get other categories with the same pattern here


  axios
  .get(`${URL}${endpoints.trending}`, {
    params: {
      api_key: API_KEY,
    },
  })
  .then((res) => setTrending(res.data.results));

// Load Now Playing
axios
  .get(`${URL}${endpoints.now_playing}`, {
    params: {
      api_key: API_KEY,
    },
  })
  .then((res) => setNowPlaying(res.data.results));

// Load Popular
axios
  .get(`${URL}${endpoints.popular}`, {
    params: {
      api_key: API_KEY,
    },
  })
  .then((res) => setPopular(res.data.results));

// Load Top Rated
axios
  .get(`${URL}${endpoints.top_rated}`, {
    params: {
      api_key: API_KEY,
    },
  })
  .then((res) => setTopRated(res.data.results));

// Load Upcoming
axios
  .get(`${URL}${endpoints.upcoming}`, {
    params: {
      api_key: API_KEY,
    },
  })
  .then((res) => setUpcoming(res.data.results));

}, []);


  return (
    <>
         
         <Nav />
<MovieCard movie={originals[Math.floor(Math.random() * originals.length)]} />

  <Movies title="Netflix Originals" movies={originals} ></Movies>
  <Movies title="TRENDING" movies={trending} ></Movies>
  <Movies title="NOW PLAYING" movies={nowPlaying} ></Movies>
  <Movies title="POPULAR" movies={popular} ></Movies>
  <Movies title="TOP RATED" movies={topRated} ></Movies>
  <Movies title="UPCOMING" movies={upcoming} ></Movies>


    </>
  );
}
export default App;