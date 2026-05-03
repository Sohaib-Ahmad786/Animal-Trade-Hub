import React from "react";
import { Button } from "@/components/ui/button";
import { TiTick } from "react-icons/ti";
import { IoGlobeSharp } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import Link from "next/link";
function BackgroundImage() {
  return (
    <div className="lg:flex  bg-black">
      <div className="bg-[url('/background.img.png')] bg-contain md:bg-center sm:bg-center bg-black h-[80vh]  bg-no-repeat bg-left  md:w-full sm:w-full md:mt-0 sm:mt-0 mt-0 flex flex-col justify-center items-start ">
        <div className="lg:w-[35vw] lg:mx-28 md:w-[50vw]  md:mx-40 sm:w-[55vw] sm:mx-25 w-[70vw] mx-20 md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center">
          <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-4xl text-white">
            Buy & Sell Animals Easily
          </h1>
          <h4 className="text-white font-bold sm:text-4xl lg:text-4xl text-2xl md:text-3xl">
            Trusted Platform for Farmers & Pet Owners
          </h4>
          <div className="flex gap-4">
            <Link href="/Browse/">
              <button className="bg-green-600 font-bold px-5 py-2 text-white rounded-md">
                Browse Animals
              </button>
            </Link>
            <Link href="SellAnimals">
              <button className="bg-amber-100 px-5 py-2 font-bold rounded-md">
                Sell your Animal
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:mt-12 sm:mt-8 mt-0 md:mt-8">
        <div className="bg-white  lg:min-h-[60vh] lg:min-w-[25vw]  rounded-xl shadow-xl backdrop-blur-sm ">
          <div className="px-8 py-10">
            <h1 className="text-3xl font-bold">
              Your Next Best Trade Start Here
            </h1>
            <p className="mt-8 text-2xl font-bold flex gap-2">
              <TiTick className="h-7 w-7 rounded-full text-green-800 border-4 border-green-900" />
              Transparent Pricing
            </p>
            <p className="text-2xl font-bold flex gap-2 mt-4">
              <IoGlobeSharp className="text-green-800" />
              Access To Variety
            </p>
            <p className="text-2xl font-bold flex gap-2 mt-4">
              <LuMessagesSquare className="text-green-800" /> Direct
              Communication
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/Signup/">
                <Button className="bg-green-800">Register Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
