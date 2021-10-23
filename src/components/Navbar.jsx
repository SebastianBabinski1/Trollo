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
        >
          Turn back
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
