/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import Helmet from 'react-helmet'

import { graphql, Link } from 'gatsby'
import BlogListing from '../components/Blog/BlogPage'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import SEO from '../components/SEO/SEO'

// import About from '../components/About/About'
import config from '../../data/SiteConfig'

// Get a full list of markdown posts
export const allPageQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`

class BlogPage extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    // const { children } = this.props
    return (
      <div>
        <Header config={config} />
        <div className="layout-container">
          <Helmet>
            {/* <link rel="icon" href={favicon} /> */}
            <meta name="description" content={config.siteDescription} />
            <html lang="en" />
          </Helmet>
          <BlogListing postEdges={postEdges} />
        </div>
        <Footer config={config} />
      </div>
    )
  }
}

export default BlogPage
