import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Container from '../styles/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404 Not Found" />
      <Content>
        <Container>
          <Title>404</Title>
          <Description>Parece que você se perdeu</Description>
        </Container>
      </Content>
    </Layout>
  )
}

export default NotFoundPage

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  text-align: center;
`

const Title = styled.h2`
  font-size: 8rem;
`

const Description = styled.p`
  font-size: 5rem;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
