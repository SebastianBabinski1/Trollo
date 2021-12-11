import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../img/warning.png";

const Page404 = () => {
  return (
    <div className="w-1/2 h-1/2 m-auto rounded-md bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex items-center">
        <p className="font-bold text-6xl m-2 text-gray-600">404</p>
        <img
          className="w-8 h-8 mt-2 opacity-70"
          src={errorImage}
          alt="warning"
        />
      </div>
      <p className="font-bold text-xl pb-2 text-gray-600">NOT FOUND</p>
      <p className="pb-2 text-gray-600">
        The resource requested could not be found on this server :(
      </p>
      <Link
        className="hover:shadow-md rounded-md px-1 text-gray-600 cursor-pointer"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Page404;
