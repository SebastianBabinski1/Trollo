import Button from "./Button"
import { HomeSVG } from "../svg/HomeSVG"
import { TableSVG } from "../svg/TableSVG"
import { ViewMoreSVG } from "../svg/ViewMoreSVG"
import { PlusSVG } from "../svg/PlusSVG"
import { InfoSVG } from "../svg/InfoSVG"
import { BellSVG } from "../svg/BellSVG"
import { AdjustmentsSVG } from "../svg/Adjustments"

// This variable should be removed later
const example = 
<div>
    <p>Second modal content was injected as element</p>
</div>

const leftSideContent = 
    <>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={ViewMoreSVG} modalTitle="First modal" modalContent="First button was clicked"/>
        </div>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={HomeSVG} modalTitle="Second modal" modalContent={example}/>
        </div>
        <div>
            <Button spanClass="pl-1" buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={TableSVG} text="Tables"/>
        </div>
    </>

const middleContent = 
    <>
        <Button buttonClass="flex" svg={TableSVG} text="Trollo"/>
    </>

const rightSideContent = 
    <>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={PlusSVG}/>
        </div>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={InfoSVG}/>
        </div>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={BellSVG}/>
        </div>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={AdjustmentsSVG}/>
        </div>
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