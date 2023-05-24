import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'
import { PtcFareBreakdown } from '../../../types/flightsTypes.types'

interface IPersonsTableProps extends HTMLAttributes<Element> {
  className?: string
  airItineraryPricingInfo: PtcFareBreakdown
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
        <tr className='flex flex-col sm:table-row'>
          {typeOfPassenger === 'Adt' && (
            <th className='flex justify-between sm:table-cell sm:border font-normal p-3 sm:border-slate-300'>
              <div className='flex sm:inline'>
                <Text component='span' className='text-sm'>
                  {quantity} x{' '}
                </Text>
                <Text component='span' className='text-sm'>
                  {' '}
                  {typesOfPassengers[typeOfPassenger as keyof typeof typesOfPassengers]}{' '}
                </Text>
              </div>
              <div className='sm:inline'>
                <Text component='span' className='text-sm'>
                  {ticketFee.toLocaleString()}
                </Text>
              </div>
            </th>
          )}
          {typeOfPassenger === 'Chd' && (
            <th className='sm:border font-normal sm:border-slate-300'>
              <div className='flex'>
                <Text component='span'>1 x</Text>
                <Text component='span'> کودک </Text>
              </div>
              <Text component='span'>{(1370000).toLocaleString()}</Text>
            </th>
          )}
          {typeOfPassenger === 'Bby' && (
            <th className='sm:border font-normal sm:border-slate-300'>
              <div className='justify-between sm:justify-normal flex'>
                <Text component='span'>1 x</Text>
                <Text component='span'> نوزاد </Text>
              </div>
              <Text component='span'>{(1370000).toLocaleString()}</Text>
            </th>
          )}
          <th className='flex justify-between sm:table-cell p-3 sm:border sm:border-slate-300'>
            <Text component='span' className='text-sm'>
              مجموع :{' '}
            </Text>
            <Text component='span' className='text-sm text-blue-500'>
              {finalFee.toLocaleString()}
            </Text>
          </th>
        </tr>
      </thead>
    </table>
  )
}

export default PersonsTable
