import React,{useContext} from 'react'
// import product context
import { ProductContext } from '../Contexts/ProductContext';
// import component
import Product from '../Components/Product';
import Hero from '../Components/Hero';


const Home = () => {
  // get product from ProductContext
  const {products} = useContext(ProductContext);
  ////////// console.log(products);

  //  get only men,s & women,s clothing category
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  })
  // console.log(filteredProducts);
  return (
    <>
    <Hero/>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {
              filteredProducts.map((product)=>{
                return <Product product={product} key={product.id}/>;
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
