import React from "react";
import Favorites from "../components/Favorites";
import favoriteImg from "../statics/favorites.png";


const MyAccount = () => {
  return (
    <>
      <div>
        <img
          clasName="w-full h-[300px] object-cover"
          src={favoriteImg}
          alt="favorites"
        />
      </div>
      <div className="absolute top-[30%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-bold text-white">
          My Account
        </h1>
      </div>
      <Favorites /> 
    </>
  );
};

export default MyAccount;
