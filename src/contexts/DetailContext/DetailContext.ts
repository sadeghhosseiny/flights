import { createContext } from 'react'
import {
  AirItineraryPricingInfo,
  Airport,
  FlightSegment,
  PtcFareBreakdown,
} from '../../types/flightsTypes.types'

const initialState: any = {}

type detailContext = {
  airItineraryPricingInfo: PtcFareBreakdown
  sourceCity: Airport
  arrivalCity: Airport
  flightSegments: FlightSegment
  isSystem: boolean
}

const DetailContext = createContext<detailContext>(initialState)

export default DetailContext
