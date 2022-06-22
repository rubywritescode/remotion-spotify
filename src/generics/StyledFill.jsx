import styled from 'styled-components'
import { AbsoluteFill } from 'remotion'

export const StyledFill = styled(AbsoluteFill)`
  background: ${props => props.bg};
  flex-direction: ${props => props.flexdirection} !important;
`