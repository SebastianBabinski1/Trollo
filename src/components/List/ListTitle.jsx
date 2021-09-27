import React from "react"

export default class ListTitle2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }
    handleTitleChange(event){
        this.setState({title:event.target.value})
    }
    render(){
        return(
            <div>
                <input className="bg-gray-200 max-h-8 p-2" placeholder="Add title of list" onChange={this.handleTitleChange}/>
            </div>
        )
    }
}
