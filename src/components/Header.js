import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  color: #eee;
  margin-bottom: 100px;
  padding-top: 30px;
  text-align: center;
`

const Header = () => (
  <StyledHeader>
    <h1>Random Quote Generator</h1>
  </StyledHeader>
)

export default Header
