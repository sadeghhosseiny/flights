import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'

interface ITimeLocationInformationProps extends HTMLAttributes<Element> {
  className?: string
}

const TimeLocationInformation: FunctionComponent<ITimeLocationInformationProps> = (props) => {
  return (
    <div className='flex gap-5 items-start'>
      <div className='flex pl-3 border-l border-l-gray-300'>
        <Text className='font-bold'>۱۲:۴۵</Text>
        <Text>تهران (THR)</Text>
      </div>
      <div className='pl-3 border-l border-l-gray-300'>
        <Text>۱۲ اردیبهشت ۱۳۹۹ (07 Apr)</Text>
      </div>
      <div className='pl-3 border-l border-l-gray-300'>
        <Text className='text-gray-300'>Imam Khomeini Intl</Text>
      </div>
    </div>
  )
}

export default TimeLocationInformation
