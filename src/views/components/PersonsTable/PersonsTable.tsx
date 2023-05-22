import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'

interface IPersonsTableProps extends HTMLAttributes<Element> {
  className?: string
}

const PersonsTable: FunctionComponent<IPersonsTableProps> = ({ children }) => {
  return (
    <table className='w-full border-collapse border border-slate-400'>
      <thead>
        <tr>
          <th className='border font-normal p-3 border-slate-300'>
            <Text component='span'>2 x </Text>
            <Text component='span'> بزرگسال </Text>
            <Text component='span'>{(1370000).toLocaleString()}</Text>
          </th>
          <th className='border font-normal border-slate-300'>
            <Text component='span'>1 x</Text>
            <Text component='span'> کودک </Text>
            <Text component='span'>{(1370000).toLocaleString()}</Text>
          </th>
          <th className='border font-normal border-slate-300'>
            <Text component='span'>1 x</Text>
            <Text component='span'> نوزاد </Text>
            <Text component='span'>{(1370000).toLocaleString()}</Text>
          </th>
          <th className='border border-slate-300'>
            <Text component='span'>مجموع : </Text>
            <Text component='span' className='text-blue-500'>
              {(1370000).toLocaleString()}
            </Text>
          </th>
        </tr>
      </thead>
    </table>
  )
}

export default PersonsTable
