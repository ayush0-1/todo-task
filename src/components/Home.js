import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-gray-600 body-font my-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl md:text-6xl font-medium title-font mb-4 text-gray-900">
            Organise Your Work & Life
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-2xl">
            "Empower Your Day: Achieve More with <b>todo</b> - Your Ultimate
            Todo Companion!"
          </p>
        </div>
        <Link to={'/toDo'}>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Create Todo List
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
