import React from 'react';
import Clock from './Clock'
import './App.css';
import RedomImage from './RedomImage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value:123}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock date={'haha'} />
          <RedomImage></RedomImage>
        </header>
      </div>
    )
  }
}

export default App;
