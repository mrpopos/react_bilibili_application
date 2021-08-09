import { INSERT_CAR } from '../constant'

export const addCar = carObj => {
  return {type: INSERT_CAR, data: carObj}
}
