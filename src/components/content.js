import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContent = styled.div`
  padding: 3%;

  ${({ columns }) =>
    columns &&
    `
    margin-top: 1em;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;

    & > div {
      width: 42%;
      padding: 2rem;

      @media only screen and (max-width: 700px) {
        width: 93%;
      }
    }
  `}
`

const Content = ({ children, columns }) => (
  <StyledContent columns={columns}>{children}</StyledContent>
)

Content.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.bool
}

export default Content
