import { FunctionComponent, HTMLAttributes } from 'react'
import Tabs from '../Tabs/Tabs'
import Details from '../Details'

interface IFlightDetailsCardProps extends HTMLAttributes<Element> {
  className?: string
  data: any
  airItineraryPricingInfo: any
  isSystem: boolean
  sourceCity: {
    cityFa: string
    cityId: string
  }
  arrivalCity: {
    cityFa: string
    cityId: string
  }
}

const FlightDetailsCard: FunctionComponent<IFlightDetailsCardProps> = (props) => {
  return (
    <div className='mt-7'>
      <Tabs />
      <Details
        airItineraryPricingInfo={props.airItineraryPricingInfo}
        sourceCity={props.sourceCity}
        arrivalCity={props.arrivalCity}
        data={props.data}
        isSystem={props.isSystem}
      />
    </div>
  )
}

export default FlightDetailsCard
