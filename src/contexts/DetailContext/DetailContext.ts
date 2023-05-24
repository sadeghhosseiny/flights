import { createContext } from "react"

const initialState:any = {}

type asdf = {
  airItineraryPricingInfo: any,
  sourceCity: any,
  arrivalCity: any,
  flightSegments: any,
  isSystem: any
}

const DetailContext = createContext<asdf>(initialState)

export default DetailContext