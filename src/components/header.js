
 /** @jsx jsx */
 import { jsx } from 'theme-ui'

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 sx={{
      // values referencing scales defined in a theme
      color: 'primary',
      // bg: 'lightgray',
      fontFamily: 'body',
      // boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
    }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
