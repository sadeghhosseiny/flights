import { FunctionComponent, HTMLAttributes } from 'react'
import Tabs from '../Tabs/Tabs'
import Details from '../Details'

interface IFlightDetailsCardProps extends HTMLAttributes<Element> {
  className?: string
}

const FlightDetailsCard: FunctionComponent<IFlightDetailsCardProps> = ({ children }) => {
  return (
    <div className='mt-7'>
      <Tabs />
      <Details />
    </div>
  )
}

export default FlightDetailsCard
