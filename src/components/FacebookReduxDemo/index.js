import React, { Component } from 'react'
import './index.css'

export default class FacebookReduxDemo extends Component {
  render() {
    return (
      <div className="redux-demo">
        <h2>Facebook Redux</h2>
        <h3>Total Count：0</h3>
        <select ref={selectNode => this.selectNode = selectNode} name="number" id="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.handleIncrementNumber}>+</button>&nbsp;&nbsp;
        <button onClick={this.handleDecrementNumber}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleOddIncrementNumber}>increment if odd</button>&nbsp;&nbsp;
        <button onClick={this.handleAsyncIncrementNumber}>async increment</button>
      </div>
    )
  }

  handleIncrementNumber = () => {
    // const value = this.selectNode.value*1
  }

  handleDecrementNumber = () => {
    // const value = this.selectNode.value*1
  }

  handleOddIncrementNumber = () => {
    // const value = this.selectNode.value*1
  }

  handleAsyncIncrementNumber = () => {
    // const value = this.selectNode.value*1
  }
}
