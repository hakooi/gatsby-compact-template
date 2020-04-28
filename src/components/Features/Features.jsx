/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Illustration from '../../../static/logos/svg/Music-Tone.svg'
import './Features.css'

class Features extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <section className="features container mx-auto mt-12 mb-24">
        <h3 className="text-4xl text-center font-bold my-6 ">
          Hundred of Features
        </h3>
        <Tabs>
          <TabList>
            <Tab>
              <h4 className="text-xl font-bold">Bot Integration</h4>
              <p className="features__content leading-normal text-sm">
                Our bot integration service can give your streaming activities
                blissful
              </p>
            </Tab>
            <Tab>
              <h4 className="text-xl font-bold">Motion Sensing</h4>
              <p className="features__content leading-normal text-sm">
                Motion sensing ability can make you sense higher consciousness
                on feeling your stream
              </p>
            </Tab>
            <Tab>
              <h4 className="text-xl font-bold">AR Visualization</h4>
              <p className="features__content leading-normal text-sm">
                With our AR visualization your reality become more enhanced
                while you play your music
              </p>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="features-panel__left w-1/2 p-8">
              <h3 className="text-xl font-bold">Plentiful Bot services</h3>
              <p className="features__content leading-relaxed text-xl">
                With Vast choice of our bot integration services whether just to
                give extended feature for your stream or just adding laughful
                bot into your stream, we can provide it.
              </p>
            </div>
            <div className="features-panel__right">
              <img src={Illustration} alt="music tone" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="features-panel__left w-1/2 p-8">
              <h3 className="text-xl font-bold">Goes beyond imagination</h3>
              <p className="features__content leading-relaxed text-xl">
                With Vast choice of our bot integration services whether just to
                give extended feature for your stream or just adding laughful
                bot into your stream, we can provide it.
              </p>
            </div>
            <div className="features-panel__right">
              <img src={Illustration} alt="music tone" />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="features-panel__left w-1/2 p-8">
              <h3 className="text-xl font-bold">AR implementation</h3>
              <p className="features__content leading-relaxed text-xl">
                With Vast choice of our bot integration services whether just to
                give extended feature for your stream or just adding laughful
                bot into your stream, we can provide it.
              </p>
            </div>
            <div className="features-panel__right">
              <img src={Illustration} alt="music tone" />
            </div>
          </TabPanel>
        </Tabs>
      </section>
    )
  }
}

export default Features
