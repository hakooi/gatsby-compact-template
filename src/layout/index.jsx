import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import favicon from '../../static/logos/favicon.ico'
import './index.css'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="layout-container">
        <Helmet>
          {/* <link rel="icon" href={favicon} /> */}
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header config={config} />
        {children}
        <Footer config={config} />
      </div>
    )
  }
}
