import { FunctionComponent, HTMLAttributes } from 'react'
import Button from '../Button/Button'
import { PlaneLogo } from '../../../assets/icons/plane'

interface ITabsProps extends HTMLAttributes<Element> {
  className?: string
}

const Tabs: FunctionComponent<ITabsProps> = () => {
  return (
    <div className='flex mx-4 sm:mx-0 px-0 sm:px-3 border-b border-gray-300'>
      <Button className='flex rounded-b-none gap-3 items-center' color='bg-blue-700'>
        <PlaneLogo />
        جزئیات پرواز
      </Button>
    </div>
  )
}

export default Tabs
