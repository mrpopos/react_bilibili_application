import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class AxiosDemo extends Component {

  state = { studentList: [] }

  render() {
    return (
      <div className="axios-demo">
        <h2>axios + proxy</h2>
        {
          this.state.studentList.map(item => {
            return (
              <p key={item.id}>编号：{item.id} # 姓名：{item.name} # 年龄：{item.age}</p>
            )
          })
        }
        <h3>###知识点###</h3>
        <ul>
          <li>axios请求响应是Promise对象，数据包含在response.data中</li>
          <li>promise对象可以通过.then()获取成功的响应，通过.catch()获取失败的响应</li>
          <li>react单个代理服务可以在package.json中直接配置，多个代理服务需要在根目录setupProxy.js文件中配置</li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    axios.get('/api/users/student').then(response => {
      // console.log(response.data)
      if (response.data.length) {
        this.setState({ studentList: response.data })
      }
    }, error => {
      console.log('error', error)
    })
  }
}
