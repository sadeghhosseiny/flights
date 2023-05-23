import { Dispatch, FunctionComponent, HTMLAttributes, SetStateAction } from 'react'
import Text from '../Text/Text'
import Button from '../Button/Button'
import { useDiscriptiveWindowSize } from '../../../hooks/useDiscriptiveWindowSize'
import useHandleScroll from '../../../hooks/useHandleScroll'

interface ITicketDetailCardProps extends HTMLAttributes<Element> {
  className?: string
  planePricingInfo: any
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>
}

const TicketDetailCard: FunctionComponent<ITicketDetailCardProps> = (props) => {
  const { ptcFareBreakdown } = props.planePricingInfo
  const { setIsModalOpen } = props

  const { mobile } = useDiscriptiveWindowSize()

  const { lockScroll } = useHandleScroll()

  const handleOpenModal = () => {
    lockScroll()
    setIsModalOpen?.((prev: boolean) => !prev)
  }

  const planeFinancialDetails = ptcFareBreakdown[0]
  const passengersQuantity = planeFinancialDetails?.passengerTypeQuantity?.quantity
  const finalPrice = props.planePricingInfo.itinTotalFare.totalFare / 10

  return (
    <div className='flex flex-row justify-between sm:flex-col items-center p-3 sm:border-r sm:border-gray-200 gap-y-2'>
      <div className='flex flex-col'>
        <Text className='text-right sm:text-center'>{mobile ? 'یک' : passengersQuantity} نفر</Text>
        <div className='flex gap-1'>
          <Text className='text-blue-700 font-semibold text-xl'>{finalPrice.toLocaleString()}</Text>
          <Text className='text-gray-500 text-sm'>تومان</Text>
        </div>
      </div>
      <Button onClick={handleOpenModal} className='px-4 sm:px-12' color='bg-blue-700'>
        {mobile ? 'جزئیات و انتخاب' : 'انتخاب بلیط'}
      </Button>
    </div>
  )
}

export default TicketDetailCard
