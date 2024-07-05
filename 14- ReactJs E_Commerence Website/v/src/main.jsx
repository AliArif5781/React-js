import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Home from './Page/Home.jsx';
import MenProduct from './components/MenProduct/MenProduct.jsx';
import ProductProvider from './Context/ProductContext.jsx';
import WomenProduct from './components/WomenProduct/WomenProduct.jsx';
import MenProductDetailPage from './components/MenProductDetailPage/MenProductDetailPage.jsx';
import WomenProductDetailPage from './components/WomenProductDetailPage/WomenProductDetailPage.jsx';
import Cart from './Page/CartPage/Cart.jsx';
import CartProvider from './Context/CartContext.jsx';
import Login from './components/Login/Login.jsx';
import LoginIn from './components/LoginIn/LoginIn.jsx';
import { UserProvider } from './Context/UserContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/CartPage' element={<Cart />} />
      <Route path='/menProduct' element={<MenProduct />} />
      <Route path='/womenProduct' element={<WomenProduct />} />
      <Route path='//MenProductItem/:id' element={<MenProductDetailPage />} />
      <Route path='/WomenProductItem/:id' element={<WomenProductDetailPage />} />
      <Route path='/SignUp' element={<Login />} />
      <Route path='/LoginIn' element={<LoginIn />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <App />
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
