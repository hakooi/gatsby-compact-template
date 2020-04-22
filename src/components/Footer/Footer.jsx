/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
// import UserLinks from '../UserLinks/UserLinks'
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
        <Container sx={{ width: '90%', p: 3 }}>
          {/* <UserLinks config={config} labeled /> */}

          <div
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 32px)',
              gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
              gridAutoFlow: 'column',
            }}
          >
            <Link to="/" sx={{ p: 2 }}>
              Home
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Work
            </Link>
            <Link to="/blog" sx={{ variant: 'styles.a', p: 2 }}>
              Blog
            </Link>
            <Link to="/about" sx={{ variant: 'styles.a', p: 2 }}>
              About
            </Link>
            <Link to="/design-system" sx={{ variant: 'styles.a', p: 2 }}>
              Design System
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Contact
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Products
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Contact
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Products
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Community
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
              Support
            </Link>
            <Link to="#" sx={{ variant: 'styles.a', p: 2 }}>
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
              <Link to="/#" sx={{ color: 'inherit' }}>
                Privacy Policy
              </Link>
              <div sx={{ mx: 1 }} />
              <Link to="/#" sx={{ color: 'inherit' }}>
                Terms of Use
              </Link>
              <div sx={{ mx: 1 }} />© Hakooi
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
