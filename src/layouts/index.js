import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/components/c-layout.styl'

const Layout = ({ children, header, footer, main, menu, splash }) => (
  <div className={`layout  ${splash && 'layout--splash'}`}>
    {header !== false && <Header menu={menu} />}
    {main === false
      ? <>
        {children}
        {footer !== false && <Footer />}
      </>
      : <main>
        {children}
        {footer !== false && <Footer />}
      </main>
    }
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  main: PropTypes.bool,
  menu: PropTypes.bool,
  splash: PropTypes.bool
}

export default Layout
