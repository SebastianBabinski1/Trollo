import Button from "./Button";
import { TableSVG } from "../svg/TableSVG";

const Navbar = (props) => {
  const userContent = () => {
    return (
      <div className="flex pr-2">
        <img alt="avatar" src={props.userContent.avatar} className="w-10" />
        <p className="my-auto">{props.userContent.name}</p>
      </div>
    );
  };

  return (
    <div className="flex bg-black bg-opacity-50 text-white">
      {props.setUserSelection ? (
        <button
          onClick={() => {
            props.setUserSelection(true);
          }}
          className="ml-2"
        >
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
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      ) : null}

      <div className="flex m-auto opacity-50 hover:opacity-100">
        <Button buttonClass="flex" svg={TableSVG} text="Trollo" />
      </div>
      {props.userContent ? userContent() : null}
    </div>
  );
};

export default Navbar;
