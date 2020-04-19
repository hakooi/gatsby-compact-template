/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
// import UserLinks from '../UserLinks/UserLinks'

// import './Footer.css'

class Footer extends Component {
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
          py: 4,
          variant: 'styles.header',
        }}
      >
        {/* <UserLinks config={config} labeled /> */}
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <Link to="/" title="Home">
            <img
              alt="UI Logo"
              src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
            />
            <span
              sx={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                top: -9999,
              }}
            >
              Home
            </span>
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link
            to="/work"
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Work
          </Link>
          <Link
            to="/blog"
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Blog
          </Link>
          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            sx={{
              variant: 'styles.navlink',
              p: 2,
            }}
          >
            Contact
          </Link>
        </div>
      </header>
    )
  }
}

export default Footer
