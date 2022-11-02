import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.ceil(Math.random() * movies.length)];
  const pathMovie = "https://image.tmdb.org/t/p/original";

  //   const movie1 = movies[Math.ceil(Math.random() * movies.length)];
  //   const movie2 = movies[Math.ceil(Math.random() * movies.length)];
  //   const movie3 = movies[Math.ceil(Math.random() * movies.length)];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.requestMoviePopular);
      setMovies(res.data.results);
    };

    fetchData();
  }, []);
    console.log(movie);
  const truncateOverview = (str, num) => {
    return str?.length > num ? `${str.slice(0, num)}...` : str;
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`${pathMovie}${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-40 p-4 md:p-8">
          <h1 className="text-2xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-500">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-md lg:max-lg xl:max-xl text-gray-200">
            {truncateOverview(movie?.overview, 130)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
