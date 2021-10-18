import Button from "./Button";
import { TableSVG } from "../svg/TableSVG";

export default function Navbar(props) {
  const leftSide = () => {
    return (
      <>
        <Button buttonClass="flex" svg={TableSVG} text="Trollo">
          <p>Hello</p>
        </Button>
      </>
    );
  };

  return (
    <div className="flex bg-black bg-opacity-50 text-white">
      <div className="flex m-auto opacity-50 hover:opacity-100">
        {leftSide()}
      </div>
    </div>
  );
}
