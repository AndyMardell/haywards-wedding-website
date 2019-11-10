import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.div`
  ${({ columns }) =>
    columns &&
    `
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    & > * {
      width: 42%;

      @media only screen and (max-width: 700px) {
        width: 100%;
      }
    }
  `}
`

const Content = ({ children, columns, className, style }) => (
  <StyledContent columns={columns} className={className} style={style}>
    {children}
  </StyledContent>
)

Content.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Content
