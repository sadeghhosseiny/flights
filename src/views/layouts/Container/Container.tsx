import { createElement, FunctionComponent, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IContainerProps extends HTMLAttributes<Element> {
  className?: string
  component?: React.ElementType
}

const Container: FunctionComponent<IContainerProps> = (props) => {
  const { component, className, ...otherProps } = props

  return createElement(component || 'div', {
    ...otherProps,
    className: twMerge('mx-auto max-w-9/10 md:max-w-8/10', className),
  })
}

export default Container
