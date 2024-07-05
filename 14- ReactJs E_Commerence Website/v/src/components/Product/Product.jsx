import React from 'react'
import men from '../../img/men.webp'
import women from '../../img/women.webp'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    // Main Screen Product
    <section className="text-gray-600 body-font flex justify-center items-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Link to={'/menProduct'} className="p-4 md:w-1/2 lg:w-1/3 flex justify-center items-center">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl transition duration-500 ease-in-out">
              <img className="lg:h-96 md:h-72 sm:h-56 w-full object-cover object-center" src={men} alt="Men's Clothing" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Men Clothes</h1>
                <p className="leading-relaxed mb-3">Men's clothing often prioritizes comfort and versatility, blending classic styles with modern trends.</p>
                <div className="flex items-center flex-wrap">
                  <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:bg-indigo-500 transition duration-300 rounded p-1 justify-center hover:text-white">
                    Click here
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link to={'/womenProduct'} className="p-4 md:w-1/2 lg:w-1/3 flex justify-center items-center">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl transition duration-500 ease-in-out">
              <img className="lg:h-96 md:h-72 sm:h-56 w-full object-cover object-center" src={women} alt="Women's Clothing" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Women Clothes</h1>
                <p className="leading-relaxed mb-3">Women's clothing often prioritizes comfort and versatility, blending classic styles with modern trends.</p>
                <div className="flex items-center flex-wrap">
                  <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:bg-indigo-500 transition duration-300 rounded p-1 justify-center hover:text-white">
                    Click here
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Product



