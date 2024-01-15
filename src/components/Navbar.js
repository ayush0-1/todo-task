import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegNoteSticky, FaBarsProgress } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/authSlice";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const handleLogout = async () => {
    await sessionStorage.clear("id");
    await dispatch(logout());
  };

  return (
    <>
      <header className="text-gray-600 bg-gray-100 shadow-lg body-font hidden md:block ">
        <div className="container flex flex-wrap mx-auto p-5 flex-row justify-between">
          <div className="flex justify-items-start">
            <a className="flex title-font font-medium items-center text-gray-900 w-20 mb-4 md:mb-0">
              <span className="ml-3 text-2xl">
                <FaRegNoteSticky />
              </span>
              <span className="ml-3 text-2xl font-bold ">todo</span>
            </a>
          </div>

          <div className=" md:flex  md:inline">
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to={"/"}>
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>

              <Link to={"/aboutUs"}>
                <a className="mr-5 hover:text-gray-900">About Us</a>
              </Link>

              <Link to={"/toDo"}>
                <a className="mr-5 hover:text-gray-900">To Do</a>
              </Link>
            </nav>
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-centertext-white bg-indigo-500 border-0  mx-1 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base mt-4 md:mt-0"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to={"/signIn"}
                  className="inline-flex items-centertext-white bg-indigo-500 border-0 mx-1 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base mt-4 md:mt-0"
                >
                  Sign In
                </Link>
                <Link
                  to={"/signUp"}
                  className="inline-flex items-centertext-white bg-indigo-500 border-0 mx-1  py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base mt-4 md:mt-0"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <header className="text-gray-600 bg-gray-100 shadow-lg body-font md:hidden">
        <div className="container flex flex-wrap mx-auto p-5 flex-row justify-between">
          <div className="flex ">
            <a className="flex title-font font-medium items-center text-gray-900 w-20 mb-4 md:mb-0">
              <span className="ml-3 text-2xl">
                <FaRegNoteSticky />
              </span>
              <span className="ml-3 text-2xl font-bold ">todo</span>
            </a>
          </div>
          <div className="mx-2  text-2xl my-auto">
            <FaBarsProgress
              className={!toggle ? "hidden" : "block "}
              onClick={() => setToggle(false)}
            />
            <VscChromeClose
              className={toggle ? "hidden" : "block "}
              onClick={() => setToggle(true)}
            />
          </div>
        </div>

        <div
          className={
            toggle ? "flex flex-col ml-10 hidden" : "flex flex-col ml-10 block"
          }
        >
          <nav className="flex flex-col items-start   text-base justify-center">
            <Link to={"/"}>
              <a className="mr-5 my-1 hover:text-gray-900">Home</a>
            </Link>
            <Link to={"/aboutUs"}>
              <a className="mr-5 my-1 hover:text-gray-900">About Us</a>
            </Link>
            <Link to={"/toDo"}>
              <a className="mr-5  my-1 hover:text-gray-900">To Do</a>
            </Link>
          </nav>

          <div className="flex">
            <div>
              {isLoggedIn ? (
                <button className=" items-centertext-white bg-indigo-500 border-0 mr-2 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base my-1 ">
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to={"/signIn"}>
                    <button className=" items-centertext-white bg-indigo-500 border-0 mr-2 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base my-1  ">
                      Sign In
                    </button>
                  </Link>
                  <Link to={"signUp"}>
                    <button className=" items-centertext-white bg-indigo-500 border-0 mr-2 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white text-base my-1  ">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
