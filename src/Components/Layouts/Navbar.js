import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiConverseShoe } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <>
    <nav className='w-full flex items-center justify-between shadow text-black font-semibold md:font-bold p-4'>
        <div>
             <Link to='/' className='title' ><GiConverseShoe size={40} className='text-red-500'/></Link>
        </div> 
        <div className=''>
            <ul className='flex flex-row  items-center md:gap-[5vw] gap-[3vw]'>
            {/* <li className='hover:text-red-500'>
                 <NavLink to='/'>Home</NavLink>
                </li> */}
                <li className='hover:text-red-500'>
                 <NavLink to='/login'>Login</NavLink>
                </li>
                <li className='hover:text-red-500'>
                    <NavLink to='/signup'>Sign up</NavLink>
                </li>
                <li>
                <Link to='/cart'><FaShoppingCart size={20} className='hover:text-red-500 cursor-pointer'/>
                {cartItems.length>=1 ? <span className='absolute top-4 right-2 text-[13px] bg-red-500 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>{cartItems.length}</span> : null }
                
                </Link>
                </li>
            </ul>
        </div>
    </nav>
    </>

  )
}

export default Navbar