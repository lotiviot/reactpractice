import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state ={
            counter: 0
        };

    }

    up = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    down = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        return (
        <div>
            <p>current count: {this.state.counter}</p>
            <button onClick={this.up}>up</button>
            <button onClick={this.down}>down</button>
        </div>
        );
    }
}


export default Counter;