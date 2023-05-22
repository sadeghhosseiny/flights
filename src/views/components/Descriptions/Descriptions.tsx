import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'

interface IDescriptionsProps extends HTMLAttributes<Element> {
  className?: string
}

const Descriptions: FunctionComponent<IDescriptionsProps> = (props) => {
  return (
    <div className='grid grid-flow-row grid-row-3 gap-2'>
      <div className='grid grid-flow-row-dense grid-cols-3 gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>مدت پرواز</Text>
          <Text className='text-sm'>۳ ساعت و 45 دقیقه</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>نوع پرواز</Text>
          <Text className='text-sm'>سیستمی</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>استرداد</Text>
          <Text className='text-sm text-red-500'>غیر قابل استرداد</Text>
        </div>
      </div>
      <div className='grid grid-flow-row-dense grid-cols-3 gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>نوع هواپیما</Text>
          <Text className='text-sm'>Airbus A320</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>بار مجاز</Text>
          <Text className='text-sm'>۲۰ کیلوگرم</Text>
        </div>
        <div />
      </div>
      <div className='grid grid-flow-row-dense grid-cols-3 gap-20'>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>کلاس پرواز</Text>
          <Text className='text-sm'>اکونومی</Text>
        </div>
        <div className='flex gap-6'>
          <Text className='text-sm text-gray-400'>کلاس نرخی</Text>
          <Text className='text-sm'>A</Text>
        </div>
        <div />
      </div>
    </div>
  )
}

export default Descriptions
