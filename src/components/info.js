import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledInfo = styled.div`
  position: relative;
  padding-left: 30px;
  font-size: 0.9em;
  ${fluidRange(
    {
      prop: 'margin-top',
      fromSize: '12px',
      toSize: '25px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'margin-bottom',
      fromSize: '12px',
      toSize: '25px'
    },
    '400px',
    '1000px'
  )}

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
    bottom: 0;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.light};
  }
`

const Info = ({ children }) => <StyledInfo>{children}</StyledInfo>

Info.propTypes = {
  children: PropTypes.node
}

export default Info
