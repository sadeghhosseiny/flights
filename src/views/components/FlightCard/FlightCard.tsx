import { FunctionComponent, HTMLAttributes, useContext, useState } from 'react'
import AirLineCard from '../AirLineCard'
import TimeCard from '../TimeCard'
import TicketDetailCard from '../TicketDetailCard'
import Collapse from '../Collapse'
import FlightDetailsCard from '../FlightDetailsCard'
import { FlightsContext } from '../../../contexts/FlightsContext'
import GeneralDescriptions from '../GeneralDescriptions/GeneralDescriptions'
import { useDiscriptiveWindowSize } from '../../../hooks/useDiscriptiveWindowSize'
import Modal from '../Modal/Modal'
import MobileActionFooter from '../MobileActionFooter/MobileActionFooter'

interface IFlightCardProps extends HTMLAttributes<Element> {
  className?: string
  flight: any
}

const FlightCard: FunctionComponent<IFlightCardProps> = (props) => {
  const { originDestinationOptions, airItineraryPricingInfo } = props.flight
  const { state } = useContext(FlightsContext)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { mobile } = useDiscriptiveWindowSize()

  const data = originDestinationOptions[0]?.flightSegments[0]

  const airPorts = state.flights.additionalData.airports

  const arrivalCity = airPorts.find((item: any) => item.cityId === data.arrivalAirportLocationCode)
  const sourceCity = airPorts.find((item: any) => item.cityId === data.departureAirportLocationCode)

  return (
    <div className='flex flex-col bg-white dark:bg-slate-700 pb-2 justify-between'>
      <div className='flex flex-col md:flex-row sm:border-b sm:border-gray-200 px-3'>
        <AirLineCard className='flex items-center gap-3' width='56px' height='56px' />
        <TimeCard sourceCity={sourceCity} arrivalCity={arrivalCity} data={data} />
        {mobile ? (
          <div className='flex flex-col-reverse'>
            <TicketDetailCard
              setIsModalOpen={setIsModalOpen}
              planePricingInfo={airItineraryPricingInfo}
            />
            <GeneralDescriptions detail={originDestinationOptions[0]?.flightSegments[0]} />
          </div>
        ) : (
          <TicketDetailCard planePricingInfo={airItineraryPricingInfo} />
        )}
      </div>
      {mobile && isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <FlightDetailsCard
            airItineraryPricingInfo={airItineraryPricingInfo.ptcFareBreakdown[0]}
            sourceCity={sourceCity}
            arrivalCity={arrivalCity}
            data={data}
            isSystem={props.flight.isSystem}
          />
          <MobileActionFooter planePricingInfo={airItineraryPricingInfo} />
        </Modal>
      )}
      {!mobile && (
        <div>
          <Collapse flightDetail={originDestinationOptions[0]}>
            <FlightDetailsCard
              airItineraryPricingInfo={airItineraryPricingInfo.ptcFareBreakdown[0]}
              sourceCity={sourceCity}
              arrivalCity={arrivalCity}
              data={data}
              isSystem={props.flight.isSystem}
            />
          </Collapse>
        </div>
      )}
    </div>
  )
}

export default FlightCard
