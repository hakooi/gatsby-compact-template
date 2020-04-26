/** @jsx jsx */

import { jsx, IconButton, NavLink } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
import Navigation from '../Nav/Nav'
import pokooi from '../../../static/logos/svg/pokooi.svg'
import './Header.css'
// import Illustration from '../../../static/logos/digital-marketing.svg'

// import UserLinks from '../UserLinks/UserLinks'

// import './Header.css'

class Header extends Component {
  render() {
    const { config } = this.props
    // const url = config.siteRss
    const { copyright } = config
    if (!copyright) {
      return null
    }
    return (
      <header
        className="header"
        sx={{
          variant: 'styles.header',
          boxShadow: 'lg',
        }}
      >
        <div
          sx={{
            width: ['80%', '90%'],
            mx: 'auto',
            px: 4,
            display: 'flex',
            alignItems: 'baseline',
          }}
        >
          <Link
            to="/"
            sx={{
              variant: 'styles.navlink',
              fontSize: 5,
              py: 2,
            }}
          >
            <img src={pokooi} alt="pokooi logo" />
          </Link>
          <div sx={{ mx: 'auto' }} />
          <Navigation />
        </div>
      </header>
    )
  }
}

export default Header
