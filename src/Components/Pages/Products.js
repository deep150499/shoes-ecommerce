import React, { useState } from 'react';
import productDetails from '../Assests/ProductDetails';
import { FaCartPlus } from "react-icons/fa6";
// import { useNavigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import Transition from '../Functionalities/Transition';


const Products = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search,setSearch] = useState('');

  return (
   
    <>
    <Transition>
    <form className="mx-auto w-[300px] my-3">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Search Product here" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>
    <div
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10"> 
    {productDetails.filter((product)=>{
      return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
    }).map((product) => {
    return (
    <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={product.src} className=" h-96 w-72 object-cover rounded-t-xl" alt='img' />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
              </div>
                <div className="flex items-center my-2">
                   <button onClick={() => navigate(`/products/${product.id}`)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm  text-center p-1.5">View Details</button>
                    <div onClick={() => dispatch(addToCart(product))} className="ml-auto cursor-pointer hover:text-red-500"><FaCartPlus size={22}/></div>
                </div>
            </div>
    </div>
    )
    })}
</div>
<div className="bg-gray-900 py-16 sm:py-24 lg:py-32 mt-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
              <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                <h2 className="inline sm:block lg:inline xl:block">
                  Want product news and updates?
                </h2>
                <p className="inline sm:block lg:inline xl:block">
                  Sign up for our newsletter.
                </p>
              </div>
              <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                <div className="flex gap-x-4">
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex rounded-md bg-blue-600 hover:bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                We care about your data. Read our privacy&nbsp;policy.
                </p>
              </form>
            </div>
          </div>
          </Transition>
</>
  )
}

export default Products