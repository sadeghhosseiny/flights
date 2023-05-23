import { FunctionComponent } from 'react'
import Pill from '../Pill/Pill'
import Text from '../Text/Text'

interface IGeneralDescriptionsProps {
  detail: any
}

const GeneralDescriptions: FunctionComponent<IGeneralDescriptionsProps> = (props) => {
  const { detail } = props
  return (
    <div className='flex border-y sm:border-none sm:border-gray-300 py-2 my-2 justify-center items-center gap-2'>
      {detail?.isCharter && (
        <>
          <Pill>چارتر</Pill> <span>.</span>
        </>
      )}
      <Text>اکونومی</Text>.<Text>{detail?.seatsRemaining} صندلی خالی</Text>.
      <Text>شماره پرواز : {detail?.flightNumber}</Text>.
      <Text className='hidden sm:block'>تامین کننده: پرایس لاین</Text>
      <span className='hidden sm:inline-block'>.</span>
    </div>
  )
}

export default GeneralDescriptions
