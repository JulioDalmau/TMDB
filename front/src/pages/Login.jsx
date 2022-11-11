import React, { useState } from "react";
import signupImg from "../statics/signup.PNG";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, Password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleError = error ? (
    <p className="p-1 text-center bg-red-500">{error}</p>
  ) : null;

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={signupImg}
          alt="signup background"
        />
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[600px] h-[350px] mx-auto my-44 bg-black/80 text-white rounded">
            <div className="px-16 mx-auto py-10">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-5"
              >
                <input
                  onChange={handleChangeEmail}
                  className="my-2 p-3 text-black"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={handleChangePassword}
                  className="my-2 p-3 text-black"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                {handleError}
                <button className="text-white bg-neutral-700 font-semibold px-1 md:px-6 w-full py-3 rounded cursor-pointer my-6">
                  SIGN IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
