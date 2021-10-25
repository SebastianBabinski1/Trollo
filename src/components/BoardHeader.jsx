import Button from "./Button";
import { TableSVG } from "../svg/TableSVG";

export default function BoardHeader(props) {
  return (
    <>
      <div className="flex bg-black bg-opacity-50 text-white">
        <Button
          buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10"
          svg={TableSVG}
          text="Table"
        />
        <span className="self-center font-bold">{props.tableName}</span>
      </div>
    </>
  );
}
