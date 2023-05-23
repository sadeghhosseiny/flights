import React, { FunctionComponent, useEffect, useReducer } from 'react'
import {
  FlightsContext,
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

  // const [dates, setDates] = useState<string[]>([])

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
      <FlightsContext.Provider
        value={{
          state: flightsListState,
          dispatch: flightsDispatch,
          actions: flightsActions,
        }}
      >
        <>
          {flightsListState?.flights?.pricedItineraries?.map((item: any) => (
            <React.Fragment key={item.fareSourceCode}>
              <div className='py-4'>
                <FlightCard flight={item} />
              </div>
            </React.Fragment>
          ))}
        </>
      </FlightsContext.Provider>
    </Container>
  )
}

export default FlightsTemplate
