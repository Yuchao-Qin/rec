import React from "react";
import ReactDom from 'react-dom';


class Clock extends React.Component {
  constructor(props) {
    // props : 父级组件传递过来的参数
    super(props);
    this.state = {
      date: new Date(),
      numbers :[1,2,3,4,5],
    }
  }

   NumberList() {
      const numbers = [1,2,3,4,5];
      const listItems = numbers.map((number)=>
        <li key={number.toString()}>
          { number }
        </li>
      )
    
     return  (<ul>{listItems}</ul>)
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

        {this.NumberList()}
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;