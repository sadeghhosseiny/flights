import { createContext } from 'react'
import * as types from './types'
import * as constants from './constants'
import * as flightsActions from './Action'

export const flightsInitialState: types.flightsStateTypes = {
  flights: {},
}

export const flightsReducer = (
  state: types.flightsStateTypes = flightsInitialState,
  action: types.flightsActionsTypes,
): any => {
  const { type } = action
  switch (type) {
    case constants.LOAD_FLIGHTS_DATA: {
      const data = {
        ...state,
        flights:{ ...action.payload.data}
      }
      return data
    }
    default:
      return state
  }
}

const FlightsContext = createContext({
  state: flightsInitialState,
  dispatch: {} as types.flightsDispatchType,
  actions: flightsActions,
})
export default FlightsContext
