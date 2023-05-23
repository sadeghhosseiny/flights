import { createContext } from 'react'
import * as types from './types'
import * as constants from './constants'
import * as flightsActions from './Action'

export const flightsInitialState: types.flightsStateTypes = {
  rawFlights: {},
  changableFlights: {}
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
        changableFlights:{ ...action.payload.data},
        rawFlights:{ ...action.payload.data}
      }
      return data
    }
    case constants.SORT_BY_PRICE: {
      const tempFlights:any = state.rawFlights

      tempFlights.pricedItineraries.sort((a:any, b:any) => a.airItineraryPricingInfo.itinTotalFare.totalFare - b.airItineraryPricingInfo.itinTotalFare.totalFare)

      return {rawFlights: tempFlights}
    }
    case constants.SORT_BY_FLIGHTTIME: {
      const tempFlights:any = state.rawFlights

      tempFlights.pricedItineraries.sort((a:any, b:any) => Date.parse(a.originDestinationOptions[0].flightSegments[0].departureDateTime) - Date.parse(b.originDestinationOptions[0].flightSegments[0].departureDateTime))

      return {rawFlights: tempFlights}
    }
    case constants.HANDLE_CHARTER_FLIGHTS: {
      const tempFlights:any = state.rawFlights
      const {check} = action.payload
      if (check) {
        return {...state, changableFlights: {
          ...state.rawFlights,
          pricedItineraries: tempFlights.pricedItineraries.filter((item:any) => item.isCharter === true)} }
        } else {
          return {
            ...state,
            changableFlights: {
              ...state.rawFlights
            }
          }
        }
    
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
