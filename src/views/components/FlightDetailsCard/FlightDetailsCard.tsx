import { FunctionComponent, HTMLAttributes } from 'react'
import Tabs from '../Tabs/Tabs'
import Details from '../Details'
import { useDetailContext } from '../../../contexts/DetailContext'

interface IFlightDetailsCardProps extends HTMLAttributes<Element> {
  className?: string
}

const FlightDetailsCard: FunctionComponent<IFlightDetailsCardProps> = (props) => {
  return (
    <div className='mt-7'>
      <Tabs />
      <Details />
    </div>
  )
}

export default FlightDetailsCard
