import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/components/c-layout.styl'

const Layout = ({ children, header, footer, main, menu, splash }) => (
  <div className={splash && 'layout--splash'}>
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
  header: PropTypes.boolean,
  footer: PropTypes.boolean,
  main: PropTypes.boolean,
  menu: PropTypes.boolean,
  splash: PropTypes.boolean
}

export default Layout
