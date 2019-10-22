import React from 'react'
import { StyledButton, StyledLinkButton } from './StyledButton'

export const Button = ( { children } ) => (
  <StyledButton>
    {children}
  </StyledButton>
)

export const LinkButton = ( { children, href } ) => (
  <StyledLinkButton href={href}>
    {children}
  </StyledLinkButton>
)