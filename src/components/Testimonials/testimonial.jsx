/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx, Container } from 'theme-ui'
import { Component } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
// import { Link } from 'gatsby'
import illustration from '../../../static/logos/illustration.svg'
import fluid from '../../../static/logos/svg/fluid.svg'
import oval from '../../../static/logos/svg/Oval-illustration.svg'
// import './testimonial.css'

class Testimonials extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <Container sx={{ width: '90%' }}>
        <h3 className="text-4xl text-center bold ">Testimonials</h3>
        <Carousel
          slidesPerPage={2}
          autoPlay={2000}
          animationSpeed={1000}
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
          <img src={illustration} alt="illustration" />
          <img src={fluid} alt="fluid" />
          <img src={oval} alt="oval" />
        </Carousel>
      </Container>
    )
  }
}

export default Testimonials
