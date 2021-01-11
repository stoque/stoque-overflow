import styled from 'styled-components'
import { Link } from 'gatsby'

export const Post = styled(Link)`
  border-radius: 30px;
  color: #fff;
  display: block;
  text-decoration: none;
  transition: color 0.1s linear;
  margin-bottom: 6.4rem;

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`

export const Title = styled.h2`
  font-size: 2.8rem;
  color: #fd5e53;
  margin-bottom: 0.8rem;
`

export const Date = styled.small`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
`
