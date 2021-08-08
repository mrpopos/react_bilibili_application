import React, { Component } from 'react'
import store from '../../redux/store'
import {incrementNumber, decrementNumber, incrementAsyncNumber} from '../../redux/actions/count'
import './index.css'

export default class ReduxDemo extends Component {
  render() {
    return (
      <div className="redux-demo">
        <h2>Redux</h2>
        <h3>Total Count：{store.getState()}</h3>
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
    const value = this.selectNode.value*1
    store.dispatch(incrementNumber(value))
  }

  handleDecrementNumber = () => {
    const value = this.selectNode.value*1
    store.dispatch(decrementNumber(value))
  }

  handleOddIncrementNumber = () => {
    const value = this.selectNode.value*1
    if (store.getState() % 2 !== 0) {
      store.dispatch(incrementNumber(value))
    }
  }

  handleAsyncIncrementNumber = () => {
    const value = this.selectNode.value*1
    setTimeout(() => {
      store.dispatch(incrementAsyncNumber(value, 500))
    }, 500)
  }
}
