import { FunctionComponent, HTMLAttributes } from 'react'
import Text from '../Text/Text'

interface IAirLineCardProps extends HTMLAttributes<Element> {
  className?: string
  width?: string
  height?: string
}

const AirLineCard: FunctionComponent<IAirLineCardProps> = (props) => {
  return (
    <div className={props.className}>
      <img
        src={process.env.PUBLIC_URL + '/images/W5_3.png'}
        width={props.width}
        height={props.height}
        alt='mahan_logo'
      />
      <Text component='span' className='text-sm'>
        ماهان
      </Text>
    </div>
  )
}

export default AirLineCard
