import { FunctionComponent, HTMLAttributes } from 'react'

interface IDurationLineProps extends HTMLAttributes<Element> {
  className?: string
  direction?: string
  borderStyle: string
  borderWidth: string
  lineWidth: string
  width: string
  height: string
}

const DurationLine: FunctionComponent<IDurationLineProps> = (props) => {
  return (
    <div
      className={`flex ${props.direction} ${props.lineWidth} justify-center self-start sm:self-auto items-center`}
    >
      <div className='w-3 h-3 border-red-400 border-2 rounded-full' />
      <div
        style={{ borderStyle: props.borderStyle }}
        className={`${props.width} ${props.height} border-${props.borderStyle} ${props.borderWidth} border-gray-300`}
      />
      <div className='w-3 h-3 border-blue-400 border-2 rounded-full' />
    </div>
  )
}

export default DurationLine
