import Button from "./Button"
import { HomeSVG } from "../svg/HomeSVG"
import { TableSVG } from "../svg/TableSVG"
import { ViewMoreSVG } from "../svg/ViewMoreSVG"
import { PlusSVG } from "../svg/PlusSVG"
import { InfoSVG } from "../svg/InfoSVG"
import { BellSVG } from "../svg/BellSVG"
import { AdjustmentsSVG } from "../svg/Adjustments"

const leftSideContent = 
    <>
      <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={ViewMoreSVG}/>
      <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={HomeSVG}/>
      <Button spanClass="pl-1" buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={TableSVG} text="Tablice"/>
    </>

const middleContent = 
    <>
        <Button buttonClass="flex" svg={TableSVG} text="Trollo"/>
    </>

const rightSideContent = 
<>
    <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={PlusSVG}/>
    <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={InfoSVG}/>
    <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={BellSVG}/>
    <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={AdjustmentsSVG}/>
</>

export default function Navbar(props){
    return(
        <div class="flex bg-black bg-opacity-50 text-white">
            <div class="flex">{leftSideContent}</div>
            <div class="flex m-auto opacity-50 hover:opacity-100">{middleContent}</div>
            <div class="flex">{rightSideContent}</div>
        </div>
    )
}