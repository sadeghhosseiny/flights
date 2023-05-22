import { FunctionComponent, HTMLAttributes } from 'react'
import AirLineCard from '../AirLineCard/AirLineCard'
import Text from '../Text/Text'
import DurationLine from '../DurationLine/DurationLine'
import TimeLocationInformation from '../TimeLocationInformation'
import Descriptions from '../Descriptions/Descriptions'
import PersonsTable from '../PersonsTable/PersonsTable'

interface IDetailsProps extends HTMLAttributes<Element> {
  className?: string
}

const Details: FunctionComponent<IDetailsProps> = ({ children }) => {
  return (
    <div>
      <Text className='my-5 text-lg font-bold'>پرواز رفت تهران - استانبول</Text>
      <div className='flex items-center gap-7 mt-3'>
        <AirLineCard className='flex gap-3 flex-col' width='40px' height='40px' />
        <DurationLine
          direction='flex-col'
          borderStyle='dotted'
          borderWidth='border-r-4'
          lineWidth='0'
          width='w-[4px]'
          height='h-36'
        />
        <div className='flex flex-col gap-6 self-start'>
          <TimeLocationInformation />
          <Descriptions />
          <TimeLocationInformation />
        </div>
      </div>
      <div className='mt-8'>
        <PersonsTable />
      </div>
    </div>
  )
}

export default Details
