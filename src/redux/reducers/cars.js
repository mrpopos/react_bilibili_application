import { INSERT_CAR } from "../constant"

const initState = []
export default function carsReducer (preState = initState, actions) {
  const {type, data} = actions
  switch (type) {
    case INSERT_CAR:
      return [data, ...preState]
    default:
      return preState
  }
}