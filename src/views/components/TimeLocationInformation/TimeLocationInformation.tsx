import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import { convertRawDateToPersianDate, convertRawDateToUsDate } from '../../../utils/date'

interface ITimeLocationInformationProps extends HTMLAttributes<Element> {
  className?: string
  data: any
  time: any
  city: {
    cityFa: string
    cityId: string
  }
}

const TimeLocationInformation: FunctionComponent<ITimeLocationInformationProps> = (props) => {
  const { city, data, time } = props

  const arrivalRawDate = data.arrivalDateTime.split('T')[0]
  const departureDateTime = data.departureDateTime.split('T')[0]

  return (
    <div className='flex flex-col sm:flex-row gap-5 items-start'>
      <div className='flex gap-2 pl-3 sm:border-l sm:border-l-gray-300'>
        <Text className='font-bold'> {time} </Text>
        <Text>
          {city.cityFa} ({city.cityId})
        </Text>
      </div>
      <div className='pl-3 sm:border-l sm:border-l-gray-300'>
        <Text>
          {convertRawDateToPersianDate(arrivalRawDate)} ({convertRawDateToUsDate(departureDateTime)}
          )
        </Text>
      </div>
      <div className='pl-3 sm:border-l sm:border-l-gray-300'>
        <Text className='text-gray-400'>Imam Khomeini Intl</Text>
      </div>
    </div>
  )
}

export default TimeLocationInformation
