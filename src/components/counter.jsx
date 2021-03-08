import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    }

    // Old method - Binding
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // 1- Write as arrow function to use this in current component
    // 2- Delete any reference to parent state and use prop instead, so function remove
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 })
    // }

    render() {
        // console.log('props', this.props); // Get parent props as well as children   
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    // onClick={this.handleIncrement}      
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="button button-alt m-1"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)} // Functional way to send variables to the function in this case to parent function prop
                    className="button-sm button-red m-1"
                >
                    Delete
                </button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "brand brand-";
        // classes += this.state.value === 0 ? "orange" : "blue"; // Remove any reference to state and use prop
        classes += this.props.counter.value === 0 ? "orange" : "blue";
        return classes;
    }

    formatCount() {
        // Pick count prop from state using destructuring
        // const { value } = this.state; // Remove any reference to state and use prop
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;