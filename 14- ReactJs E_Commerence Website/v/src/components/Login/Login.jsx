import React, { useState } from 'react'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {

    const alertMessage = () => {
        setTimeout(() => {
            alert('After complete the signup form if you want to check the user data , Go to inspect option => Then open the console option.');
        }, 1000);
    }


    const [click, setClick] = useState(false);

    const handleBorder = () => {
        setClick(true)
    }
    const handleBorderr = () => {
        setClick(false)
    }

    const schema = yup.object().shape({
        email: yup.string().email().required('* E-mail is required'),
        password: yup.string().min(8).max(25).required('* Password is required'),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], "* Password didnot match").required('Confirm password is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({   //resolver is just we specified how our schema look like
        resolver: yupResolver(schema)
    });
    //  onSubmit 
    const onSubmit = (datas) => {
        console.log(datas);
    }
    return (

        <div>

            <div className='grid gap-5 m-4 sm:grid-cols-12 pt-28 font-roboto'>
                <div className='min-h-[50vh] w-[100%] sm:col-span-6 grid place-content-center text-indigo-600 text-4xl md:text-5xl font-bold pl-5'>
                    <h1>E-commerence</h1>
                    <span className=' text-[20px] pt-5 text-slate-500 leading-7'>E-commerce website is an online platform where users can buy products or services over the internet.</span>
                </div>


                <div className='min-h-[100px] w-[100%] rounded  shadow-xl sm:col-span-6 font-roboto pb-10'>
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                                SignUp Form
                            </Link>
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Create an account
                                    </h1>
                                    <form onClick={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-roboto">Your email</label>
                                            <input type="email" id="email"
                                                autoComplete='email' className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${click ? ' outline-none' : handleBorderr} `}
                                                placeholder="name@company.com" required="" onClick={handleBorder} {...register('email')} />
                                            <span>{errors.email?.message}</span>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${click ? 'border-none outline-none' : handleBorderr}`} onClick={handleBorder} {...register('password')} />
                                            <span>{errors.password?.message}</span>
                                        </div>
                                        <div>
                                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input onClick={handleBorder} type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${click ? 'border-none outline-none' : handleBorderr}`} required="" {...register('confirm_password')} />
                                            <span>{errors.confirm_password?.message}</span>
                                        </div>
                                        {/* <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-indigo-600 hover:underline dark:text-indigo-500" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div> */}
                                        <button type="submit" onClick={alertMessage} className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Create an account</button>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <Link to={'/LoginIn'} className="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Login here</Link>

                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}


// 1- ReactHook Form.      // 2- Yup       // 3-hookForm resolver

// 1- ReactHook Form = It's a library in ReactJS for handling forms.It makes form validation, data handling, and submission easier and more efficient.Uses React hooks to manage form state and validation.

// 2- Yup  = Validation. Great for ensuring the data your form collects is valid and formatted correctly.

// 3- hookForm resolver = this pkg give us a function() help us to integrate/connects two libraries yup and reacthook form.


export default Login
