/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'
import Layout from '../layout'
import BlogListing from '../components/Blog/BlogPage'
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
    return (
      <Layout>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <BlogListing postEdges={postEdges} />
      </Layout>
    )
  }
}

export default BlogPage
