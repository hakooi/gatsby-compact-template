/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Component } from 'react'
// import { Link } from 'gatsby'
import './Hero.css'
export default class Hero extends Component {
  render() {
    return (
      <div>
        <main className="hero flex flex-col-reverse sm:flex-row justify-between items-center py-12">
          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="uppercase text-6xl text-blue-900 font-bold leading-none tracking-wide mb-2">
              Digital
            </h1>
            <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
              Marketing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum
              rutrum metus at enim congue scelerisque. Sed suscipit metu non
              iaculis semper consectetur adipiscing elit.
            </p>
            <a
              href="#"
              className="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
            >
              Learn more
            </a>
          </div>
          <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12"></div>
        </main>
      </div>
    )
  }
}
