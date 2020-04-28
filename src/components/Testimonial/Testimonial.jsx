/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import User1 from '../../../static/asset/rita.webp'
// import { Link } from 'gatsby'
import './Testimonial.css'

class Testimonials extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <section className="-mx-12 my-24">
        <h3 className="text-4xl text-center font-bold my-12">
          What are people saying
        </h3>
        <Carousel
          slidesPerPage={2}
          autoPlay={2000}
          animationSpeed={1000}
          dots
          centered
          infinite
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false,
            },
            900: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}
        >
          <div className="testimonial__content">
            <div className="testimonial__content-item ">
              <img src={User1} alt="Rita" />
              <h3 className="text-2xl font-bold">Rita Hooh</h3>
              <span className="text-sm">Violist, sax xarepmoo</span>
              <p className="text-xl mt-6 leading-snug">
                With Pokooi my music streaming accessibility enhanced to the
                next level and undergo higher level consciousness, great job for
                pokooi team
              </p>
            </div>
          </div>
          <div className="testimonial__content">
            <div className="testimonial__content-item ">
              <img src={User1} alt="Rita" />
              <h3 className="text-2xl font-bold">Rita Hooh</h3>
              <span className="text-sm">Violist, sax xarepmoo</span>
              <p className="text-xl mt-6 leading-snug">
                With Pokooi my music streaming accessibility enhanced to the
                next level and undergo higher level consciousness, great job for
                pokooi team
              </p>
            </div>
          </div>
          <div className="testimonial__content">
            <div className="testimonial__content-item ">
              <img src={User1} alt="Rita" />
              <h3 className="text-2xl font-bold">Rita Hooh</h3>
              <span className="text-sm">Violist, sax xarepmoo</span>
              <p className="text-xl mt-6 leading-snug">
                With Pokooi my music streaming accessibility enhanced to the
                next level and undergo higher level consciousness, great job for
                pokooi team
              </p>
            </div>
          </div>
        </Carousel>
      </section>
    )
  }
}

export default Testimonials
