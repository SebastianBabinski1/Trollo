import Button from "./Button"
import { HomeSVG } from "../svg/HomeSVG"
import { TableSVG } from "../svg/TableSVG"
import { ViewMoreSVG } from "../svg/ViewMoreSVG"
import { PlusSVG } from "../svg/PlusSVG"
import { InfoSVG } from "../svg/InfoSVG"
import { BellSVG } from "../svg/BellSVG"
import { AdjustmentsSVG } from "../svg/Adjustments"
import ModalHeader from "./Modal/ModalHeader"
import ModalBody from "./Modal/ModalBody"
import Modal from "./Modal/Modal"

const leftSideContent = 
    <>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={ViewMoreSVG} >
                <Modal>
                    <ModalHeader>
                        <p>This is modal header</p>
                    </ModalHeader>
                    <ModalBody>
                        <p>This is modal body</p>
                    </ModalBody>
                </Modal>
            </Button>
        </div>
        <div>
            <Button buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={HomeSVG}>
                <Modal>
                    <ModalHeader>
                        <p>Hello</p>
                    </ModalHeader>
                    <ModalBody>
                        <p>World</p>
                    </ModalBody>
                </Modal>
            </Button>
        </div>
        <div>
            <Button spanClass="pl-1" buttonClass="flex p-1 m-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-10" svg={TableSVG} text="Tables">
            <Modal>
                    <ModalHeader>
                        <p>123</p>
                    </ModalHeader>
                    <ModalBody>
                        <p>456</p>
                    </ModalBody>
                </Modal>
            </Button>
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
        <div className="flex bg-black bg-opacity-50 text-white">
            <div className="flex">{leftSideContent}</div>
            <div className="flex m-auto opacity-50 hover:opacity-100">{middleContent}</div>
            <div className="flex">{rightSideContent}</div>
        </div>
    )
}