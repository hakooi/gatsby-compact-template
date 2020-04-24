/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
import './Hero.css'
import illustration from '../../../static/logos/illustration.svg'
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
        <div className="hero flex flex-wrap sm:flex-row justify-between items-center py-12 my-24 relative">
          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="uppercase text-2xl text-blue-900 leading-none tracking-wide mb-8">
              Pokooi
            </h1>
            <h2 className="uppercase text-4xl text-orange-500 font-bold text-secondary leading-relaxed tracking-widest mb-6">
              A New way to feel your Music
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Stream your music with the way you never feel it before
            </p>
            <a
              href="#"
              className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
            >
              Learn more
            </a>
          </div>

          <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 ">
            {/* <Img src={`/static/logos/svg/fluid.svg`} alt="fluid image" /> */}
          </div>
          <div className="flex flex-row my-56">
            <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
              <img className="z-10" src={oval} alt="fluid gradient " />
            </div>
            <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h1 className="uppercase text-2xl text-blue-900 leading-none tracking-wide mb-8">
                Pokooi
              </h1>
              <h2 className="uppercase text-4xl text-orange-500 font-bold text-secondary leading-relaxed tracking-widest mb-6">
                A New way to feel your Music
              </h2>
              <p className="text-gray-600 leading-relaxed mb-12">
                Stream your music with the way you never feel it before
              </p>
              <a
                href="#"
                className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
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
