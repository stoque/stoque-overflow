import styled from 'styled-components'

export const PostHeader = styled.header`
  text-align: center;
  margin-top: 3.2rem;
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.8rem;
`

export const PostDate = styled.small`
  font-size: 1.6rem;
  color: #73737d;
  display: block;
  margin-bottom: 6.4rem;
`

export const PostContent = styled.section`
  margin-bottom: 6.4rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  iframe {
    color: var(--postColor);
    font-size: 2rem;
    line-height: 1.7;
  }

  p {
    margin: 0 auto 2.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3.8rem auto 1.6rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
  }

  h1 {
    font-size: 4.4rem;
  }

  h2 {
    font-size: 3.3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2.2rem;
  }

  h5 {
    font-size: 1.9rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: #24292e;
    display: inline-block;
    text-decoration: none;
    position: relative;
    font-weight: 600;
    padding: 0 0.4rem;

    &:after {
      background: rgba(36, 41, 46, 0.5);
      bottom: 0.4rem;
      content: '';
      display: block;
      height: 0.4rem;
      left: 0;
      position: absolute;
      transition: height 0.2s ease-in-out;
      width: 100%;
      z-index: -1;
    }

    &:hover {
      color: #fff;

      &:after {
        background: #24292e;
        height: 72%;
      }
    }
  }

  .gatsby-highlight {
    margin-bottom: 2.6rem;
  }
`
