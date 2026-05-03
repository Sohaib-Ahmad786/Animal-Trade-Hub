import React from 'react'
import Navbar from './Navbar'
import { TiTick } from "react-icons/ti";
function AboutPage() {
  return (
    <div>
        <Navbar/>
         <div className="flex flex-col bg-black">
      <h1 className="font-bold text-6xl text-white mt-40 px-4">About</h1>
      <div className="flex text-white">
        <div className="px-4">
          <h3 className="font-bold text-2xl mt-4">An Introduction</h3>
          <p className="mt-2 text-2xl w-[50vw]">
            Animal Trade Hub is a modern and trusted online platform that
            connects animal buyers and sellers from all over Pakistan. Whether
            you want to buy or sell hens, goats, cows, buffaloes, and many more
            farm animals, we make the process simple, safe, and fast. With just
            a few clicks, users can explore thousands of animals, compare
            prices, chat directly with sellers, and finalize deals without any
            hassle. Our platform is designed to support farmers, livestock
            traders, and everyday buyers — giving everyone equal access to a
            secure digital marketplace. Join Animal Trade Hub today — Discover.
            Connect. Trade. Where every deal is safe, every animal is real, and
            every customer is valued! 🐄🐐🐔✨
          </p>

          
          <h3 className="font-bold text-2xl mt-2">Our Mission</h3>
          <p className="mt-1 ">
            To make Animal Trading easy, transparent, and accessible for
            everyone __ from small farmers to large scale traders
          </p>
          <h3 className="font-bold text-2xl mt-2">Who We Are</h3>
          <p className="mt-1 ">
            Animal Trade Hub Started with a simple idea __ to help local farmers
            and animals lovers sell and buy animals without middleman or
            confussion.
          </p>
          <h3 className="font-bold text-2xl mt-2">What We Offer</h3>
          <div className="mt-1 ">
            <p className="flex">
              <TiTick className="text-white h-5 w-5 bg-[brown] rounded-full" />{" "}
              Buy & sell all types of animals (hens, goats, cows, etc.)
            </p>
            <p className="flex">
              <TiTick className="text-white h-5 w-5 bg-[brown] rounded-full" />
              Upload animal photos with full details
            </p>
            <p className="flex">
              <TiTick className="text-white h-5 w-5 bg-[brown] rounded-full" />
              Chat directly with buyers And sellers
            </p>
            <p className="flex">
              <TiTick className="text-white h-5 w-5 bg-[brown] rounded-full" />
              Find animals near your areas
            </p>
          </div>
        </div>
        <div className="mr-8">
          <img
            className="h-full w-[60vw] rounded-xl hover:shadow-xl"
            src="/AboutPic.png"
            title="Animal Picture"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutPage