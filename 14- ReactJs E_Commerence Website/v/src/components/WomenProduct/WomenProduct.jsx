import React, { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductContext'
import WomenProductItem from '../WomenProductItem/WomenProductItem';
import SearchBtn from '../SearchBtn/SearchBtn';

const WomenProduct = () => {

  // searching state
  const [query, setQuery] = useState('')

  const { product } = useContext(ProductContext);

  const filteredProduct = product.filter((curElem) => {
    return curElem.category === "women's clothing";
  })
  console.log(filteredProduct);
  return (
    <>
      <section className='py-16'>
        <div className="container mx-auto">
          <h1 className='text-5xl text-center py-5 md:py-0  text-indigo-500 font-semibold'>Our Product</h1>
          <SearchBtn setQuery={setQuery} />
          <div className='flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
              {
                filteredProduct.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())).map((product) => {
                  return <WomenProductItem product={product} key={product.id} />
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WomenProduct
