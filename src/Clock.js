import React from "react"
import './Clock.css'


class Clock extends React.Component {
  constructor(props) {
    // props : 父级组件传递过来的参数
    super(props);
    this.state = {
      date: new Date(),
      numbers :[1,2,3,4,5],
    }
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <div><h2>现在是{this.state.date.toLocaleTimeString()}</h2></div>
      </div>
    )
  }
}

export default Clock;
