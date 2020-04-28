/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
import './Hero.css'
// import illustration from '../../../static/logos/illustration.svg'
import fluid from '../../../static/logos/svg/fluid.svg'
import oval from '../../../static/logos/svg/Oval-illustration.svg'

export default class Hero extends Component {
  render() {
    return (
      <section className="flex">
        <img
          className="fluid-gradient absolute right-0 z-0 "
          src={fluid}
          alt="fluid gradient"
        />
        <div className="hero flex flex-wrap sm:flex-row justify-between py-12 my-24 relative">
          <div className="sm:w-2/5 flex flex-col sm:items-start sm:text-left">
            <h1 className="uppercase text-2xl font-bold leading-none tracking-wide mb-8">
              Pokooi
            </h1>
            <h2 className="uppercase text-4xl font-bold text-primary leading-relaxed tracking-widest mb-6">
              A New way to feel your Music
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Stream your music with the way you never feel it before
            </p>
            <a
              href="/"
              className="py-3 uppercase text-lg font-bold text-primary rounded-full"
            >
              Learn more
            </a>
          </div>

          <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 ">
            {/* <Img src={`/static/logos/svg/fluid.svg`} alt="fluid image" /> */}
          </div>
          <div className="flex flex-col md:flex-row md:mt-56">
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-1/2 p-6 sm:pl-12">
              <img className="z-10" src={oval} alt="fluid gradient " />
            </div>
            <div className="sm:w-2/5 flex flex-col sm:items-start sm:text-left">
              <h2 className="uppercase text-4xl  font-bold text-primary leading-relaxed tracking-widest mb-6">
                Music stream on steroid
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Pokooi give enhanced ability to your music streaming activities
                and greatly improve the way you feel when streaming music
              </p>
              <a
                href="/"
                className="py-3 uppercase text-lg font-bold text-primary rounded-full"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
