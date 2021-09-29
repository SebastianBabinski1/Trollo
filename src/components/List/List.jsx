import React from "react";
import ListTitle from "./ListTitle";
import Card from "./Card";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.handleAddingCard(this.props.listID, this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleCards(cards) {
    const tableOfCards = [];
    cards.forEach((item) => {
      tableOfCards.push(
        <Card
          key={item.id}
          handleRemovingCard={this.props.handleRemovingCard}
          listID={this.props.listID}
          cardID={item.id}
          text={item.text}
        />
      );
    });
    return tableOfCards;
  }

  render() {
    return (
      <div className="list-wrapper w-1/4 bg-gray-200 m-2 h-full">
        <ListTitle />
        {this.handleCards(this.props.cards)}
        <form onSubmit={this.handleSubmit} className="flex">
          <input
            className="m-2"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add new card"
          />
          <input className="p-1 rounded-md shadow-md" type="submit" value="+" />
        </form>
      </div>
    );
  }
}
