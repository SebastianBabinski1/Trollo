import React from "react";
import { useState } from "react/cjs/react.development";

const SidebarNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`flex text-white transition duration-500 ease-in-out transform ${
        active ? `translate-x-10` : null
      }`}
    >
      <div className="bg-black bg-opacity-50 w-full">
        <p className="text-center p-1">Hello</p>
      </div>
      <button onClick={() => setActive(!active)}>
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SidebarNav;
