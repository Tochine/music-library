import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        counter : 1
    }

    incrementCounter = () => {
        let counterNew = this.state.counter + 1
        this.setState({
            counter: counterNew
        })
    }

    render(){
        return(
        <div>
            <div className="container mt-5">
                <h3>Test - {this.state.counter}</h3>
                <p>
                    <button className="btn btn-success btn-lg" onClick={this.incrementCounter}>+</button>
                </p>
            </div>
        </div>
        )
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}