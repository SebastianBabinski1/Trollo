import React, { useState } from "react";
import TrashButton from "./TrashButton";

const User = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative flex rounded-md hover:bg-gray-200"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <button
        onClick={() => {
          props.setChoosedUser({
            userID: props.user.userID,
            name: props.user.name,
            avatar: props.user.avatar,
          });
          props.setUserSelection(false);
        }}
        className="p-4 mx-auto flex"
      >
        <img alt="user" src={props.user.avatar} className="w-16 rounded-full" />
        <p className="my-auto mx-4 text-xl">{props.user.name}</p>
      </button>
      {props.handleRemovingUser && hover ? (
        <TrashButton
          handleRemovingUser={props.handleRemovingUser}
          userID={props.user.userID}
        />
      ) : null}
    </div>
  );
};

export default User;
