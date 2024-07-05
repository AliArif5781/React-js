import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.svg';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../Context/UserContext.jsx';

const LoginIn = () => {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const schema = yup.object().shape({
        email: yup.string().email().required('* E-mail is required'),
        password: yup.string().required('* Password is required')
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setUser(data.email); // Update the user context
        navigate('/'); // Navigate to the main page
    };

    return (
        <div>
            <div className='grid gap-5 m-4 sm:grid-cols-12 pt-28 font-roboto'>
                <div className='min-h-[50vh] w-[100%] sm:col-span-6 grid place-content-center text-indigo-600 text-4xl md:text-5xl font-bold pl-5'>
                    <h1>E-commerce</h1>
                    <span className='text-[20px] pt-5 text-slate-500 leading-7'>E-commerce website is an online platform where users can buy products or services over the internet.</span>
                </div>
                <div className='min-h-[100px] w-[100%] rounded shadow-xl sm:col-span-6 font-roboto pb-10'>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                                Login Form
                            </Link>
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Create an account
                                    </h1>
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" {...register('email')} />
                                            <span>{errors.email?.message}</span>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" {...register('password')} />
                                            <span>{errors.password?.message}</span>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LoginIn;
