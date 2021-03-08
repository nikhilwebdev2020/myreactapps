import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleIncrement = counter => {
        console.log("Handle Increment", counter);
        // Clone counters array using spread operator
        const newcounters = [...this.state.counters];
        // Find index of current counter
        const index = newcounters.indexOf(counter);
        // Increase value
        newcounters[index].value++;
        // Update state
        this.setState({ counters : newcounters })
    }

    handleDelete = counterId => {
        console.log("Handle Delete", counterId);
        // Make new array without the counter with counterId and let react handle state changes
        const newcounters = this.state.counters.filter(c => c.id !== counterId);
        // Override counters property with newcounters
        this.setState({ counters: newcounters }) 

    }

    handleReset = () => {
        const newcounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters: newcounters});
    };

    render() { 
        return ( 
            <div>
                <button 
                    className="button button-blue m-1"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {/* Pass value to child counter as prop */}
                {/* onDelete prop for child counter access to handleDelete function */}
                {/* Instead of each state counters values as prop, set whole counter object as prop */}
                { this.state.counters.map( counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        counter={counter}
                        onIncrement={this.handleIncrement}
                    /> 
                ) } 
            </div>
        );
    }
}
 
export default Counters;