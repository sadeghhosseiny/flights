import { Dispatch, FunctionComponent, HTMLAttributes, SetStateAction } from 'react'
import Text from '../Text/Text'
import { XMarkIcon } from '@heroicons/react/24/outline'
import useHandleScroll from '../../../hooks/useHandleScroll'

interface IModalProps extends HTMLAttributes<Element> {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: FunctionComponent<IModalProps> = (props) => {
  const { children, setIsModalOpen } = props

  const { unlockScroll } = useHandleScroll()

  const handleCloseModal = () => {
    unlockScroll()
    setIsModalOpen((prev) => !prev)
  }

  return (
    <div className='fixed bg-white z-10 w-full h-full overflow-y-auto overflow-x-hidden top-0 left-0'>
      <header className='flex justify-between p-3'>
        <Text>جزئیات پرواز</Text>
        <XMarkIcon onClick={handleCloseModal} width='24px' />
      </header>
      {children}
    </div>
  )
}

export default Modal
