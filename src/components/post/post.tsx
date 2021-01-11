import React from 'react'

import * as S from './post.styles'

function Post({ title, date, description, slug, timeToRead }) {
  return (
    <S.Post to={slug}>
      <S.Title>{title}</S.Title>
      <S.Date>
        {date} • {Math.round(timeToRead)} min de leitura
      </S.Date>
      <S.Text>{description}</S.Text>
    </S.Post>
  )
}

export default Post
