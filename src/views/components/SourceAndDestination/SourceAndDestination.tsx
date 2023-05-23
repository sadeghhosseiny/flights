import { FunctionComponent } from 'react'
import Text from '../Text/Text'

interface ISourceAndDestinationProps {
  showTime?: boolean
  time: string
  city: {
    cityFa: string
    cityId: string
  }
}

const SourceAndDestination: FunctionComponent<ISourceAndDestinationProps> = (props) => {
  const { time, showTime, city } = props
  return (
    <>
      {showTime && <Text className='text-2xl font-bold'>{time}</Text>}
      <div className='flex gap-1 items-center'>
        <Text className='text-base'>{city?.cityFa}</Text>
        <Text className='text-gray-400 text-xs'>({city?.cityId})</Text>
      </div>
    </>
  )
}

export default SourceAndDestination
