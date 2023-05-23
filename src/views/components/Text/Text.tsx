import { createElement, ElementType, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITextProps extends HTMLAttributes<Element> {
  component?: ElementType
}

const Text: FunctionComponent<ITextProps> = (props) => {
  const { component = 'div', className, ...otherProps } = props

  const defaultStyle = 'text-primary text-xs sm:text-base dark:text-grey-100'

  return createElement(component, {
    className: twMerge(defaultStyle, className),
    ...otherProps,
  })
}

export default Text
