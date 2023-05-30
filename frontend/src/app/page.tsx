"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"
import { TSlider } from '../../types/types';
import {
  FaTwitter,
  FaYoutube,
  FaFacebookF
} from 'react-icons/fa'

export default function Home() {
  SwiperCore.use([Autoplay])
  const sliderData: TSlider[] = [
    {
      icon: <>🛩</>,
      title: "on trips.",
      className: "text-teal-600 hover:text-teal-700"
    },
    {
      icon: <>🏘</>,
      title: "with housemates.",
      className: "text-purple-600 hover:text-purple-700"
    },
    {
      icon: <>💗</>,
      title: "with your partner.",
      className: "text-red-600 hover:text-red-700"
    },
    {
      icon: <>⭐</>,
      title: "with anyone.",
      className: "text-yellow-600 hover:text-yellow-700"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation></Navigation>
      <div className="container mt-20 w-full mx-auto flex flex-col items-center justify-center text-center sm:w-[640px] lg:w-[768px]">
        <div className="relative max-w-5xl mx-auto pt-4">
          <h1 className=" text-slate-900 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Less stress when sharing expenses
            <br />
            <Swiper
              className="h-[4rem] overflow-hidden sm:h-[5rem] md:h-[6rem] lg:h-[7rem]"
              direction="vertical"
              loop={true}
              autoplay={true}
              allowTouchMove={false}
            >
              {
                sliderData.map((item: TSlider, index: number) => {
                  return (
                    <SwiperSlide key={index} className="w-full h-full md:mt-2">
                      <span className={`${item.className} text-[1.5rem] flex items-center justify-center cursor-pointer sm:text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem]`}>
                        {item.title}
                        <span className="mx-2 text-4xl cursor-pointer">{item.icon}</span>
                      </span>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </h1>
        </div>
        <p className="mt-3 w-10/12 text-base text-gray-700 sm:mt-4 sm:w-11/12 sm:text-xl lg:text-lg lg:mt-5 xl:text-xl xl:mt-6">
          Less stress when sharing expenses with your partner.
          Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
        </p>
        <div className="my-4 flex justify-center space-x-6 text-sm">
          <Link href={"/get-started"} className="bg-teal-400 hover:bg-teal-500 focus:outline-none text-white text-lg font-bold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
            Get started
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}


function Navigation() {
  return (
    <div className="container w-full">
      <div className="p-6 flex gap-4 flex-col items-center justify-between sm:flex-row">
        <Link href="/" className="cursor-pointer">
          <Image
            width={128} height={64} draggable={false}
            src="/assets/images/logo/logo.svg" alt="logo" />
        </Link>
        <div className="w-full flex gap-8 items-center justify-center sm:w-6/12 sm:justify-around md:w-4/12 lg:w-3/12 lg:justify-evenly">
          <Link
            href={"/auth/signin"}
            title="sign-in"
            className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-lg text-white shadow-xl cursor-pointer bg-teal-400 hover:bg-teal-500"
          >
            sign in
          </Link>
          <Link
            href={"/auth/signup"}
            title="sign-up"
            className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-lg text-white shadow-xl cursor-pointer bg-teal-400 hover:bg-teal-500"
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  )
}


function Footer() {
  const [currentYear, setCurrentYear] = useState<string>()

  useEffect(() => {
    setCurrentYear(new Date().getUTCFullYear().toString())
  }, [])

  return (
    <footer className="py-12 mt-6 w-full relative flex items-center justify-center">
      <div className="py-5 mb-4 z-10">
        <div className="flex gap-6 justify-center">
          <Link
            href={"/#"} title="Facebook"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-[#bababa]">
            <FaFacebookF />
          </Link>
          <Link
            href={"/#"} title="Youtube"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-[#bababa]">
            <FaYoutube />
          </Link>
          <Link
            href={"/#"} title="Twitter"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-[#bababa]">
            <FaTwitter />
          </Link>
        </div>
        <p className="py-5 text-gray-500">
          Copyright © {currentYear} All rights reserved
        </p>
        <p className="text-center text-gray-500">
          <Link href={"/#"}>
            <span className="hover:text-blue-600">Terms </span>
          </Link>
          &
          <Link href={"/#"}>
            <span className="hover:text-blue-600"> Conditions</span>
          </Link>
        </p>
      </div>
      <Image
        alt="footer"
        height={256}
        width={2560}
        draggable={false}
        className="absolute -bottom-10"
        src={"/assets/images/icons/cover__footer.svg"}
      />
    </footer>
  )
}
