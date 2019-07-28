import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/app.styl'

const Layout = ({ children, location, hero }) => (
  <>
    <Header location={location} hero={hero} />
    <main>
      {children}
      <Footer />
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  hero: PropTypes.string
}

export default Layout
