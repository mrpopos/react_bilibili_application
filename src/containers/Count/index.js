import React, { Component } from 'react'
// 引入action
import {incrementNumber, decrementNumber, incrementAsyncNumber} from '../../redux/actions/count'
// 引入react-redux核心库
import {connect} from 'react-redux'
import './index.css'

class FacebookReduxDemo extends Component {
  render() {
    const {count, cars} = this.props
    return (
      <div className="redux-demo">
        <h2>Facebook Redux&lt;数据共享&gt;</h2>
        <h3>Total Count：{count}</h3>
        <select ref={selectNode => this.selectNode = selectNode} name="number" id="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.handleIncrementNumber}>+</button>&nbsp;&nbsp;
        <button onClick={this.handleDecrementNumber}>-</button>&nbsp;&nbsp;
        <button onClick={this.handleOddIncrementNumber}>increment if odd</button>&nbsp;&nbsp;
        <button onClick={this.handleAsyncIncrementNumber}>async increment</button><hr />
        <h3>cars list：{cars.length}条</h3>
      </div>
    )
  }

  handleIncrementNumber = () => {
    const {incrementNumber} = this.props
    const value = this.selectNode.value*1
    incrementNumber(value)
  }

  handleDecrementNumber = () => {
    const {decrementNumber} = this.props
    const value = this.selectNode.value*1
    decrementNumber(value)
  }

  handleOddIncrementNumber = () => {
    const {count, incrementNumber} = this.props
    const value = this.selectNode.value*1
    if (count % 2 !== 0) {
      incrementNumber(value)
    }
  }

  handleAsyncIncrementNumber = () => {
    const {incrementAsyncNumber} = this.props
    const value = this.selectNode.value*1
    incrementAsyncNumber(value, 500)
  }
}
// 链接UI组件与redux
export default connect(
  state => ({
    count: state.count,
    cars: state.cars
  }),
  // 简写后
    {
      incrementNumber,
      decrementNumber,
      incrementAsyncNumber
    }
)(FacebookReduxDemo)
