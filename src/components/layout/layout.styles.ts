import styled from 'styled-components'
import { mobile, desktop } from '../../styles/responsive'

export const Content = styled.main`
  display: flex;

  ${mobile} {
    padding-top: 23.2rem;
  }

  ${desktop} {
    padding-left: 40rem;
    padding-top: 12.8rem;
  }
`
