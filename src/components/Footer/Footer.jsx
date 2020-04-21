/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
import UserLinks from '../UserLinks/UserLinks'
import './Footer.css'

class Footer extends Component {
  render() {
    const { config } = this.props
    const url = config.siteRss
    const { copyright } = config
    if (!copyright) {
      return null
    }
    return (
      <footer
        className="footer"
        sx={{
          fontSize: 1,
          variant: 'styles.footer',
        }}
      >
        <Container p={9} bg="red">
          <UserLinks config={config} labeled />

          <div
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 32px)',
              gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
              gridAutoFlow: 'column',
              px: 2,
              py: 4,
            }}
          >
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              Home
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Work
            </Link>
            <Link to="/blog" sx={{ variant: 'styles.navlink', p: 2 }}>
              Blog
            </Link>
            <Link to="/about" sx={{ variant: 'styles.navlink', p: 2 }}>
              About
            </Link>
            <Link to="/design-system" sx={{ variant: 'styles.navlink', p: 2 }}>
              Design System
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Contact
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Products
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Contact
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Products
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.navlink', p: 2 }}>
              Contact
            </Link>
          </div>
          <div className="notice-container">
            <h4>{copyright}</h4>

            <Link to={url}>
              <button>Subscribe</button>
            </Link>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 3,
              }}
            >
              <Link to="/privacy-policy" sx={{ color: 'inherit' }}>
                Privacy Policy
              </Link>
              <div sx={{ mx: 1 }} />
              <Link to="/terms-of-use" sx={{ color: 'inherit' }}>
                Terms of Use
              </Link>
              <div sx={{ mx: 1 }} />© 2019 Jane Doe
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
