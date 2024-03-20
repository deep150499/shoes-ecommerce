import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-black">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">Get Help</h2>
            <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                    <a href="order-status" className=" hover:underline">Order Status</a>
                </li>
                <li className="mb-4">
                    <a href="s-d" className="hover:underline">Shipping</a>
                </li>
                <li className="mb-4">
                    <a href="returns" className="hover:underline">Returns</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">About</h2>
            <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                    <a href="twitter" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="facebook" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="contact-us" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">Legal</h2>
            <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                    <a href="privacy-policy" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="licensing" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="conditions" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">Join Us</h2>
            <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                    <a href="ios" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="android" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="windows" className="hover:underline">Windows</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">© 2024 <a href="https://flowbite.com/">Deep Nanavati™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <FaGithub className="text-gray-400 hover:text-gray-900"/>
              <FaLinkedin className="text-gray-400 hover:text-gray-900" />
        </div>
      </div>
    </div>
</footer>
  )
}

export default Footer