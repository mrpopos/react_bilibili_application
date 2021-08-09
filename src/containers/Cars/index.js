import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {addCar} from '../../redux/actions/cars'
import './index.css'

class Cars extends Component {
  render() {
    // console.log('*****', this.props)
    const {cars, count} = this.props
    return (
      <div className="cars">
        <h2>Cars组件 总共{cars.length}条 &lt;数据共享&gt;</h2>
        <input ref={(c) => {this.typeNode = c}} type="text" name="cartype" id="cartype" placeholder="输入汽车品牌" />
        <input ref={(c) => {this.priceNode = c}} type="text" name="carprice" id="carprice" placeholder="输入汽车价格" />
        <button onClick={this.addCar}>add</button>
        <ul>
          {
            cars.map(item => {
              return <li key={item.id}>编号：{item.id}, 品牌：{item.type}， 价格：{item.price}</li>
            })
          }
        </ul>
        <h2>TOTAL COUNT：{count}</h2>
      </div>
    )
  }

  addCar = () => {
    const type = this.typeNode.value
    const price = this.priceNode.value
    const carObj = {id: nanoid(), type, price}
    // console.log(carObj)
    this.props.addCar(carObj)
  }
}

export default connect(
  state => ({
    cars: state.cars,
    count: state.count
  }),
  {
    addCar
  }
)(Cars)
