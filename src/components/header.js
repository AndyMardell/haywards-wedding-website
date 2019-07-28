import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, hero }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  hero: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
