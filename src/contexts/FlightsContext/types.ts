import { Dispatch } from 'react'
import * as constants from './constants'

export type FlightType = {
  [x: string]: any
}


export type flightsStateTypes = {
  rawFlights: FlightType
  changableFlights: any
  filters: any
}

export type flightsActionsTypes = {
      type: typeof constants.LOAD_FLIGHTS_DATA
      payload : {data: FlightType} 
    } | {
      type: typeof constants.SORT_BY_PRICE
    } | {
      type: typeof constants.SORT_BY_FLIGHTTIME
    } | {
      type: typeof constants.HANDLE_CHARTER_FLIGHTS
      payload: {
        type: string,
        [x: string]: any
}
    }

export type flightsDispatchType = Dispatch<flightsActionsTypes>
