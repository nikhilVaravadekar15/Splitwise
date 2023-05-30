import React from 'react'
import Link from 'next/link'
import {
  FcGoogle
} from 'react-icons/fc'
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'

export default function Signup() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="flex items-center justify-center my-4">
        <div className="bg-gradient-to-r from-indigo-500 via-teal-500 to-yellow-500 p-1 rounded-md">
          <div className="flex gap-2 flex-col px-4 py-4 bg-white sm:px-4 lg:px-6 sm:py-8 lg:py-12">
            <Link href={"/"} className="flex gap-2 items-center cursor-pointer font-bold text-[#3c3c3c] hover:text-[#212121]">
              <HiArrowNarrowLeft className="w-5 h-5" />
              <span className="text-xl leading-tight sm:text-2xl">Home</span>
            </Link>
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign Up
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  href={"/auth/signin"}
                  className="font-medium text-indigo-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Sign In
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Enter You Full Name"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="password"
                        type="email"
                        autoComplete="off"
                        placeholder="Enter Your Password"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button className="w-full inline-flex gap-2 items-center justify-center rounded-md shadow-xl cursor-pointer bg-teal-400 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-teal-500">
                      Get started
                      <HiArrowNarrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
              <div className="my-3 text-center text-xl font-semibold leading-tight">
                <span className="text-black hover:text-indigo-600">or</span>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-500 rounded-md shadow-xl hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute left-6">
                    <FcGoogle className="w-5 h-5" />
                  </div>
                  Sign in with Google
                </button>
                <p className="my-1 text-center">
                  <span className="text-gray-500 text-sm">
                    Read our{" "}
                    <span className="capitalize cursor-pointer text-indigo-600 hover:text-blue-600">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="capitalize cursor-pointer text-indigo-600 hover:text-blue-600">
                      terms of service
                    </span>{" "}
                    to learn more
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

