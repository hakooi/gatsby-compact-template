import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import NotFound from '../components/404/NotFound'

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`404 | ${config.siteTitle}`} />
          <NotFound />
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
