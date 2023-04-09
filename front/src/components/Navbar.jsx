import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import star from "../assets/starburst.png" 

export const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    

    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <div className="backdrop-saturate-50"></div>
        <h1 className="text-blue-800 font-bold text-4xl md:text-6xl cursor-pointer drop-shadow-2xl">
         <img src={star} alt="logo" width="150vh"/>
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/myaccount">
            <button className="text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer mx-2">
              My Account
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer"
          >
            LOG OUT
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer mx-2">
              Sign in
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-neutral-700 font-semibold px-1 md:px-6 py-2 rounded cursor-pointer">
              SIGN UP
            </button>
          </Link>
        </div>
      )}
    </div>


  );
};
