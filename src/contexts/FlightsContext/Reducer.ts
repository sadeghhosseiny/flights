import { createContext } from 'react'
import * as types from './types'
import * as constants from './constants'
import * as flightsActions from './Action'
import { PricedItinerary, RootFlightsTypes } from '../../types/flightsTypes.types'

export const flightsInitialState: types.flightsStateTypes = {
  rawFlights: {} as RootFlightsTypes,
  changableFlights: {} as RootFlightsTypes,
  filters: {} as types.filtersType,
}

const applyFilterOnItem = (item: PricedItinerary, key: string, value: any): boolean => {
  switch (key) {
    case 'isCharter': {
      return item.isCharter === value
    }

    case 'isSystem': {
      return item.isSystem === value
    }

    case 'totalFare': {
      return (
        value.from < item.airItineraryPricingInfo.itinTotalFare.totalFare / 10 &&
        item.airItineraryPricingInfo.itinTotalFare.totalFare / 10 < value.to
      )
    }
    default:
      return false
  }
}

export const flightsReducer = (
  state: types.flightsStateTypes = flightsInitialState,
  action: types.flightsActionsTypes,
): types.flightsStateTypes => {
  const { type } = action
  switch (type) {
    case constants.LOAD_FLIGHTS_DATA: {
      const data = {
        ...state,
        changableFlights: { ...action.payload.data },
        rawFlights: { ...action.payload.data },
      }
      return data
    }
    case constants.SORT_BY_PRICE: {
      const tempFlights = state.changableFlights

      tempFlights.pricedItineraries.sort(
        (a, b) =>
          a.airItineraryPricingInfo.itinTotalFare.totalFare -
          b.airItineraryPricingInfo.itinTotalFare.totalFare,
      )

      return { ...state, changableFlights: tempFlights }
    }
    case constants.SORT_BY_FLIGHTTIME: {
      const tempFlights = state.changableFlights

      tempFlights.pricedItineraries.sort(
        (a, b) =>
          Date.parse(a.originDestinationOptions[0].flightSegments[0].departureDateTime) -
          Date.parse(b.originDestinationOptions[0].flightSegments[0].departureDateTime),
      )

      return { ...state, changableFlights: tempFlights }
    }
    case constants.HANDLE_FILTERS: {
      const { type, data } = action.payload

      if (Object.keys(state.filters).includes(type)) {
        state.filters[type] = {
          ...state.filters[type],
          ...data,
        }
      } else {
        state.filters = {
          ...state.filters,
          [type]: { ...data },
        }
      }

      const temp = state.rawFlights

      let filtered = []

      filtered = temp.pricedItineraries.filter(
        (item) =>
          !Object.entries(state.filters).find((type) =>
            Object.entries(state.filters[type[0]]).find((key) => {
              return !applyFilterOnItem(item, key[0], key[1])
            }),
          ),
      )

      if (
        Object.values(state.filters[type]).every((value) => value === false) &&
        !Object.keys(state.filters).includes('range')
      ) {
        return {
          ...state,
          changableFlights: {
            ...state.rawFlights,
          },
        }
      } else {
        return {
          ...state,
          changableFlights: {
            ...state.rawFlights,
            pricedItineraries: filtered,
          },
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
