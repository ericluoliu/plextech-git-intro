import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    Add = () => {
        this.setState({ value: this.state.value + 1});
    }
    Subtract = () => {
        this.setState({ value: this.state.value - 1});
    }

    render() {
        return (
            <>
                <div>
                    <button className = "lol" onClick={this.Add}> + </button>
                    <button className = "lol" onClick={this.Subtract}> - </button>
                </div>
                <h1 className= 'otherlol' >{this.state.value}</h1>
                <h2>Here is the VALUE AGAIN HAHAHHAHAHAHAHAHA: {this.state.value}</h2>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Display/>);
