import React from "react";
import register from "../../img/register.png";
import idea from "../../img/idea.png";
import done from "../../img/done.png";
import change from "../../img/change.png";

const Steps = () => {
  return (
    <div className="bg-white rounded-md h-full flex flex-col justify-center">
      <div className="flex m-2 p-2 items-center">
        <img src={register} alt="register" className="w-1/2 pr-2" />
        <p>Register</p>
      </div>
      <div className="flex m-2 p-2 items-center">
        <img src={change} alt="change" className="w-1/2 pr-2" />
        <p>Switch between tables</p>
      </div>
      <div className="flex m-2 p-2 items-center">
        <img src={idea} alt="idea" className="w-1/2 pr-2" />
        <p>Plan your workflow</p>
      </div>
      <div className="flex m-2 p-2 items-center">
        <img src={done} alt="done" className="w-1/2 pr-2" />
        <p>Complete tasks</p>
      </div>
    </div>
  );
};

export default Steps;
