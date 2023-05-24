import { createElement, ElementType, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ICheckBoxProps extends HTMLAttributes<Element> {
  type?: string
  name?: string
  min?: number
  max?: number
  component?: ElementType
  disabled?: boolean
}

const CheckBox: FunctionComponent<ICheckBoxProps> = (props) => {
  const { component = 'input', className, type, name, ...otherProps } = props
  const { disabled } = otherProps

  const defaultStyle = twMerge(
    ` bg-white
    border-2 border-gray-400
    w-5 h-5 dark:bg-grey-200 
    cursor-pointer rounded-lg transition
  `,
    disabled ? 'bg-grey-400 dark:bg-grey-500 cursor-default' : '',
  )

  return createElement(component, {
    className: twMerge(defaultStyle, className),
    type,
    name,
    ...otherProps,
  })
}

export default CheckBox
