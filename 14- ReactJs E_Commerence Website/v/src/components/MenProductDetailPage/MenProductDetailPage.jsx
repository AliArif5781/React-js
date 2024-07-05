import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext';
import SkeletonUi from '@/Page/SkeletonUi';
import { CartContext } from '@/Context/CartContext';

const MenProductDetailPage = () => {
  // get product from url
  const { id } = useParams();

  // CartContext
  const { addToCart } = useContext(CartContext);

  // get product from ProductContext
  const { product } = useContext(ProductContext);

  // get the single product based on id
  let filteredProduct = product.find((curProd) => {
    return curProd.id === parseInt(id); // ParseInt() is necessary to get the product id from url
  });

  // Skeleton
  if (!filteredProduct) {
    return <section className='h-screen flex justify-center items-center'><SkeletonUi /></section>
  }

  // destructure product
  const { title, price, description, image } = filteredProduct;

  return (
    <section className=' pt-28 md:pt-24 lg:pt-32 lg:py-32 min-h-screen flex items-center'>
      <div className="container mx-auto px-4">
        {/* image & text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-[300px] object-cover' src={image} alt={title} />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text-xl text-red-500 font-medium mb-6'>${price}</div>
            <p className='mb-8'>{description}</p>
            <button onClick={() => addToCart(filteredProduct, filteredProduct.id)} className='bg-primary py-4 px-8 text-white hover:bg-primary/90'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenProductDetailPage
