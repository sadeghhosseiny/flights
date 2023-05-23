import { FunctionComponent, HTMLAttributes, useContext, useEffect } from 'react'
import Text from '../Text/Text'
import DurationLine from '../DurationLine/DurationLine'
import { convertNumberTimeToTextTime, getTime } from '../../../utils/date'
import SourceAndDestination from '../SourceAndDestination/SourceAndDestination'

interface ITimeCardProps extends HTMLAttributes<Element> {
  className?: string
  data: any
  sourceCity: {
    cityFa: string
    cityId: string
  }
  arrivalCity: {
    cityFa: string
    cityId: string
  }
}

const TimeCard: FunctionComponent<ITimeCardProps> = (props) => {
  const { data, sourceCity, arrivalCity } = props
  return (
    <div className='flex items-center flex-grow'>
      <div className='flex flex-col items-end w-1/4'>
        <SourceAndDestination showTime time={getTime(data.departureDateTime)} city={sourceCity} />
      </div>
      <div className='flex flex-col justify-center items-center w-1/2'>
        <Text className='text-gray-400 text-sm'>
          {convertNumberTimeToTextTime(data.journeyDuration)}
        </Text>
        <DurationLine
          borderWidth='border-b'
          borderStyle='solid'
          lineWidth='w-full'
          width='w-1/2'
          height='1'
        />
      </div>
      <div className='flex flex-col items-start w-1/4'>
        <SourceAndDestination showTime time={getTime(data.arrivalDateTime)} city={arrivalCity} />
      </div>
    </div>
  )
}

export default TimeCard
