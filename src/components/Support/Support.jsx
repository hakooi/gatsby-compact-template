/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
import '@brainhubeu/react-carousel/lib/style.css'
// import { Link } from 'gatsby'
import { HelpCircle, PhoneCall, Mail } from 'react-feather'
import './support.css'

class Support extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <section className="support container mx-auto" sx={{ width: '90%' }}>
        <h3 className="text-4xl text-center bold ">Support</h3>
        <div className="support__content">
          <div className="support__content--left">
            <h3 className="text-4xl">
              Get to know Pokooi, and increase your next level streaming
              experience
            </h3>
            <p className="text-xl mt-6">
              <span>
                <a href="#">hello@pokooi.com</a>
              </span>
            </p>
          </div>
          <div className="support__content--right">
            <p className="text-xl">
              639 Heavens bridge, La meridia +62-202-555-0105 - +62-202-555-0234
              Working hours: 8AM - 5PM
            </p>
          </div>
        </div>
        <hr />
        <div className="support__content">
          <div className="content-item">
            <HelpCircle
              color="gray"
              className="text-center my-6 mx-auto"
              size={90}
            />
            <h4 className="text-2xl font-bold text-center">Help Center</h4>
            <p className="text-xl mt-6">
              Stuck on your own journey? Our FAQ page will give you headstart
              for common technical knowledges
            </p>
          </div>
          <div className="content-item">
            <PhoneCall
              color="gray"
              className="text-center my-6 mx-auto"
              size={90}
            />
            <h4 className="text-2xl font-bold text-center">Support</h4>
            <p className="text-xl mt-6">
              Our support team would be glad to bring support whenever you need
              us
            </p>
          </div>
          <div className="content-item">
            <Mail color="gray" className="text-center my-6 mx-auto" size={90} />
            <h4 className="text-2xl font-bold text-center">Contact</h4>
            <p className="text-xl mt-6">
              Don’t be shy, just reach us with a click on above button
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Support
