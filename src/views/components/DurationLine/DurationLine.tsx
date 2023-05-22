import { createElement, ElementType, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

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
    <div className={`flex ${props.direction} ${props.lineWidth} justify-center items-center`}>
      <div className='w-3 h-3 border-red-400 border-2 rounded-full' />
      <div
        className={`${props.width} ${props.height} border-${props.borderStyle} ${props.borderWidth} border-gray-300`}
      />
      <div className='w-3 h-3 border-blue-400 border-2 rounded-full' />
    </div>
  )
}

export default DurationLine
