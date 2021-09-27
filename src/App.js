import Button from './components/Button';
import Navbar from './components/Navbar';
import { TableSVG } from './svg/TableSVG';
import BoardHeader from './components/BoardHeader';
import List from './components/List/List.jsx'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleAddingList = this.handleAddingList.bind(this);
    this.handleLists = this.handleLists.bind(this);
    this.state = {
      lists: [
          {
            title: "First Episode",
            id: 0,
            cards: [
                {
                    id: 0,
                    text: "Im a first card of first list"
                },
                {
                    id: 1,
                    text: "Im a second card of first list"
                }
            ]
        },
        {
          title: "Second Episode",
          id: 1,
          cards: [
              {
                  id: 0,
                  text: "Im a first card of second list"
              },
              {
                  id: 1,
                  text: "Im a second card of second list"
              }
          ]
        }
      ]
    }
  }

  handleAddingCard(listTitle, cardText){
    //  here u must add some counter with used ids
    this.state.lists.forEach(item => {
      console.log(this.state)
      item.title === listTitle 
      ? this.setState({cards:item.cards.push({id:item.cards.length, text:cardText})})
      : console.log("Wrong title")
    })
  }

  handleRemovingCard(cardID, listID){
    console.log(this.state.lists)
    this.state.lists.forEach(item => {
      item.id === listID 
      ? item.cards.forEach(card =>{
        card.id === cardID
        ? this.setState({cards:item.cards.splice(item.cards.indexOf(card),1)})
        :console.log(":)")
      })
      : console.log(":P")
    })
  }

  handleAddingList(){
    this.setState({
      lists: [...this.state.lists, {
        title: "",
        id: this.state.lists.length,
        cards: []
      }]
    })
  }

  handleLists(){
    const tableOfLists = []
    this.state.lists.forEach(item => {
      tableOfLists.push(<List listID={item.id} cards={item.cards} title={item.title} handleAddingCard={this.handleAddingCard.bind(this)} handleRemovingCard={this.handleRemovingCard.bind(this)}/>)
    })
    return(
      tableOfLists
    )
  }

  render(){
    return (
      <div className="App h-screen">
        <div className="App-header">
          <Navbar/>
          <Button spanClass="pl-2" buttonClass="flex p-1 m-2 bg-black bg-opacity-10 rounded-md hover:bg-opacity-20" svg={TableSVG} text="Sample button"/>
          <BoardHeader tableName="Name of table"/>
        </div>
        <div className="App-content flex">
          {this.handleLists()}
          <button className="border-2 px-2 rounded-r-md shadow-md w-32 h-8" onClick={this.handleAddingList}>Add new list</button>
        </div>
      </div>
    );
  }
}

export default App;
