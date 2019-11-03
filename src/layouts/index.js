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
      toSize: '80px'
    },
    '400px',
    '1000px'
  )}

  main {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 2rem 1.45rem;
    padding-top: 0;
  }
`

const Layout = ({ children, header, footer, main, margin }) => (
  <StyledLayout>
    <Header />
    <main>
      {children}
      <Footer />
    </main>
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  main: PropTypes.bool,
  margin: PropTypes.bool
}

export default Layout
