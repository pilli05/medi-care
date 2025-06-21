import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        email,
        role,
        password,
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/users/signup",
        payload
      );
      if (response.status === 201) {
        setName("");
        setEmail("");
        setRole("");
        setPassword("");
        toast.success("User created successfully");
        navigate("/login");
      } else {
        toast.error("User already exists");
      }
    } catch (err) {
      toast.error("User already exists");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen">
      <img
        src="/src/assets/hospital-bg.jpg"
        className="absolute h-screen w-screen blur-[2px]"
      />
      <div className="flex justify-center items-center h-screen">
        <form
          className="border border-white w-full md:w-1/3 p-10 rounded-lg text-white z-50"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-2xl font-semibold">Welcome</h1>
          <div className="mt-10">
            <div className="mb-4">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                className="border border-white outline-none rounded w-full pl-2 p-1 mt-2"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-4">
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role">
                Role <span className="text-red-500">*</span>
              </label>
              <br />
              <select
                name="role"
                id="role"
                className="border border-white outline-none  rounded w-full pl-2 p-1 mt-2"
                required
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="" disabled className="text-black">
                  Select
                </option>
                <option value="patient" className="text-black">
                  Patient
                </option>
                <option value="careTaker" className="text-black">
                  Care Taker
                </option>
              </select>
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black p-2 rounded w-full mt-3 mb-5 text-sm font-[500] cursor-pointer"
            >
              Sign Up
            </button>
            <p className="text-center text-black">
              Already have an account?
              <Link to="/login" className="text-white cursor-pointer ml-2">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
