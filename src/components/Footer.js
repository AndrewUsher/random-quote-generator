import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 0;

  p {
    color: #eee;
    font-size: 18px;
  }

  a {
    color: inherit;
  }
`

const Footer = () => (
  <StyledFooter>
    <p>
      Made with love and code by <a href="http://andrewusher.co">Andrew Usher</a>
    </p>
  </StyledFooter>
)

export default Footer
