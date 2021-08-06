import React, { Component } from 'react'
import './index.css'

export default class ReduxDemo extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="redux-demo">
        <h2>Redux</h2>
        <h3>Total Count：{count}</h3>
        <select ref={selectNode => this.selectNode = selectNode} name="number" id="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.handleIncrementNumber}>+</button>&nbsp;&nbsp;
        <button>-</button>&nbsp;&nbsp;
        <button>increment if odd</button>&nbsp;&nbsp;
        <button>async increment</button>
      </div>
    )
  }

  handleIncrementNumber = () => {
    console.log(this.selectNode)
  }
}
