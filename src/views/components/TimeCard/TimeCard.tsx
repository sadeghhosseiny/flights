import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import DurationLine from '../DurationLine/DurationLine'

interface ITimeCardProps extends HTMLAttributes<Element> {
  className?: string
}

const TimeCard: FunctionComponent<ITimeCardProps> = () => {
  return (
    <div className='flex items-center flex-grow'>
      <div className='flex flex-col items-end w-1/4'>
        <Text className='text-2xl font-bold'>12:45</Text>
        <div className='flex gap-1 items-center'>
          <Text className='text-base'>تهران</Text>
          <Text className='text-gray-400 text-xs'>(THR)</Text>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-1/2'>
        <Text className='text-gray-400 text-sm'>۳ساعت و ۴۵ دقیقه</Text>
        <DurationLine
          borderWidth='border-b'
          borderStyle='solid'
          lineWidth='w-full'
          width='w-1/2'
          height='1'
        />
      </div>
      <div className='flex flex-col items-start w-1/4'>
        <Text className='text-2xl font-bold'>17:3</Text>
        <div className='flex gap-1 items-center'>
          <Text className='text-base'>استانبول</Text>
          <Text className='text-gray-400 text-xs'>(IST)</Text>
        </div>
      </div>
    </div>
  )
}

export default TimeCard
