import React from "react"
import ListTitle from "./ListTitle"
import Card from "./Card"

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.props.handleAddingCard(this.props.title, this.state.value)
        this.setState({value: ''})
        event.preventDefault();
    }

    handleCards(cards){
        const tableOfCards = []
        cards.forEach(item => {
            tableOfCards.push(<Card handleRemovingCard={this.props.handleRemovingCard} listID={this.props.listID} cardID={item.id} text={item.text}/>)
        })
        return(
            tableOfCards
        )
    }

    render(){
        return(
            <div className="list-wrapper w-1/4 bg-gray-200 m-2 h-full">
                <ListTitle/>
                {this.handleCards(this.props.cards)}
                <form onSubmit={this.handleSubmit} className="flex">
                    <label className="flex">
                        Add new card:
                        <input className="m-2" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input className="border-2 px-2 rounded-r-md shadow-md" type="submit" value="+"/>
                </form>
            </div>
        )
    }
}

