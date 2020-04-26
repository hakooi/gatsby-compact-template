/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import Helmet from 'react-helmet'

import { Link } from 'gatsby'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/SEO'

// import About from '../components/About/About'
import config from '../../data/SiteConfig'

class BlogPage extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header config={config} />
        <div className="layout-container">
          <Helmet>
            {/* <link rel="icon" href={favicon} /> */}
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          {children}
        </div>
        <Footer config={config} />
      </div>
    )
  }
}

export default BlogPage
