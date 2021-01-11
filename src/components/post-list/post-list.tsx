import React from 'react'

import Container from '../../styles/container'
import Post from '../post'
import * as S from './post-list.styles'

function PostList({ posts }) {
  return (
    <S.PostList>
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post
              key={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              slug={node.fields.slug}
              timeToRead={node.fields.readingTime.minutes}
            />
          )
        })}
      </Container>
    </S.PostList>
  )
}

export default PostList
