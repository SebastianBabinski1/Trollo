// import Button from './components/Button';
// import Navbar from './components/Navbar';
// import { TableSVG } from './svg/TableSVG';
// import BoardHeader from './components/BoardHeader';
import List from './components/List/List.jsx'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
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
                  text: "Im a second card of sedond list"
              }
          ]
        }
      ],
      sampleCount:[{id:1, text:"XDD"}],
    }
  }

  handleAddingCard(listTitle, cardText){
    console.log(this.state)
    this.state.lists.forEach(item => {
      item.title === listTitle 
      // ? this.setState({sampleCount: this.state.sampleCount.push({id:2, text:"XD"})})
      ? this.setState(this.state.lists[item].cards.push({id:2, text:"XD"}))
      : console.log("Inne") 
    })
    console.log(this.state)
  }

  handleConsoleLog(){
    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        {/* <Navbar/> */}
        {/* <Button spanClass="pl-2" buttonClass="flex p-1 m-2 bg-black bg-opacity-10 rounded-md hover:bg-opacity-20" svg={TableSVG} text="Sample button"/> */}
        {/* <BoardHeader tableName="Name of table"/> */}
        <List cards={this.state.lists[0].cards} title={this.state.lists[0].title} handleConsoleLog={this.handleConsoleLog.bind(this)} handleAddingCard={this.handleAddingCard.bind(this)}/>
        <List cards={this.state.lists[1].cards} title={this.state.lists[1].title} handleConsoleLog={this.handleConsoleLog.bind(this)} handleAddingCard={this.handleAddingCard.bind(this)}/>
      </div>
    );
  }
}

export default App;
