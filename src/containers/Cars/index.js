import React, { Component } from 'react'
import { connect } from 'react-redux'
import {insertCar} from '../../redux/actions/cars'
import './index.css'

class Cars extends Component {
  render() {
    // console.log('*****', this.props.carsCmpn)
    const {cars, count} = this.props.carsCmpn
    return (
      <div className="cars">
        <h2>Cars组件 总共{cars.length}条 &lt;数据共享&gt;</h2>
        <ul>
          <li>编号：'001', 品牌：'奔驰 梅赛德斯'， 价格：'120万'</li>
          <li>编号：'001', 品牌：'奔驰 梅赛德斯'， 价格：'120万'</li>
          <li>编号：'001', 品牌：'奔驰 梅赛德斯'， 价格：'120万'</li>
        </ul>
        <h2>TOTAL COUNT：{count}</h2>
      </div>
    )
  }
}

export default connect(
  state => ({carsCmpn: state}),
  {
    insertCar: insertCar
  }
)(Cars)
