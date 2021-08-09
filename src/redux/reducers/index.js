import {combineReducers } from 'redux'

import cars from './cars'
import count from './count'

export default combineReducers(
  {
    cars,
    count
  }
)
