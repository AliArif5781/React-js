import { CartContext } from '@/Context/CartContext'
import React, { useContext } from 'react'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, price, totalPrice } = useContext(CartContext)

  return (

    <>
      <h2 className='text-center text-5xl text-indigo-500 font-semibold pt-20'>Cart-Items {''}</h2>
      {
        cart.length !== 0 ? (
          <div className="relative overflow-x-auto pt-16">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-roboto">
              {

                cart.map((item) => {
                  return <CartItems item={item} key={item.id} />
                })
              }

              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product image
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:flex">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">

                  </th>
                </tr>
              </thead>
            </table>
            <div>
              <div className='flex justify-end'> {/** */}
                <div className=' mt-10 mr-10 border w-auto min-h-[250px]'>
                  <div className='px-2'>
                    <h1 className='text-2xl text-center'>Total Items Price</h1>
                    <div className='flex mt-10 text-lg'>
                      Total:
                      <div className='mt-[15px] px-2'>
                        <hr className="w-[170px]  mx-auto " />
                      </div>
                      <div>
                        {`$${parseFloat(price).toFixed(2)}`}
                      </div>
                    </div>
                    <div>
                      <div className='flex mt-10 text-lg'>
                        Discount:
                        <div className='mt-[15px] px-2'>
                          <hr className="w-[140px]  mx-auto " />
                        </div>
                        <div>
                          {`$5`}
                        </div>
                      </div>
                      <div>
                        <div className='flex mt-10 text-lg'>
                          Total Price:
                          <div className='mt-[15px] px-2'>
                            <hr className="w-[140px]  mx-auto " />
                          </div>
                          <div className="font-roboto font-semibold text-slate-600">
                            {`$${parseFloat(totalPrice).toFixed(2)}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center pb-5'>
                    <Link to={'/'}>
                      <button className='bg-indigo-500 p-3 mt-5 px-5 text-white font-roboto font-semibold'>CheckOut</button>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div >

        ) : (
          <div className='text-3xl pt-40 text-center'>
            <p className='pb-10 font-roboto text-slate-700'>Cart is Empty</p>
            <Link to={'/'} className='flex justify-center items-center '>
              <button className='text-2xl sm:text-4xl border p-4 py-5 bg-indigo-500 text-white'>Continue Shopping</button>
            </Link>
          </div>
        )
      }


    </>
  )
}

export default Cart
