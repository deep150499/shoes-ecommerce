import React, { useEffect, useRef } from 'react'
import Transition from '../Functionalities/Transition';

const Login = () => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

  return (
    <>
    <Transition>
    <section>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[90vh] lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                    Login to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-black">Enter your email</label>
                        <input ref={inputRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="email" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                        <input type="password" name="password" id="password" placeholder="paswword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50  focus:ring-blue-300" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-black">Remember me</label>
                            </div>
                        </div>
                        <a href="forgot-password" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet? <a href="sign-up" className="font-medium text-blue hover:underline text-blue-700">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  </Transition>
  </>
  )
}

export default Login