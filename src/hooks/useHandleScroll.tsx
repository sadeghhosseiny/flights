import { useCallback } from 'react'

const useHandleScroll = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '17px'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }, [])
  return { lockScroll, unlockScroll }
}

export default useHandleScroll
