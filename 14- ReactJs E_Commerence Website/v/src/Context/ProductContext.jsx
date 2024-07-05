import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();



const ProductProvider = ({children}) => {
  const [product,setproduct] = useState([]);
    useEffect(()=>{
        let fetchProduct = async ()=>{
            let response = await fetch(`https://fakestoreapi.com/products`);
            let data = await response.json();
            setproduct(data);
          }
        fetchProduct()
    },[])
  return (
    <ProductContext.Provider value={{product}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
