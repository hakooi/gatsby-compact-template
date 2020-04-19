import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../../data/SiteConfig'
import './404.css'

class NotFound extends Component {
  render() {
    return (
      <div class="container">
        <Helmet title={`404 Not Found | ${config.siteTitle}`} />
        <h3>THIS IS 404 PAGE</h3>
      </div>
    )
  }
}

export default NotFound
