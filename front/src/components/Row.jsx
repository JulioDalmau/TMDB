import axios from "axios";
import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export const Row = ({ title, fetchURL, rowID }) => {
  const [movAndTv, setmovAndTv] = useState([]);

  useEffect(() => {
    const fetchDataMovAndTv = async () => {
      const res = await axios.get(fetchURL);
      setmovAndTv(res.data.results);
    };

    fetchDataMovAndTv();
  }, [fetchURL]);

  const moviesAndTv = movAndTv.map((item, id) => (
    <Movie key={id} item={item} />
  ));

  const handleClickLeft = () => {
    let scroll = document.getElementById("scroll" + rowID);
    scroll.scrollLeft = scroll.scrollLeft - 500;
  };
  const handleClickRight = () => {
    let scroll = document.getElementById("scroll" + rowID);
    scroll.scrollLeft = scroll.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <AiOutlineLeft
          onClick={handleClickLeft}
          className="text-white text-4xl left-0  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"scroll" + rowID}
          className="w-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative"
        >
          {moviesAndTv}
        </div>
        <AiOutlineRight
          onClick={handleClickRight}
          className="text-white text-4xl right-0  absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};
