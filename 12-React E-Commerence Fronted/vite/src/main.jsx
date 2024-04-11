import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Product Provider
import ProductProvider from './Contexts/ProductContext.jsx'
// sidebar Provider
import SidebarProvider from './Contexts/SidebarContext.jsx'
// CartProvider Provider
import CartProvider from './Contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
)
