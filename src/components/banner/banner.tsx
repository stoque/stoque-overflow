import React from 'react'

import * as S from './banner.styles'

type Props = {
  image: {
    aspectRatio: number
    base64: string
    sizes: string
    src: string
    srcSet: string
  }
}

function Banner({ image }: Props) {
  return <S.Banner fluid={image} />
}

export default Banner
