import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.div`
  ${({ narrow }) =>
    narrow &&
    `
     max-width: 550px;
     margin-left: auto;
     margin-right: auto;
   `}

  ${({ columns, top }) =>
    columns &&
    `
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    align-items: ${top ? 'top' : 'center'};

    & > * {
      width: 42%;

      @media only screen and (max-width: 700px) {
        width: 100%;
      }
    }
  `}
`

const Content = ({ children, columns, top, className, style, narrow }) => (
  <StyledContent
    columns={columns}
    top={top}
    className={className}
    style={style}
    narrow={narrow}
  >
    {children}
  </StyledContent>
)

Content.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.bool,
  top: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  narrow: PropTypes.bool
}

export default Content
