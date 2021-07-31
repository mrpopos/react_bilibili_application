import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosDemo extends Component {
  render() {
    return (
      <div>
        AxiosDemo~~~
      </div>
    )
  }

  componentDidMount() {
    axios.get('/api/users/student').then(response => {
      console.log(response.data)
    }, error => {
      console.log('error', error)
    })
  }
}
