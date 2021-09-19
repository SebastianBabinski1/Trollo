import React from "react"

export default class Button extends React.Component{
    state = {
        seen: false
        };
    togglePop = () => {
            this.setState({
                seen: !this.state.seen
            });
        };
    render(){
        return(
            <>
                <button className={this.props.buttonClass} onClick={this.togglePop}>
                    {this.props.svg}
                    <span className={this.props.spanClass}>{this.props.text}</span>
                    {this.state.seen ? this.props.children : null}
                </button>
            </>
        )
    }
}