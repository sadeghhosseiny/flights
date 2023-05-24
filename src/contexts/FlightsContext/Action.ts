import * as types from './types'
import * as constants from './constants'
import { RootFlightsTypes } from '../../types/flightsTypes.types'

export const loadFlightsData =
  (data: RootFlightsTypes) => (dispatch: types.flightsDispatchType) => {
    return dispatch({ type: constants.LOAD_FLIGHTS_DATA, payload: { data } })
  }

export const sortFlightsBasedOnPrice = () => (dispatch: types.flightsDispatchType) => {
  return dispatch({ type: constants.SORT_BY_PRICE })
}

export const sortFlightsBasedOnDate = () => (dispatch: types.flightsDispatchType) => {
  return dispatch({ type: constants.SORT_BY_FLIGHTTIME })
}

export const filters =
  (type: string, data: Record<string, any>) => (dispatch: types.flightsDispatchType) => {
    return dispatch({ type: constants.HANDLE_FILTERS, payload: { type, data } })
  }
