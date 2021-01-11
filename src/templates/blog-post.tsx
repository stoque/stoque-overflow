import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { mobile } from '../styles/responsive'
import Container from '../styles/container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { PostHeader, PostTitle, PostDate, PostContent } from '../styles/base'

function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const { title, description, date, hero } = post.frontmatter

  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} />

      <Article className="markdown-body">
        <Container>
          <PostHeader>
            <PostTitle>{title}</PostTitle>
            <PostDate>
              {date} • {Math.round(post.fields.readingTime.minutes)} min de
              leitura
            </PostDate>
          </PostHeader>

          <Banner image={hero.childImageSharp.fluid} />

          <PostContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </PostContent>
        </Container>
      </Article>
    </Layout>
  )
}

const Article = styled.article`
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mobile} {
    position: absolute;
    top: 232px;
    z-index: 2;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          minutes
        }
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        hero {
          childImageSharp {
            fluid(maxWidth: 2560, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
