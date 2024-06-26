import React,{createContext,useState,useEffect} from 'react'
// create Context
export const ProductContext = createContext();



const ProductProvider = ({children}) => {
  // product store
  const [products,setProducts] = useState([]);
  // fetch products
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  },[])
  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider;
