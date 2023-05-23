import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import { convertNumberTimeToTextTime } from '../../../utils/date'

interface IDescriptionsProps extends HTMLAttributes<Element> {
  className?: string
  flightSegments: any
  isSystem: boolean
}

const Descriptions: FunctionComponent<IDescriptionsProps> = (props) => {
  const { flightSegments, isSystem } = props
  return (
    <div className='grid grid-flow-row sm:grid-row-3 gap-2'>
      <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>مدت پرواز</Text>
          <Text className='text-sm'>
            {convertNumberTimeToTextTime(flightSegments.journeyDuration)}
          </Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>نوع پرواز</Text>
          <Text className='text-sm'>{isSystem ? 'سیستمی' : 'غیر سیستمی'}</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>استرداد</Text>
          <Text className={`text-sm ${flightSegments.isReturn ? '' : 'text-red-500'}`}>
            {flightSegments.isReturn ? 'قابل استرداد' : 'غیر قابل استرداد'}
          </Text>
        </div>
      </div>
      <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>نوع هواپیما</Text>
          <Text className='text-sm'>Airbus A320</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>بار مجاز</Text>
          <Text className='text-sm'>{flightSegments.baggage || '-'}</Text>
        </div>
        <div />
      </div>
      <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>کلاس پرواز</Text>
          <Text className='text-sm'>اکونومی</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>کلاس نرخی</Text>
          <Text className='text-sm'>{flightSegments.cabinClassCode}</Text>
        </div>
        <div />
      </div>
    </div>
  )
}

export default Descriptions
