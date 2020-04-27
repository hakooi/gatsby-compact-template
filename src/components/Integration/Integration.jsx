/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
import '@brainhubeu/react-carousel/lib/style.css'
// import { Link } from 'gatsby'
import './Integration.css'

import Snapchat from '../../../static/logos/svg/Snapchat.svg'
import Airbnb from '../../../static/logos/svg/Airbnb.svg'
import Uber from '../../../static/logos/svg/Uber.svg'
import Spotify from '../../../static/logos/svg/Spotify.svg'
import Twitter from '../../../static/logos/svg/Twitter.svg'

class Integration extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <section className="integration container mx-auto">
        <h3 className="text-4xl text-center font-bold my-6 ">
          Useful Integrations
        </h3>
        <p className="text-xl my-6 text-center">
          You can connect your account with this bleeding edge services
        </p>
        <div className="integration__content">
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Snapchat} alt="snapchat" />
              Snapchat
            </div>
          </div>
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Spotify} alt="snapchat" />
              Spotify
            </div>
          </div>
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Uber} alt="snapchat" />
              Uber
            </div>
          </div>
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Snapchat} alt="snapchat" />
              Snapchat
            </div>
          </div>
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Airbnb} alt="snapchat" />
              Airbnb
            </div>
          </div>
          <div className="integration__content-item">
            <div className="integration__content-wrapper ">
              <img src={Twitter} alt="snapchat" />
              Twitter
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Integration
