import React from 'react'
import img from '../../img/ecom.webp'
const Hero = () => {
  return (
    <div>
        <div>
     <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font text-5xl mb-4 text-gray-800 poppins-medium">You Can Buy Anything
        <br/>
        <div className='text-indigo-500 pt-[9px]'>You Want</div>
      </h1>
      <p className="mb-8 leading-relaxed">In the bustling realm of online clothing retail, e-commerce provides a dynamic platform where fashion enthusiasts can explore an extensive array of styles, sizes, and trends from the comfort of their screens. </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={img}/>
    </div>
  </div>
</section>
<h2 className='text-center text-5xl text-indigo-500 font-sans poppins-medium'>Our Products</h2>
    </div>
    </div>
  )
}

export default Hero
