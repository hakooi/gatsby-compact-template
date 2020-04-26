/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import BlogPage from '../components/Blog/BlogPage'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './landing.css'

class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <Container sx={{ width: '90%', p: 3 }}>
          <div className="landing-container">
            <div className="posts-container">
              <Helmet title={config.siteTitle} />
              <SEO />
              <BlogPage postEdges={postEdges} />
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Blog

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
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
