import React from "react";
import { ReactTyped } from "react-typed";
import { Link} from "react-router-dom";
import HomeProducts from "../Assests/HomeProducts";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import Transition from "../Functionalities/Transition";

const Home = () => {

  const dispatch = useDispatch();


  return (
    <>
    <Transition>
    {/* Hero Section */}
      <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-2 md:px-4 py-20 h-[92vh]">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-white-300 text-black sm:text-7xl">
          Find the perfect
          <div className="m-4">
            <ReactTyped
              strings={["FIT", "QUALITY"]}
              typeSpeed={120}
              backSpeed={140}
              loop
              className="text-red-500 ml-5"
            />
          </div>
        </h1>
        <span className="text-black px-4">
          Walk the World in Style: Your Ultimate Footwear Destination!
        </span>
        <h2 class="mx-auto mt-12 max-w-xl text-md md:text-lg px-4 text-black  leading-7">
          Step into a world of endless possibilities with our diverse range of
          footwear, designed to complement every step of your journey. Explore
          comfort, style, and quality crafted into every pair, making each step
          a statement.
        </h2>
        <Link
          to="/products"
          className="bg-red-500 rounded-full text-white font-medium px-4 py-3 sm:mt-10 mt-8 w-[200px] md:w-[250px] hover:bg-red-600 transition"
        >
          Explore Products
        </Link>

      </div>

      <h1 className="flex items-center justify-center text-2xl font-bold text-red-500">Best Sellers</h1>

      <div
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10">
    
    {HomeProducts.map((product) => {
    return (
    <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={product.src} className=" h-96 w-72 object-cover rounded-t-xl" alt='img' />
            <div className="px-4 py-3 w-72">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
              </div>
                <div className="flex items-center my-2">
                   <Link to={`products/${product.id}`}><button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm  text-center p-1.5">View Details</button></Link>
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
                  Want product news and updates? Sign up for our newsletter.
                </h2>
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
  );
};

export default Home;

