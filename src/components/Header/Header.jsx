/** @jsx jsx */

import { jsx, IconButton, NavLink } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
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
            Pokooi
          </Link>
          <div sx={{ mx: 'auto' }} />
          <NavLink>
            <Link
              to="/"
              sx={{
                variant: 'styles.navlink',
                ml: 3,
                py: 2,
              }}
            >
              Home
            </Link>
          </NavLink>

          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              ml: 3,
              py: 2,
            }}
          >
            Plans
          </Link>
          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              ml: 3,
              py: 2,
            }}
          >
            About
          </Link>
          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              ml: 3,
              py: 2,
            }}
          >
            Contact-us
          </Link>
          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              ml: 3,
              py: 2,
            }}
          >
            <IconButton aria-label="Shop">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentcolor"
              >
                <circle
                  r={11}
                  cx={12}
                  cy={12}
                  fill="none"
                  stroke="currentcolor"
                  strokeWidth={2}
                />
              </svg>
            </IconButton>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
