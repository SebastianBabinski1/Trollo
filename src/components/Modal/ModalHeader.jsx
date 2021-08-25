import React from "react"

export default class ModalHeader extends React.Component{
    render(){
        return(
            <div className="modal-header border-b-2 mx-auto">
                {this.props.children}
            </div>
        )
    }
}