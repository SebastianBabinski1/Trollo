import React from "react"

export default class Modal extends React.Component{
    handleClick = () => {
        this.props.toggle();
       };
    render(){
        return(
            <>
                <div class="max-w-md rounded-md border-2 m-2 absolute bg-white text-black">
                    <span className="" onClick={this.handleClick}>&times;</span>
                    <div class="modal-title border-b-2 w-3/4 mx-auto">
                        <span>{this.props.modalTitle}</span>
                    </div>
                    <div class="modal-content">
                        <span>{this.props.modalContent}</span>
                    </div>
                </div>
            </>
        )
    }
}