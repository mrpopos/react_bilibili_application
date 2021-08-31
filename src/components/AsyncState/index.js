import React, { Component } from 'react'
import './index.css'

export default class AsyncState extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="async-state">
        <h2>state async 特性[对象状态与函数式状态]</h2>
        <p>当前求和为：{count}</p>
        <button onClick={this.increment}>点击自增</button>
      </div>
    )
  }

  increment = () => {
    // let {count} = this.state
    // this.setState({count: ++count}, () => {
    //   console.log(this.state.count)
    // })
    this.setState((state, props) => {
      console.log(state, props)
      return {count: 888}
    }, () => {
      console.log('状态变更完成111')
    })
  }
}
