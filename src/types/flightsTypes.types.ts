export interface RootFlightsTypes {
  searchId: number
  pricedItineraries: PricedItinerary[]
  additionalData: AdditionalData
  airTripType: string
  airTripTypeStr: string
}

export interface PricedItinerary {
  passportMandatoryType: string
  domesticCountryCode: string
  isPassportMandatory: boolean
  isDestinationAddressMandatory: boolean
  isPassportIssueDateMandatory: boolean
  directionInd: number
  refundMethod: string
  validatingAirlineCode: string
  fareSourceCode: string
  hasFareFamilies: boolean
  airItineraryPricingInfo: AirItineraryPricingInfo
  originDestinationOptions: OriginDestinationOption[]
  featured: any
  bestExperienceIndex: number
  isCharter: boolean
  isSystem: boolean
  isInstance: boolean
  isOffer: boolean
}

export interface AirItineraryPricingInfo {
  fareType: string
  itinTotalFare: ItinTotalFare
  ptcFareBreakdown: PtcFareBreakdown[]
  fareInfoes: any[]
}

export interface ItinTotalFare {
  totalService: number
  totalFare: number
  grandTotalWithoutDiscount: number
  discountAmount: any
  totalVat: number
  totalTax: number
  totalServiceTax: number
}

export interface PtcFareBreakdown {
  passengerFare: PassengerFare
  passengerTypeQuantity: PassengerTypeQuantity
}

export interface PassengerFare {
  baseFare: number
  totalFare: number
  serviceTax: number
  taxes: any[]
  total: number
  tax: number
  vat: number
  baseFareWithMarkup: number
  totalFareWithMarkupAndVat: number
}

export interface PassengerTypeQuantity {
  passengerType: string
  quantity: number
}

export interface OriginDestinationOption {
  journeyDurationPerMinute: number
  connectionTimePerMinute: number
  flightSegments: FlightSegment[]
}

export interface FlightSegment {
  departureDateTime: string
  arrivalDateTime: string
  stopQuantity: number
  flightNumber: string
  resBookDesigCode: string
  journeyDuration: string
  journeyDurationPerMinute: number
  connectionTimePerMinute: number
  departureAirportLocationCode: string
  arrivalAirportLocationCode: string
  marketingAirlineCode: string
  cabinClassCode: string
  operatingAirline: OperatingAirline
  seatsRemaining: number
  isCharter: boolean
  isReturn: boolean
  baggage?: string
  technicalStops: any[]
}

export interface OperatingAirline {
  code: string
  flightNumber?: string
  equipment?: string
  equipmentName: any
}

export interface AdditionalData {
  airlines: Airline[]
  airports: Airport[]
  cities: any
}

export interface Airline {
  iata: string
  name: string
  nameFa: string
}

export interface Airport {
  iata: string
  name: string
  nameFa: string
  cityFa: string
  cityId: string
  countryCode: string
  countryFa: string
  latitude: string
  longitude: string
}
