import React from "react"
import ListTitle from "./ListTitle"
import Card from "./Card"

export default class List extends React.Component{
    handleCards(cards){
        const tableOfCards = []
        cards.forEach(item => {
            tableOfCards.push(<Card text={item.text}/>)
        })
        return(
            tableOfCards
        )
    }

    render(){
        return(
            <div className="list-wrapper w-1/4 bg-gray-200 m-2">
                <ListTitle title={this.props.title}/>
                {this.handleCards(this.props.cards)}
                <button type="button" className="bg-white rounded-md border-black border-2" onClick={()=>this.props.handleAddingCard(this.props.title, "XD")}>
                    Add new card
                </button>
            </div>
        )
    }
}

