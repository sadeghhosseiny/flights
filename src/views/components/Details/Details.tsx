import { FunctionComponent, HTMLAttributes } from 'react'
import AirLineCard from '../AirLineCard/AirLineCard'
import Text from '../Text/Text'
import DurationLine from '../DurationLine/DurationLine'
import TimeLocationInformation from '../TimeLocationInformation'
import Descriptions from '../Descriptions/Descriptions'
import PersonsTable from '../PersonsTable/PersonsTable'
import { getTime } from '../../../utils/date'
import useDetailContext from '../../../contexts/DetailContext/useDetailContext'

interface IDetailsProps extends HTMLAttributes<Element> {
  className?: string
}

const Details: FunctionComponent<IDetailsProps> = (props) => {
  const { sourceCity, arrivalCity, flightSegments, airItineraryPricingInfo, isSystem } =
    useDetailContext()

  return (
    <div>
      <Text className='my-5 text-base sm:text-lg px-3 font-bold'>
        پرواز رفت {sourceCity.cityFa} - {arrivalCity.cityFa}
      </Text>
      <div className='flex items-center px-3 gap-7 mt-3'>
        <AirLineCard className='flex mb-16 sm:mb-0 gap-3 flex-col' width='40px' height='40px' />
        <DurationLine
          direction='flex-col'
          borderStyle='dotted'
          borderWidth='border-r-4'
          lineWidth='0'
          width='w-[4px]'
          height='h-[330px] sm:h-36'
        />
        <div className='flex flex-col gap-6 self-start'>
          <TimeLocationInformation
            time={getTime(flightSegments.departureDateTime)}
            flightSegments={flightSegments}
            city={sourceCity}
          />
          <Descriptions isSystem={isSystem} flightSegments={flightSegments} />
          <TimeLocationInformation
            time={getTime(flightSegments.arrivalDateTime)}
            flightSegments={flightSegments}
            city={arrivalCity}
          />
        </div>
      </div>
      <div className='px-4 mt-8'>
        <PersonsTable airItineraryPricingInfo={airItineraryPricingInfo} />
      </div>
    </div>
  )
}

export default Details
