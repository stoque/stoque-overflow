import React from 'react'

import GlobalStyles from '../../styles/global'
import Svgs from '../svgs'
import Sidebar from '../sidebar'
import * as S from './layout.styles'

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Svgs />

      <Sidebar />

      <S.Content>{children}</S.Content>
    </>
  )
}

export default Layout
