import React from 'react'
import { FaCoins, FaSquare } from 'react-icons/fa'
import { FiSquare } from 'react-icons/fi'
import SafLogo from './saflogo'
import MobileNav from './mobilenav'

function NavBar() {
  return (
    <div>
        <nav className="fixed top-0 z-50 bg-white border-b-[1.5px] border-gray-500  shadow-md w-full">
          <div className="flex fixed mt-6.5 mr-8 ml-6"><MobileNav /></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            <div className="flex justify-between items-center h-[80px]">
              
              {/* Left side */}
              <div className="flex space-x-6 items-center text-[14px]">
                <SafLogo />

                {/* Right side links - hidden on large screens */}
                <div className="hidden lg:flex space-x-14 items-center text-[15px]">
                  {/* CREATE IMPACT */}
                   <div className="relative group flex items-center gap-2 font-bold">
                    <a
                      href="/donate"
                      className="flex items-center gap-2 group hover:underline hover:decoration-blue-600 hover:decoration-2 underline-offset-4 tracking-widest"
                    >
                      <span className="relative w-4 h-4">
                        <FiSquare className="absolute top-0 left-0 group-hover:hidden" />
                        <FaSquare className="absolute top-0 left-0 hidden group-hover:block text-blue-500" />
                      </span>
                      CREATE IMPACT
                    </a>
                  </div>

                  {/* ABOUT US */}
                  <div className="relative group flex items-center gap-2 font-bold">
                    <a
                      href="/how-we-work"
                      className="flex items-center gap-2 group hover:underline hover:decoration-blue-600 hover:decoration-2 underline-offset-4 tracking-widest"
                    >
                      <span className="relative w-4 h-4">
                        <FiSquare className="absolute top-0 left-0 group-hover:hidden" />
                        <FaSquare className="absolute top-0 left-0 hidden group-hover:block text-blue-500" />
                      </span>
                      ABOUT US
                    </a>
                  </div>

                  {/* WHY SAF? */}
                  <div className="relative group flex items-center gap-2 font-bold">
                    <a
                      href="why-saf"
                      className="flex items-center gap-2 group hover:underline hover:decoration-blue-600 hover:decoration-2 underline-offset-4 tracking-widest"
                    >
                      WHY SAF?
                    </a>
                  </div>
                </div>
              </div>

              {/* Give Button */}
    <a
      href="/donate"
      className="bg-blue-600 text-[15px] font-bold text-white px-2 py-2 rounded hover:bg-blue-500 transition tracking-widest h-[34px] flex items-center justify-center gap-2"
    >
      <FaCoins className="text-white text-[14px]" />
      GIVE
    </a>

            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar
