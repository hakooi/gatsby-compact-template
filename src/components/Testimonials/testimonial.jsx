/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
// import UserLinks from '../UserLinks/UserLinks'
import './testimonial.css'

class Testimonials extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <Container sx={{ width: '90%' }}>
        <div className="flex flex-col items-center m-8">
          <div className="w-full bg-hakooi rounded overflow-x-hidden flex snap-x h-16">
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-blue-600"
              id="slide-1"
            >
              Slide 1
            </div>
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-green-600"
              id="slide-2"
            >
              Slide 2
            </div>
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-red-600"
              id="slide-3"
            >
              Slide 3
            </div>
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-orange-600"
              id="slide-4"
            >
              Slide 4
            </div>
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-purple-600"
              id="slide-5"
            >
              Slide 5
            </div>
            <div
              className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-black relative"
              id="slide-6"
            >
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                className="h-full w-full object-cover absolute inset-0 z-10 opacity-25"
              />
              <h1 className="z-20 text-center">
                Any kind of content here, images too!
              </h1>
            </div>
          </div>

          <div className="flex mt-8">
            <a
              className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-1"
            >
              1
            </a>
            <a
              className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-2"
            >
              2
            </a>
            <a
              className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-3"
            >
              3
            </a>
            <a
              className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-4"
            >
              4
            </a>
            <a
              className="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-5"
            >
              5
            </a>
            <a
              className="w-8 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
              href="#slide-6"
            >
              6
            </a>
          </div>
        </div>
      </Container>
    )
  }
}

export default Testimonials
