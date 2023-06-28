import { useState } from 'react'
import Image from 'next/legacy/image'

import Activelink from '../Activelink/Activelink'

import Links from './config/Links'

const NavBar = () => {
  const [section, setSection] = useState('inicio')
  const scrollToNode = (node) => {
    document.getElementById(node).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="shadow-gray fixed inset-x-0 top-0 z-50 bg-white p-0 shadow-md">
        <div className="flex items-center justify-between border-b-2 border-gray-100 p-2 sm:p-4 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Activelink href="/" className="flex items-center justify-between space-x-2">
              <a>
                <div className="hidden h-8 w-8 overflow-hidden rounded-full border border-solid border-gray-300 sm:flex">
                  <Image src="/images/fisioluxury/logo.jpg" alt="" width={32} height={32} />
                </div>
                <span className="text-xs text-black sm:text-sm">Fisioluxury</span>
              </a>
            </Activelink>
          </div>
          <nav className="mx-0 my-2 flex md:space-x-4">
            {Links.map((e, i) => (
              <button
                onClick={() => {
                  scrollToNode(e.name)
                  setSection(e.name)
                }}
                key={i}
                className={`bg-transparent text-xs text-gray-500 hover:text-gray-900 sm:text-sm ${
                  e.name === section ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {e.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar
