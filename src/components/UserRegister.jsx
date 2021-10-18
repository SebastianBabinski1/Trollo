import React from "react";
import { useState } from "react/cjs/react.development";

const UserRegister = (props) => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState({
    active: false,
    src: "",
  });

  const handleSubmit = (event) => {
    if ((value === "") | (image.src === "")) {
      alert("Please choose name and image");
    } else {
      props.updateUsers(value, image.src);
      setValue("");
      setImage({ active: false, src: "" });
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChoose = (src) => {
    setImage({ active: true, src: src });
  };

  const Avatar = (props) => {
    return (
      <img
        alt="Farmer"
        src={props.src}
        className={`w-24 rounded-full hover:bg-gray-300 m-4 ${
          image.active === true && image.src === props.src
            ? "bg-white ring-2 ring-black"
            : null
        }`}
        onClick={() => handleChoose(props.src)}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col items-center m-4 bg-white border-2 border-gray-500 rounded-md p-2 bg-opacity-80">
        <p className="text-lg mt-2">
          You dont have an account yet? Please type your name and choose avatar:
        </p>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          className="w-1/3 m-4 border-2 border-gray-400 rounded-md px-2 py-1"
          placeholder="Your name..."
        />
        <div className="flex">
          <Avatar src="https://cdn-icons.flaticon.com/png/512/3445/premium/3445119.png?token=exp=1634287113~hmac=8cd92ba22feac2a46dee51bd4a1bbe6e" />
          <Avatar src="https://cdn-icons.flaticon.com/png/512/2138/premium/2138230.png?token=exp=1634398172~hmac=444077912c2ac95d50c5e929947686fa" />
          <Avatar src="https://cdn-icons-png.flaticon.com/512/949/949635.png" />
          <Avatar src="https://cdn-icons.flaticon.com/png/512/2295/premium/2295142.png?token=exp=1634398249~hmac=d4d6d7592fc919c5ff685ab78e89a4f1" />
        </div>
      </label>
    </form>
  );
};

export default UserRegister;
