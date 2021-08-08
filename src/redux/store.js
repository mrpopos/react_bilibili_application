import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import countReducer from './reducers/count'
import carsReducer from './reducers/cars'
import thunk from 'redux-thunk'

const allReducer = combineReducers(
  {
    cars: carsReducer,
    count: countReducer
  }
)

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
