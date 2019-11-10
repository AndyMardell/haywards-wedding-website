import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import styled from 'styled-components'
import { fluidRange } from 'polished'

const StyledLayout = styled.div`
  ${fluidRange(
    {
      prop: 'margin-top',
      fromSize: '55px',
      toSize: '75px'
    },
    '400px',
    '1000px'
  )}
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 1.45rem;
  ${fluidRange(
    {
      prop: 'padding-left',
      fromSize: '20px',
      toSize: '40px'
    },
    '300px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'padding-right',
      fromSize: '20px',
      toSize: '40px'
    },
    '300px',
    '1000px'
  )}
`

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <Main>
      {children}
      <Footer />
    </Main>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
