import { FunctionComponent, useEffect, useReducer, useState } from 'react'
import {
  FlightContext,
  flightsInitialState,
  flightsReducer,
  flightsActions,
} from '../../../contexts/FlightsContext'
import Container from '../../layouts/Container'
import data from '../../../mock_data/flights.json'
import FlightCard from '../../components/FlightCard/FlightCard'

interface IFlightsTemplate {}

const FlightsTemplate: FunctionComponent<IFlightsTemplate> = () => {
  const [flightsListState, flightsDispatch] = useReducer(flightsReducer, flightsInitialState)

  const [dates, setDates] = useState<string[]>([])

  // const sortedData = () => {
  //   const temp: string[] = data.pricedItineraries
  //     .map((val) => val.originDestinationOptions[0].flightSegments[0].departureDateTime)
  //     .sort((a, b) => Date.parse(a) - Date.parse(b))
  //   setDates(temp)
  // }

  useEffect(() => {
    // sortedData()
    flightsActions.loadFlightsData(data as any)(flightsDispatch)
  }, [])

  return (
    <Container className='py-8 relative'>
      <FlightContext.Provider
        value={{
          state: flightsListState,
          dispatch: flightsDispatch,
          actions: flightsActions,
        }}
      >
        <>
          <FlightCard />
        </>
      </FlightContext.Provider>
    </Container>
  )
}

export default FlightsTemplate
