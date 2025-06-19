import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen">
      <img
        src="/src/assets/hospital-bg.jpg"
        className="absolute h-screen w-screen blur-[2px]"
      />
      <div className="flex justify-center items-center h-screen">
        <form
          className="border border-white w-full md:w-1/3 p-10 rounded-lg text-white z-50"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl font-semibold">Welcome Back</h1>
          <div className="mt-10">
            <div className="mb-5">
              <label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="border border-white outline-none rounded w-full pl-2 p-1 mt-2"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className="border border-white outline-none rounded w-full pl-2 p-1 mt-2"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black p-2 rounded w-full mt-3 mb-5 text-sm font-[500] cursor-pointer"
            >
              Login
            </button>
            <p className="text-center text-black">
              Don't have an account?
              <Link to="/signup" className="text-white cursor-pointer ml-2">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
