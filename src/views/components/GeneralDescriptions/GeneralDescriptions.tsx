import { FunctionComponent } from 'react'
import Pill from '../Pill/Pill'
import Text from '../Text/Text'
import { FlightSegment } from '../../../types/flightsTypes.types'

interface IGeneralDescriptionsProps {
  detail: FlightSegment
}

const GeneralDescriptions: FunctionComponent<IGeneralDescriptionsProps> = (props) => {
  const { detail } = props
  return (
    <div className='flex border-y sm:border-none sm:border-gray-300 py-2 my-2 justify-center items-center gap-2'>
      {detail?.isCharter && (
        <>
          <Pill className='sm:text-sm'>چارتر</Pill> <span>.</span>
        </>
      )}
      <Text className='sm:text-sm'>اکونومی</Text>.
      <Text className='sm:text-sm'>{detail?.seatsRemaining} صندلی خالی</Text>.
      <Text className='sm:text-sm'>شماره پرواز : {detail?.flightNumber}</Text>.
      <Text className='hidden sm:text-sm sm:block'>تامین کننده: پرایس لاین</Text>
      <span className='hidden sm:text-sm sm:inline-block'>.</span>
    </div>
  )
}

export default GeneralDescriptions
