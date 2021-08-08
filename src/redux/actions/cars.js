import { INSERT_CAR } from '../constant'

export const insertCar = carObj => {
  return {type: INSERT_CAR, data: carObj}
}
