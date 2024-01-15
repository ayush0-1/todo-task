import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, inputs)
      .then((res) => {
        if (res.data.message === "Sign up successful") {
          toast.success(res.data.message);
          navigateTo("/signIn");
        } else {
          toast.error("User already exists");
        }
      });
    // console.log(inputs);

    setInputs({ email: "", username: "", password: "" });
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="w-4/5 md:w-1/2 mx-auto justify-center bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>

            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 "
              />
            </div>
            <div className="relative mb-4">
              <label for="username" className="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                value={inputs.username}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={inputs.password}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleClick}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
