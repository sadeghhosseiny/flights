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
import SideBar from '../../layouts/SideBar/SideBar'

interface IFlightsTemplate {}

const FlightsTemplate: FunctionComponent<IFlightsTemplate> = () => {
  const [flightsListState, flightsDispatch] = useReducer(flightsReducer, flightsInitialState)

  useEffect(() => {
    flightsActions.loadFlightsData(data as any)(flightsDispatch)
  }, [])

  const fucntionObjects: any = {
    price: () => flightsActions.sortFlightsBasedOnPrice()(flightsDispatch),
    flightTime: () => flightsActions.sortFlightsBasedOnDate()(flightsDispatch),
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value
    fucntionObjects[type]?.()
  }

  return (
    <Container className='py-8 relative'>
      <FlightsContext.Provider
        value={{
          state: flightsListState,
          dispatch: flightsDispatch,
          actions: flightsActions,
        }}
      >
        <div className='flex items-center gap-3 justify-end'>
          <label
            htmlFor='countries'
            className='mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            مرتب سازی
          </label>
          <select
            onChange={handleSort}
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>انتخاب کنید</option>
            <option value='price'>قیمت</option>
            <option value='flightTime'>زمان پرواز</option>
          </select>
        </div>
        <>
          <div className='grid grid-flow-row sm:grid-flow-col'>
            <div className='col-span-3 py-4 h-full'>
              <SideBar />
            </div>
            <div className='col-span-9'>
              {flightsListState?.changableFlights?.pricedItineraries?.map((item: any) => (
                <React.Fragment key={item.fareSourceCode}>
                  <div className='py-4'>
                    <FlightCard flight={item} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      </FlightsContext.Provider>
    </Container>
  )
}

export default FlightsTemplate
