import React from "react"

export default class Modal extends React.Component{
    render(){
            return(
                <div className="modal max-w-md rounded-md border-2 m-2 absolute bg-white text-black">
                    <span>&times;</span>
                    {this.props.children}
                </div>
            )
    }
}