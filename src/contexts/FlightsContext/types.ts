import { Dispatch } from 'react'
import * as constants from './constants'

export type FlightType = {
  [x: string]: any
}


export type flightsStateTypes = {
  flights: FlightType
}

export type flightsActionsTypes = {
      type: typeof constants.LOAD_FLIGHTS_DATA
      payload : {data: FlightType} 
    }

export type flightsDispatchType = Dispatch<flightsActionsTypes>
