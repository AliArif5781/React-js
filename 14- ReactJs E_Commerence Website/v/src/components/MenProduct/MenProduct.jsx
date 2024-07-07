import React, { useContext, useState } from 'react'
import { ProductContext } from '../../Context/ProductContext';
import MenProductItem from '../MenProductItem/MenProductItem';
import SearchBtn from '../SearchBtn/SearchBtn';
const MenProduct = () => {
  // searching state
  const [query, setQuery] = useState('')

  const { product } = useContext(ProductContext);

  const filteredProduct = product.filter((curElem) => {
    return curElem.category === "men's clothing";
  })
  // console.log(filteredProduct);


  // const filterProd = filteredProduct.filter((data)=> data.title.toLowerCase().includes('f'))
  // console.log(filterProd);
  return (
    <>
      {/* <input type="text" placeholder='hello' className='mt-20 fixed' onChange={(e)=> setQuery(e.target.value)} /> */}
      <section className='py-16'>
        <div className="container mx-auto">
          <div>
            <div>
              <h1 className='text-5xl text-center  py-5 md:py-0  text-indigo-500 font-semibold'>Our Product</h1>
            </div>
            <SearchBtn setQuery={setQuery} />
          </div>
          <div className='flex justify-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto'>
              {
                filteredProduct.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())).map((product) => {
                  return <MenProductItem products={product} key={product.id} />
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default MenProduct
