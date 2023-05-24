import { createContext } from 'react'
import * as types from './types'
import * as constants from './constants'
import * as flightsActions from './Action'

export const flightsInitialState: types.flightsStateTypes = {
  rawFlights: {},
  changableFlights: {},
  filters: {},
}

const applyFilterOnItem = (item: any, key: any, value: any): boolean => {
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
): any => {
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
      const tempFlights: any = state.rawFlights

      tempFlights.pricedItineraries.sort(
        (a: any, b: any) =>
          a.airItineraryPricingInfo.itinTotalFare.totalFare -
          b.airItineraryPricingInfo.itinTotalFare.totalFare,
      )

      return { ...state, changableFlights: tempFlights }
    }
    case constants.SORT_BY_FLIGHTTIME: {
      const tempFlights: any = state.rawFlights

      tempFlights.pricedItineraries.sort(
        (a: any, b: any) =>
          Date.parse(a.originDestinationOptions[0].flightSegments[0].departureDateTime) -
          Date.parse(b.originDestinationOptions[0].flightSegments[0].departureDateTime),
      )

      return { ...state, changableFlights: tempFlights }
    }
    case constants.HANDLE_FILTERS: {
      const { type, obj } = action.payload

      if (Object.keys(state.filters).includes(type)) {
        state.filters[type] = {
          ...state.filters[type],
          ...obj,
        }
      } else {
        state.filters = {
          [type]: { ...obj },
        }
      }

      const temp = state.rawFlights

      let filtered = []

      filtered = temp.pricedItineraries.filter(
        (item: any) =>
          !Object.entries(state.filters).find((type: any) =>
            Object.entries(state.filters[type[0]]).find((key: any) => {
              return !applyFilterOnItem(item, key[0], key[1])
            }),
          ),
      )

      if (Object.values(state.filters[type]).every((value) => value === false)) {
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
