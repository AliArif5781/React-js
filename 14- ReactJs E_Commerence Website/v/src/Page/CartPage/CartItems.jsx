import { CartContext } from '@/Context/CartContext';
import React, { useContext } from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
const CartItems = ({ item }) => {

    const { removeFromCart, IncreaseAmount, decrementAmount } = useContext(CartContext);
    // destructure
    const { id, title, image, price, amount } = item;


    return (
        <>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {/* Apple MacBook Pro 17" */}
                        <img src={image} className='h-[80px] sm:h-[130px] grid place-content-center' alt="" />
                    </th>
                    <td className="px-6 py-4 hidden md:flex h-[170px] items-center text-slate-800 text-[17px]">

                        <div>{title}</div>
                    </td>
                    <td className="px-10 py-4 ">
                        <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium p-2'>
                            {/* minus icon */}
                            <div onClick={() => decrementAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                                <IoMdRemove />
                            </div>
                            {/* amount */}
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                            {/* plus icon */}
                            <div onClick={() => IncreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                <IoMdAdd />
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 text-slate-800 text-[17px]">
                        {`$${parseFloat(price * amount).toFixed(2)}`}
                    </td>
                    <td className="px-6 py-4">
                        <button onClick={() => { removeFromCart(id) }} className='bg-indigo-500 text-white p-3 rounded-lg font-bold outline-none px-8 hover:bg-indigo-600'>Remove</button>

                    </td>
                </tr>

            </tbody>


        </>
    )
}

export default CartItems
