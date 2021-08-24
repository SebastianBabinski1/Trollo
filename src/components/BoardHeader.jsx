import Button from "./Button"
import { TableSVG } from "../svg/TableSVG"

export default function BoardHeader(props){
    return(
        <>
            <div class="flex bg-black bg-opacity-50 text-white">
                <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={TableSVG} text="Table"/>
                <span class="self-center font-bold">{props.tableName}</span>
                <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" text={props.tableName}/>
                <Button spanClass="pl-1" buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" text="Invite"/>
            </div>
        </>
    )
}