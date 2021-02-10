import React from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
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

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
