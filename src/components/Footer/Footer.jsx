/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import { Link } from 'gatsby'
// import UserLinks from '../UserLinks/UserLinks'
import { Twitter, Facebook, Instagram } from 'react-feather'
import './Footer.css'
import pokooi from '../../../static/logos/svg/pokooi.svg'

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
          backgroundColor: 'light-gray',
          py: 24,
        }}
      >
        <Container sx={{ width: '90%' }}>
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <img src={pokooi} alt="pokooi" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-6">
                  General
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link text-orange-100"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Plans
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    About Us
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Features
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/about"
                    sx={{ variant: 'links.primary' }}
                  >
                    FAQ
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-6">
                  Integrate
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link text-orange-100"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Plans
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    About Us
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Features
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/about"
                    sx={{ variant: 'links.primary' }}
                  >
                    FAQ
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-6">
                  Support
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link text-orange-100"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Plans
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    About Us
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/"
                    sx={{ variant: 'links.primary' }}
                  >
                    Features
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    className="footer__link"
                    to="/about"
                    sx={{ variant: 'links.primary' }}
                  >
                    FAQ
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-6">
                  Follow US
                </span>
                <div className="flex flex-row justify-between">
                  <Link to="/" sx={{ color: 'inherit' }}>
                    <Twitter />
                  </Link>
                  <Link to="/" sx={{ color: 'inherit' }}>
                    <Facebook />
                  </Link>
                  <Link to="/" sx={{ color: 'inherit' }}>
                    <Instagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="notice-container sm:px-8">
            <h4>{copyright}</h4>
            <Link to={url}>
              <button type="button">Subscribe</button>
            </Link>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 3,
              }}
            >
              <Link to="/" sx={{ color: 'inherit' }}>
                Privacy Policy
              </Link>
              <div sx={{ mx: 1 }} />
              <Link to="/" sx={{ color: 'inherit' }}>
                Terms of Use
              </Link>
              <div sx={{ mx: 1 }} />
              Hakooi
            </div>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
