import * as types from './types'
import * as constants from './constants'

export const loadFlightsData = (data: types.FlightType) => (dispatch: types.flightsDispatchType) => {
  return dispatch({ type: constants.LOAD_FLIGHTS_DATA, payload: {data} })
}

export const sortFlightsBasedOnPrice = () => (dispatch: types.flightsDispatchType) => {
  return dispatch({type: constants.SORT_BY_PRICE })
}

export const sortFlightsBasedOnDate = () => (dispatch: types.flightsDispatchType) => {
  return dispatch({type: constants.SORT_BY_FLIGHTTIME })
}

export const filterCharterFlights = (check: boolean) => (dispatch: types.flightsDispatchType) => {
  return dispatch({type: constants.HANDLE_CHARTER_FLIGHTS, payload: {check} })
}
