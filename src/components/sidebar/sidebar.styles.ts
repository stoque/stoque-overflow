import styled from 'styled-components'

import { mobile, desktop } from '../../styles/responsive'

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: #0f0f0f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 1;

  ${mobile} {
    height: 200px;
    width: 100%;
  }

  ${desktop} {
    height: 100%;
    width: 400px;
  }
`

export const Author = styled.h1`
  font-size: 3.2rem;
  font-weight: normal;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const SocialNav = styled.nav`
  margin-top: 1.6rem;
`

export const SocialNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  li > a {
    color: #fd5e53;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Footer = styled.footer`
  font-size: 1.4rem;
  position: absolute;
  bottom: 3.2rem;

  ${mobile} {
    display: none;
  }
`
