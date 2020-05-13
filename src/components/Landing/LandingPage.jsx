import React from 'react'
// import { Link } from 'gatsby'
import Hero from '../Hero/Hero'
import Feature from '../Features/Features'
import Testimonial from '../Testimonial/Testimonial'
import Integration from '../Integration/Integration'
import Support from '../Support/Support'

class PostListing extends React.Component {
  render() {
    // const postList = this.getPostList()
    return (
      <div>
        <Hero />
        <Feature />
        <Testimonial />
        <Integration />
        <Support />
      </div>
    )
  }
}
export default PostListing
