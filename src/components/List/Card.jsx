import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="relative">
        <p className="bg-white rounded-md m-2 p-1">{this.props.text}</p>
        <button
          className="absolute right-6 top-0"
          onClick={() =>
            this.props.handleRemovingCard(this.props.cardID, this.props.listID)
          }
        >
          x
        </button>
      </div>
    );
  }
}
