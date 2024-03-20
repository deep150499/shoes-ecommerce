import React, { useState } from 'react'
import { useParams } from 'react-router'
import productDetails from '../Assests/ProductDetails';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import Transition from '../Functionalities/Transition';
import { TiTick } from "react-icons/ti";

const SingleProduct = () => {

  
  const {productId} = useParams();
  const product = productDetails.find(prod => prod.id === parseInt(productId));
  const {name,src,price,colors} = product;
  const dispatch = useDispatch();
  
  const [color,setColor] = useState(colors[0]);
    

  return (
    <>
    <Transition>
    <div className="py-8 m-14 md:h-[78vh]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                    <img className="w-full h-full object-cover" src={src} alt="product"/>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800  mb-2">{name}</h2>
                <p className="text-gray-600 text-sm mb-4">
                Meet the {name}, where style meets performance. Crafted with precision engineering and cutting-edge technology, these shoes offer dynamic support and cushioning for superior comfort. Designed with breathable materials and a durable sole, they provide stability and traction on any terrain. From intense workouts to casual outings, the {name} ensures you're always stepping in style. Elevate your game and embrace the ultimate fusion of fashion and function with Nike.
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700">Price : </span>
                        <span className="text-gray-600">${price}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700">Select Color:</span>
                    <div className="flex items-center mt-2">
                    {colors.map((currColor,index) => {
                      return <button onClick={() => setColor(currColor)} className='rounded-full w-7 h-7 mx-1 outline-none opacity-[0.7] active:opacity-[2] hover:opacity-[1]' key={index} style={{backgroundColor : currColor}}>{color === currColor ? <TiTick size={28} color='white'/> : null}</button>
                    })}
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 ">Select Size:</span>
                    <select className="flex items-center mt-2 border border-gray-400">
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div className='mt-3'>
                        <button onClick={() => dispatch(addToCart(product))} className="w-full md:w-[50%] bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
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
                    className="flex rounded-md bg-blue-600 hover:bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

export default SingleProduct