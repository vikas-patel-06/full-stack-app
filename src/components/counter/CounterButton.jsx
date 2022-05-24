import React, { Component } from 'react'
import './Counter.css'

class CounterButton extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     counter: 0,
  //   }
  //   this.increment = this.increment.bind(this)
  //   this.decrement = this.decrement.bind(this)
  // }
  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod( this.props.by)}>-{this.props.by}</button>
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    )
  }

  // increment() {
  //   // console.log("increament");
  //   // this.state.counter++;
  //   // this.setState({
  //   //   counter: this.state.counter + this.props.by,
  //   // })
  //   this.props.incrementMethod( this.props.by);
  // }
  // decrement() {
  //   // console.log("increament");
  //   // this.state.counter++;
  //   // this.setState({
  //   //   counter: this.state.counter + this.props.by,
  //   // })
  //   this.props.decrementMethod( this.props.by);
  // }
}

CounterButton.defaultProps = {
  counter : 0
}

export default CounterButton;