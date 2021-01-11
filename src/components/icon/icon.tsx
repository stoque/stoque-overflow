import React from 'react'

type Props = {
  name: string
  className?: string
}

function Icon({ name, className }: Props) {
  return (
    <svg className={className}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon
