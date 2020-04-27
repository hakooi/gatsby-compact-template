/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './Features.css'

class Features extends Component {
  render() {
    // const { config } = this.props
    // const url = config.siteRss

    return (
      <section className="features container mx-auto">
        <h3 className="text-4xl text-center font-bold my-6 ">
          Hundred of Features
        </h3>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    )
  }
}

export default Features
