import { CartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import { BsEyeFill, BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MenProductItem = ({products}) => {
  // CartContext
  const{addToCart}= useContext(CartContext);


  // destructure
  const {id,category,title,price,image} = products;

 
  return (
    <>
      <div className='pt-10'>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition cursor-pointer'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* image */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[160px] group-hover:scale-110 trasition duration-300' src={image} alt="" />
          </div>
        </div>
        {/* button */}
        <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={()=>addToCart(products,id,price)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-indigo-500'>
              <BsPlus className='text-3xl' />
              
            </div>
          </button>
          <Link to={`/MenProductItem/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>

       {/* category and title */}

      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/MenProductItem/${id}`}>
        <h2 className='font-semibold'>{title}</h2>
        </Link>
        <div className='font-semibold'>${price}</div>
      </div>
    </div>
    </>
  )
}

export default MenProductItem
