import { RootState } from '../store'

export const selectPizza = (state: RootState) => state.pizzas
export const selectBigPizza = (state: RootState) => state.bigPizza
