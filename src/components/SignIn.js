import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, setId } from "../utils/authSlice";

const SignIn = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/signin`, inputs)
      .then(async (res) => {
        if (res.data.message === "Login Successful") {
          await sessionStorage.setItem("id", res.data._id);
          dispatch(login());
          dispatch(setId(res.data._id));
          toast.success("Logged In");
          navigateTo("/toDo");
        } else if (res.data.message === "Please Sign Up First") {
          toast.error("Please Sign Up First");
          navigateTo("/signUp");
        } else if (res.data.message === "Password Is Not Correct") {
          toast.error("Password Is Not Correct");
        } else {
          toast("User already exists");
          navigateTo("/signIn");
        }
      });

    setInputs({ email: "", password: "" });
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="w-4/5 md:w-1/2 mx-auto justify-center bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign In
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleClick}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
