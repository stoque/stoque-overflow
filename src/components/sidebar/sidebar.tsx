import React from 'react'
import { Link } from 'gatsby'

import * as S from './sidebar.styles'

const socialMediaList = [
  { title: 'Twitter', href: 'https://twitter.com/stoqueoverflow' },
  { title: 'GitHub', href: 'https://github.com/stoque' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/lucastoque/' },
]

function Sidebar() {
  return (
    <S.SidebarWrapper>
      <div>
        <S.Author>
          <Link to="/">
            <strong>Stoque</strong> Overflow
          </Link>
        </S.Author>

        <S.SocialNav>
          <S.SocialNavList>
            {socialMediaList.map(({ title, href }) => (
              <li key={title}>
                <a href={href} target="blank" title={title}>
                  {title}
                </a>
              </li>
            ))}
          </S.SocialNavList>
        </S.SocialNav>
      </div>

      <S.Footer>Lucas Stoque © 2021</S.Footer>
    </S.SidebarWrapper>
  )
}

export default Sidebar
