import { FunctionComponent, HTMLAttributes } from 'react'
import Button from '../Button/Button'
import Text from '../Text/Text'
import { AirItineraryPricingInfo } from '../../../types/flightsTypes.types'

interface IMobileActionFooterProps extends HTMLAttributes<Element> {
  planePricingInfo: AirItineraryPricingInfo
}

const MobileActionFooter: FunctionComponent<IMobileActionFooterProps> = (props) => {
  const { ptcFareBreakdown } = props.planePricingInfo

  const planeFinancialDetails = ptcFareBreakdown[0]
  const passengersQuantity = planeFinancialDetails?.passengerTypeQuantity?.quantity
  const finalPrice = (planeFinancialDetails?.passengerFare?.totalFare / 10) * passengersQuantity

  return (
    <div className='flex w-full h-16 justify-between shadow-[0_-15px_20px_-10px_rgba(0,0,0,0.2)] absolute bottom-0 p-3'>
      <div className='flex flex-col sm:flex-row'>
        <Text>{passengersQuantity} نفر</Text>
        <div className='flex gap-1'>
          <Text className='text-blue-700 font-semibold text-xl'>{finalPrice.toLocaleString()}</Text>
          <Text className='text-gray-500 text-sm'>تومان</Text>
        </div>
      </div>
      <Button>انتخاب بلیط</Button>
    </div>
  )
}

export default MobileActionFooter
