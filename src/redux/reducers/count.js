import {INCREMENT, DECREMENT} from '../constant'

const initState = 0
export default function countReducer (preState = initState, actions) {
  switch (actions.type) {
    case INCREMENT:
      return preState + actions.data
      case DECREMENT:
        return preState - actions.data
    default:
      return preState
  }
}
