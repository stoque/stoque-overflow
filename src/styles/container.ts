import styled from 'styled-components'

import { mobile } from './responsive'

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  min-width: 200px;
  width: 100%;

  ${mobile} {
    padding: 0 2.4rem;
  }
`

export default Container
