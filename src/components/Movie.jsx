import React, { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const Movie = ({ item, id }) => {
  const [favourite, setFavourite] = useState(false);
  const { user } = UserAuth();

  return (
    <div
      key={id}
      className="w-40 sm:w-52 md:w-60 lg:w-72 inline-block relative p-2 cursor-pointer"
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p className="absolute top-4 left-4 text-gray-300">
          {favourite ? <BsStarFill /> : <BsStar />}
        </p>
      </div>
    </div>
  );
};
