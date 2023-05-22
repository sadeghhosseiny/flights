import * as types from './types'
import * as constants from './constants'

export const loadFlightsData = (data: types.flightsStateTypes) => (dispatch: types.flightsDispatchType) => {
  return dispatch({ type: constants.LOAD_FLIGHTS_DATA, payload: {data} })
}
