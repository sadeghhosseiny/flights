import { FunctionComponent, HTMLAttributes, useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'
import Pill from '../Pill/Pill'
import Text from '../Text/Text'

interface IOneWayCollapseProps extends HTMLAttributes<Element> {
  className?: string
}

const icons = {
  chevronUp: () => <ChevronUpIcon color='orange' width={16} />,
  chevronDown: () => <ChevronDownIcon color='orange' width={16} />,
}

const Collapse: FunctionComponent<IOneWayCollapseProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <div className='mt-3'>
      <div className='flex items-center justify-between content-center'>
        <div className='flex items-center gap-2'>
          <Pill>چارتر</Pill>.<Text>اکونومی</Text>.<Text>۷ صندلی خالی</Text>.
          <Text>شماره پرواز : 768</Text>.<Text>تامین کننده: پرایس لاین</Text>.
        </div>
        <div className='flex items-center py-2 px-1 cursor-pointer' onClick={toggle}>
          <div className='mr-1 text-sm text-orange-500 dark:text-grey-400 dark:text-grey-200'>
            {open ? 'بستن' : 'جزییات بیش تر'}
          </div>
          {icons[open ? 'chevronUp' : 'chevronDown']?.()}
        </div>
      </div>
      <div>{open ? children : ''}</div>
    </div>
  )
}

export default Collapse
