import React, { Component } from 'react';
import './App.css';

// 1st make context
const MyContext = React.createContext();

// Then  create a provider component
class MyProvider extends Component {
    state = {
        name: 'michelle',
        age: 100,
        cool: true
    };
    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state,
                    growOlder: () =>
                        this.setState({
                            age: this.state.age + 1
                        })
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const Family = props => (
    <div className="family">
        <Person></Person>
    </div>
);

class Person extends Component {
    render() {
        return (
            <div className="person">
                <MyContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <p>Name: {context.state.name}</p>
                            <p>Age: {context.state.age}</p>
                            <button onClick={context.growOlder}>
                                Add a Year
                            </button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div className="App">
                    <p>Im the Context API app</p>
                    <Family></Family>
                </div>
            </MyProvider>
        );
    }
}
export default App;
