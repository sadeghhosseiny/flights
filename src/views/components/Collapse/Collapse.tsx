import { FunctionComponent, HTMLAttributes, useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import GeneralDescriptions from '../GeneralDescriptions/GeneralDescriptions'

interface IOneWayCollapseProps extends HTMLAttributes<Element> {
  className?: string
  flightDetail: any
}

const icons = {
  chevronUp: () => <ChevronUpIcon color='orange' width={16} />,
  chevronDown: () => <ChevronDownIcon color='orange' width={16} />,
}

const Collapse: FunctionComponent<IOneWayCollapseProps> = (props) => {
  const { children, flightDetail } = props
  const detail = flightDetail?.flightSegments[0]

  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)

  return (
    <div className='mt-3'>
      <div className='flex px-3 items-center justify-between content-center'>
        <GeneralDescriptions detail={detail} />
        <div className='flex items-center py-2 px-1 cursor-pointer' onClick={toggle}>
          <div className='mr-1 text-sm text-orange-500 dark:text-grey-200'>
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
