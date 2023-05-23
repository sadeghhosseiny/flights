import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import { ObjectType } from 'typescript'

interface IPersonsTableProps extends HTMLAttributes<Element> {
  className?: string
  airItineraryPricingInfo: any
}

const PersonsTable: FunctionComponent<IPersonsTableProps> = (props) => {
  const { airItineraryPricingInfo } = props

  const quantity = airItineraryPricingInfo.passengerTypeQuantity.quantity
  const ticketFee = airItineraryPricingInfo.passengerFare.totalFare / 10
  const typeOfPassenger = airItineraryPricingInfo.passengerTypeQuantity.passengerType

  const finalFee = quantity * ticketFee

  const typesOfPassengers = {
    Adt: 'بزرگسال',
    Chd: 'کودک',
    Bby: 'نوزاد',
  }

  return (
    <table className='w-full border-collapse border border-slate-400'>
      <thead>
        <tr>
          {typeOfPassenger === 'Adt' && (
            <th className='border font-normal p-3 border-slate-300'>
              <Text component='span'>{quantity} x </Text>
              <Text component='span'>
                {' '}
                {typesOfPassengers[typeOfPassenger as keyof typeof typesOfPassengers]}{' '}
              </Text>
              <Text component='span'>{ticketFee.toLocaleString()}</Text>
            </th>
          )}
          {typeOfPassenger === 'Chd' && (
            <th className='border font-normal border-slate-300'>
              <Text component='span'>1 x</Text>
              <Text component='span'> کودک </Text>
              <Text component='span'>{(1370000).toLocaleString()}</Text>
            </th>
          )}
          {typeOfPassenger === 'Bby' && (
            <th className='border font-normal border-slate-300'>
              <Text component='span'>1 x</Text>
              <Text component='span'> نوزاد </Text>
              <Text component='span'>{(1370000).toLocaleString()}</Text>
            </th>
          )}
          <th className='border border-slate-300'>
            <Text component='span'>مجموع : </Text>
            <Text component='span' className='text-blue-500'>
              {finalFee.toLocaleString()}
            </Text>
          </th>
        </tr>
      </thead>
    </table>
  )
}

export default PersonsTable
