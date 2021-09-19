import React from "react"

export default class AddButton extends React.Component{
    render() {
        return(
            <button type="button" className="bg-white rounded-md border-black border-2">
                Add new card
            </button>
        )
    }
}