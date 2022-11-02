import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie1 = movies[Math.ceil(Math.random() * movies.length)];
  const movie2 = movies[Math.ceil(Math.random() * movies.length)];
  const movie3 = movies[Math.ceil(Math.random() * movies.length)];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(requests.requestMoviePopular);
      console.log(res);
      setMovies(res.data.results);
    };

    fetchData();
  }, []);
  console.log(movie1);

  return (
    <div className="w-full h-[550px] text-white">
      {/* <div className="w-full h-full"> */}
      <div className="grid grid-cols-3 gap-1">
        {/* <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        /> */}
        <img
          className="w-[550px] h-[800px] object-cover"
          src={`https://image.tmdb.org/t/p/original${movie1?.poster_path}`}
          alt={movie1?.title}
        />
        <img
          className="w-[550px] h-[800px] object-cover"
          src={`https://image.tmdb.org/t/p/original${movie2?.poster_path}`}
          alt={movie2?.title}
        />
        <img
          className="w-[550px] h-[800px] object-left-top"
          src={`https://image.tmdb.org/t/p/original${movie3?.poster_path}`}
          alt={movie3?.title}
        />
        
        
      </div>
    </div>
  );
};

export default Main;
