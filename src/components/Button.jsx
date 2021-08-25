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
                <button class={this.props.buttonClass} onClick={this.togglePop}>
                    {this.props.svg}
                    <span class={this.props.spanClass}>{this.props.text}</span>
                </button>
                {this.state.seen ? this.props.children : null}
            </>
        )
    }
}