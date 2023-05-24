import { Dispatch } from 'react'
import * as constants from './constants'
import { RootFlightsTypes } from '../../types/flightsTypes.types'

export type filtersType = Record<string, Record<string, any>>

export type flightsStateTypes = {
  rawFlights: RootFlightsTypes
  changableFlights: RootFlightsTypes
  filters: filtersType
}

export type flightsActionsTypes =
  | {
      type: typeof constants.LOAD_FLIGHTS_DATA
      payload: { data: RootFlightsTypes }
    }
  | {
      type: typeof constants.SORT_BY_PRICE
    }
  | {
      type: typeof constants.SORT_BY_FLIGHTTIME
    }
  | {
      type: typeof constants.HANDLE_FILTERS
      payload: {
        type: string
        data: Record<string, any>
      }
    }

export type flightsDispatchType = Dispatch<flightsActionsTypes>
