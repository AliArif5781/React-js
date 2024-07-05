import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '@/Context/CartContext';
import { useUser } from '@/Context/UserContext';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { ItemAmount } = useContext(CartContext);
  const { user } = useUser();

  const ScrollBar = useCallback(() => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', ScrollBar);
    return () => {
      window.removeEventListener('scroll', ScrollBar);
    };
  }, [ScrollBar]);

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt="Logo" />
          </div>
        </Link>
        {/* cart */}
        <div className='flex items-center w-max '>
          <Link to={'/CartPage'} className='cursor-pointer flex relative w-[20px] items-center'>
            <BsBag className='text-2xl' />
            <div className='bg-indigo-500 absolute -right-3 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{ItemAmount}</div>
          </Link>
          <Link to={'/LoginIn'} className='ml-3 text-[17px]'> {user ? user : <button className='text-white bg-indigo-500 border-0 py-2 px-3 mx-5 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Login</button>}</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
