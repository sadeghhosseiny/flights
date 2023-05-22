import { FunctionComponent, HTMLAttributes, useState } from 'react'
import AirLineCard from '../AirLineCard'
import TimeCard from '../TimeCard'
import TicketDetailCard from '../TicketDetailCard'
import Collapse from '../Collapse'
import FlightDetailsCard from '../FlightDetailsCard'

interface IFlightCardProps extends HTMLAttributes<Element> {
  className?: string
}

const FlightCard: FunctionComponent<IFlightCardProps> = ({ children }) => {
  return (
    <div className='flex flex-col bg-white pb-2 justify-between'>
      <div className='flex border-b border-gray-200 px-3'>
        <AirLineCard className='flex items-center gap-3' width='56px' height='56px' />
        <TimeCard />
        <TicketDetailCard />
      </div>
      <div>
        <Collapse>
          <FlightDetailsCard />
        </Collapse>
      </div>
    </div>
  )
}

export default FlightCard
