import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let acc = 0;
    const array = [1, 2, 3, 4, 5]
    for (let i = 0; i < array.length; i++) {
      console.log(acc)
        acc +=  array[i]
    }
    return (
      <div className="App">
        <h1>Reduce imperatively</h1>
        <p>{acc}</p>

      </div>
    );
  }
}

export default App;
