import {INCREMENT, DECREMENT} from '../constant'
// import store from './store'

export const incrementNumber = data => ({type: INCREMENT, data})
export const decrementNumber = data => ({type: DECREMENT, data})
export const incrementAsyncNumber = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementNumber(data))
    }, time)
  }
}
