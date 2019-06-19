import React from 'react';
import Clock from './Clock'
import './App.css';
import RedomImage from './RedomImage'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 123, AppheaderWidth:'', AppheaderHeight:'' }
  }
  componentDidMount() {
    let Appheader = this.refs.Appheader;
    // this.state.AppheaderWidth = 
    this.setState({AppheaderHeight:Appheader.clientHeight,AppheaderWidth:Appheader.clientWidth})
  }
  render() {
    return (
      <div className="App">
        <header ref="Appheader" className="App-header">
          <Clock date={'haha'} />
          <RedomImage AppheaderHeight={this.state.AppheaderHeight} AppheaderWidth={this.state.AppheaderWidth}></RedomImage>
        </header>
      </div>
    )
  }
}
export default App;
