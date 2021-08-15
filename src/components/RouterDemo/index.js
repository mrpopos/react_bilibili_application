import React, { Component, lazy, Suspense } from 'react'
import { Route, NavLink } from 'react-router-dom'
// import RouterDemo1 from '../RouterDemo1'
// import RouterDemo2 from '../RouterDemo2'
import './index.css'

const RouterDemo1 = lazy(() => import('../RouterDemo1'))
const RouterDemo2 = lazy(() => import('../RouterDemo2'))

export default class RouterDemo extends Component {
  render() {
    return (
      <div className="router-demo">
        <div className="left">
          <NavLink to="/home" activeClassName="actived">Home</NavLink>
          <br />
          <NavLink to="/admin" activeClassName="actived">Admin</NavLink>
        </div>
        <div className="right">
        <Suspense fallback={<h2>hello world~~~</h2>}>
          <Route path="/home" component={RouterDemo1} />
          <Route path="/admin" component={RouterDemo2} />
        </Suspense>
        </div>
      </div>
    )
  }
}
