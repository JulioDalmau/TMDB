import React from "react";
import { Link, useNavigate, Typography, styled } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {AppBar, Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
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





// const [anchorElNav, setAnchorElNav] = React.useState(null);
// const [anchorElUser, setAnchorElUser] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };
  return (
    
    <AppBar>
      <Toolbar color="black">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          ></IconButton>

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
    </Toolbar>
            </AppBar>

     

  );
};
