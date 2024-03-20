import React, { useEffect }  from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalAmount, removeFromCart } from '../Redux/CartSlice';
import Transition from '../Functionalities/Transition';


const Cart = () => {
  

  const cartItems = useSelector(state => state.cart.cartItems);
  const {totalAmount} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalAmount());
  },);

  return (
    <>
    <Transition>
    {cartItems.length>=1 ? 
    <div className="container mx-auto mt-10">
  <div className="sm:flex shadow-md my-10">
    <div className=" w-full  sm:w-3/4 bg-white px-10 py-10">
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">{cartItems.length}</h2>
      </div>
      <Link to='/products' className="flex text-blue-600 font-semibold text-sm mt-10">
      <IoIosArrowRoundBack size={22}/>
        Continue Shopping
      </Link>
      {cartItems.map((item) => {
        return (
          <>
        <div key={item.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img src={item.src} alt="shoe" className='h-72 w-64 object-cover' />
        </div>
        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col">
          <div className="flex items-center justify-between w-10/12 md:w-full">
            <p className="text-base font-black leading-none text-gray-800 \">{item.name}</p>
            <p className="py-2 font-bold">
                Price : ${item.price}
              </p>
          </div>
          <p className="text-xs leading-3 text-gray-600  pt-2">Size: 10</p>
          <p className="text-xs leading-3 text-gray-600 py-4">Color : Black</p>
          <div className="flex items-center justify-between pt-5">
            <div className="flex itemms-center">
              <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
              <p onClick={() => dispatch(removeFromCart(item))} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
            </div>
          </div>
        </div>
      </div>

      
          </>
        )
      })}
     
    </div>
    <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
        <span className="font-semibold text-sm">{cartItems.price}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
        <select className="block p-2 text-gray-600 w-full text-sm border">
              <option>Free Shipping</option>
            </select>
      </div>
      <div className="py-10">
        <label
              for="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
        <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full border"
            />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalAmount}</span>
        </div>
        <button className="bg-blue-600 font-semibold hover:bg-blue-700 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
      </div>
    </div>
  </div>
</div>
: 
<div className='flex flex-col justify-center items-center h-[92vh]'>
  <h1 className='font-bold text-xl md:text-2xl'>Your Cart is Empty</h1>
  <Link
          to="/products"
          className="bg-red-500 rounded-full text-white font-medium px-4 py-3 mt-4 w-[190px] md:w-[230px] hover:bg-red-600 transition text-center"
        >
          View Products
        </Link>
</div>

}
</Transition>
</>
  )
}

export default Cart