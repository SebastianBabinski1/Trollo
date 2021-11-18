import React from "react";
import { useState } from "react/cjs/react.development";
import { handleButtons } from "../UserSelection";

const SidebarNav = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`absolute z-10 transition duration-500 ease-in-out transform ${
        active ? `translate-x-0` : `-translate-x-full`
      }
        }`}
    >
      <div className="bg-black bg-opacity-50">
        <p className="text-center p-1 text-white">Change user</p>
        <div className="rounded-md bg-white p-1 ">
          {handleButtons(
            props.users,
            props.setChoosedUser,
            props.setUserSelection
          )}
        </div>
      </div>
      <button
        className="text-white absolute -right-6 top-0"
        onClick={() => setActive(!active)}
      >
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-black bg-opacity-50 rounded-r-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SidebarNav;
