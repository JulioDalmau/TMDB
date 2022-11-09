import React from "react";
import signupImg from "../statics/signupsignin.png";

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={signupImg}
          alt="signup background"
        />
        <div className="fixed w-full px-4  py-24 z-50">
          <div className="max-w-[600px] h-[350px] mx-auto my-40 bg-black/80 text-white rounded">
            <div className="px-16 mx-auto py-10">

            <h1 className="text-2xl font-bold">Sign Up</h1>
            <form className="w-full flex flex-col py-5">
                <input className='my-2 p-3' type="email" placeholder="Email" autoComplete="email"/>
                <input className='my-2 p-3' type="password" placeholder="Password" autoComplete="current-password"/>
                <button className="text-white bg-neutral-700 font-semibold px-1 md:px-6 w-full py-3 rounded cursor-pointer my-6">SIGN UP</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
