import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'

interface ITicketDetailCardProps extends HTMLAttributes<Element> {
  className?: string
}

const TicketDetailCard: FunctionComponent<ITicketDetailCardProps> = () => {
  return (
    <div className='flex flex-col items-center p-3 border-r border-gray-200 gap-y-2'>
      <Text>یک نفر</Text>
      <div className='flex gap-1'>
        <Text className='text-blue-700 font-semibold text-xl'>{(1370000).toLocaleString()}</Text>
        <Text className='text-gray-500 text-sm'>تومان</Text>
      </div>
      <Button className='px-12' color='bg-blue-700'>
        انتخاب بلیط
      </Button>
    </div>
  )
}

export default TicketDetailCard
