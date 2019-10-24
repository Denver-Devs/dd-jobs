import styled, { css } from 'styled-components'

const styles = css`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  min-width: 160px;
  text-align: center;
  background-image: none;
  margin-bottom: 5px;
  margin-right: 20px;
  color: rgb(104, 104, 104);
  background-color: rgb(229, 232, 239);
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
`

export const StyledButton = styled.button`
  ${styles}
  cursor: pointer;
`

export const StyledLinkButton = styled.a`
  ${styles}
`