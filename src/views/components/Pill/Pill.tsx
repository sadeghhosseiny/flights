import { createElement, ElementType, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IPillProps extends HTMLAttributes<Element> {
  component?: ElementType
}

const Pill: FunctionComponent<IPillProps> = (props) => {
  const { component = 'div', className, ...otherProps } = props

  const defaultStyle =
    'bg-gray-200 py-1 px-2 text-primary text-xs sm:text-base rounded dark:text-grey-100'

  return createElement(component, {
    className: twMerge(defaultStyle, className),
    ...otherProps,
  })
}

export default Pill
