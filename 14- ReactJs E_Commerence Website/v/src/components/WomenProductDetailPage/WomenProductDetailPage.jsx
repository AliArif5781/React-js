import { CartContext } from '@/Context/CartContext';
import { ProductContext } from '@/Context/ProductContext';
import SkeletonUi from '@/Page/SkeletonUi';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

const WomenProductDetailPage = () => {
  // CartContext
  const { addToCart } = useContext(CartContext);
  // Use Param() for getting id from url
  const { id } = useParams();
  // console.log(id);

  const { product } = useContext(ProductContext);

  let filteredProductt = product.find((curProd) => {
    return curProd.id === parseInt(id);
  });
  console.log(filteredProductt);



  if (!filteredProductt) {
    return <section className='h-screen flex justify-center items-center'><SkeletonUi /></section>
  }

  // destructure product
  const { title, price, description, image } = filteredProductt;
  return (
    <>
      <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
        <div className="container mx-auto">
          {/* image & text wrapper */}
          <div className='flex flex-col lg:flex-row items-center'>
            {/* image */}
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 sm:Pt-5'>
              <img className='max-w-[150px] pt-20 lg:max-w-[300px] object-cover ' src={image} alt="" />
            </div>
            {/* text */}
            <div className='flex-1  text-center lg:text-left'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
              <div className='text-xl text-red-500 font-medium mb-6'>${price}</div>
              <p className='mb-8'>{description}</p>
              <button onClick={() => addToCart(filteredProductt, filteredProductt.id)} className='bg-primary py-4 px-8 text-white p-5 hover:bg-primary/90'>Add To Cart</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default WomenProductDetailPage
