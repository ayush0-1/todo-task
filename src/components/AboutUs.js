import React from "react";
const png = require("../profile.png");

const AboutUs = () => {
  return (
    <>
      <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col text-gray-600 body-font">
        <img
          class="xl:w-1/6 lg:w-1/6 md:w-1/6 w-1/6 block mx-auto mb-10 object-cover object-center rounded"
          alt="hero"
          src={png}
        />
        <div class="flex flex-col text-center w-full">
          <h1 class="text-xl font-medium title-font mb-4 text-gray-900">
            Ayush Tiwari
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            I am a recent B.Tech Graduate, my passion lies in web development. I
            have hands-on experience in building dynamic web applications using
            React.js and Node.js. I've created a YouTube clone, a Newsletter Web
            Application, and a Netflix clone, showcasing my skills in front-end
            and back-end development. I'm also a problem-solving enthusiast,
            having solved 700+ DSA problems on LeetCode. As the Head of Web
            Development for AEROCLUB, I led the development of a BLOG WEB APP.
            I'm ready to bring my technical expertise and creative
            problem-solving skills to a software engineering role.
          </p>
        </div>
      </div>

      <div class="container px-5  justify-center w-full  mx-auto flex flex-wrap flex-col text-gray-600 body-font">
        <h1 className=" mx-auto font-medium title-font text-gray-900 mb-1 text-xl">
          Education
        </h1>
      </div>

      <div class="container  px-5 py-24 mx-auto flex flex-wrap text-gray-600 body-font">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Harcourt Butler Technical University
              </h2>
              <p class="leading-relaxed">
                Bachelor of Technology | Aug. 2019 – May 2023 | Kanpur, U.P.
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Jawahar Navodaya Vidyalaya
              </h2>
              <p class="leading-relaxed">
                Intermediate | May 2018 | Kannauj, U.P.
              </p>
            </div>
          </div>
        </div>
        <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            3
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">
                Jawahar Navodaya Vidyalaya
              </h2>
              <p class="leading-relaxed">
                High School | May 2016 | Kannauj, U.P.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container w-4/5 px-5  mx-auto text-gray-600 body-font">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Self Learning Projects
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Blog Web App
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  • Built and deployed BLOG WEB APP for to access blogs.
                </p>
                <p class="leading-relaxed text-base">
                  • Used EJS view engine for templating and enabled custom
                  routes for every post.
                </p>
                <p class="leading-relaxed text-base">
                  • Built back-end using NODE.JS and EXPRESS.JS and stored data
                  of users and posts on MongoDB ATLAS using MONGOOSE.
                </p>
                <p class="leading-relaxed text-base">
                  • Implemented login/register, sign in with Google
                  functionality for restricting only to composers using local
                  strategy and Google OAuth by passport.Js.
                </p>

                <a
                  href={"https://aeroclub-blogs-ek7f.onrender.com"}
                  target="_blank"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Live App Link
                </a>
                <br />
                <a
                  href={"https://github.com/ayush0-1/AeroClub-Blogs"}
                  target="_blank"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  My-YouTube App
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  • Created single page web app with home, watch, and search
                  results components routed using react-router-dom.
                </p>
                <p class="leading-relaxed text-base">
                  • Implemented search facility and search suggestions using
                  YouTube suggestions API and optimized network calls using
                  Debouncing and Caching.
                </p>
                <p class="leading-relaxed text-base">
                  • Built comments section adaptable up to Nth-level nesting,
                  Live Chat simulation that displays fetched/posted chats in a
                  live environment, and managed chat data to avoid Rendering
                  Bottlenecks.
                </p>

                <a
                  href={"https://github.com/ayush0-1/My-YouTube"}
                  target="_blank"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Netflix Clone
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  • Created dynamic Netflix front-end clone using HTML, CSS,
                  JavaScript.
                </p>
                <p class="leading-relaxed text-base">
                  • Used reusable function which builds Banner and Movies
                  section from data fetched from TMDB API.
                </p>
                <p class="leading-relaxed text-base">
                  • Used YouTube Data API v3 for fetching data from YouTube and
                  embedded it in movie sections which can be played on hover.
                </p>

                <br />
                <br />
                <br />

                <a
                  href={"https://ayush0-1.github.io/Netflix-clone/"}
                  target="_blank"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Live App Link
                </a>
                <br />
                <a
                  href={"https://github.com/ayush0-1/Netflix-clone"}
                  target="_blank"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Technical Skills
            </h1>
          </div>

          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">HTML </span>
              </div>
            </div>{" "}
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">CSS </span>
              </div>
            </div>{" "}
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">JavaScript </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">React.js </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">EJS </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Node.js </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Express.js </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">MongoDB </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Mongoose </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">MySql </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Tailwind CSS </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/4 w-full">
              <div class="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium">Redux Toolkit </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" mx-auto text-gray-600 body-font">
        <div class=" px-auto py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center justify-center">
            <div class="p-4 sm:w-1/4 w-1/3">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                @
              </h2>
              <p class="leading-relaxed">striver9ayush@gmail.com</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/3">
              <a
                href="https://www.linkedin.com/in/ayushtiwari01/"
                target="_blank"
              >
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  .in
                </h2>
                <p class="leading-relaxed">ayushtiwari01</p>
              </a>
            </div>

            <div class="p-4 sm:w-1/4 w-1/3 FLEX CLEX-COL">
              <a href="https://github.com/ayush0-1">
                <svg
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>

                <p class="leading-relaxed" target="_blank">
                  ayush0-1
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// frontend\public\profile.png.jpg
export default AboutUs;
