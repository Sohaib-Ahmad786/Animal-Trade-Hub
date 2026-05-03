import AboutPage from "@/components/AboutPage";
import Bottom from "@/components/Bottom";
import Navbar from "@/components/Navbar";
import React from "react";
function page() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="lg:mx-20 md:mx-12 sm:mx-6 mx-6">
        <div className="flex flex-col bg-black">
          <h1 className="font-bold text-6xl text-white mt-40 px-4">About</h1>
        </div>
        <div className="lg:flex ">
          <div className="text-white px-4">
            <h3 className="font-bold text-2xl mt-6">An Introduction</h3>
            <p className="mt-2 text-2xl lg:w-[50vw]">
              Animal Trade Hub is a modern and trusted online platform that
              connects animal buyers and sellers from all over Pakistan. Whether
              you want to buy or sell hens, goats, cows, buffaloes, and many
              more farm animals, we make the process simple, safe, and fast.
              With just a few clicks, users can explore thousands of animals,
              compare prices, chat directly with sellers, and finalize deals
              without any hassle. Our platform is designed to support farmers,
              livestock traders, and everyday buyers — giving everyone equal
              access to a secure digital marketplace. Join Animal Trade Hub
              today — Discover. Connect. Trade. Where every deal is safe, every
              animal is real, and every customer is valued! 🐄🐐🐔✨
            </p>
          </div>
          <div className="mr-8 lg:m-0 md:mx-8 sm:mx-6 mx-6 lg:mt-0 mt-8">
            <img
              className="h-full lg:w-[60vw] hover:shadow-xl"
              src="/AboutPic.png"
              title="Animal Picture"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse flex flex-col-reverse lg:mt-15 mt-10 ">
          <div className="mx-4 lg:mt-0 mt-8">
            <img
              className="h-full lg:w-[60vw]  hover:shadow-xl "
              src="/hens.jpg"
              title="Animal Picture"
            />
          </div>
          <div className="text-white px-4">
            <h3 className="font-bold text-2xl mt-6">🤝 Our Identity</h3>
            <p className="mt-2 text-2xl lg:w-[50vw]">
              Animal Trade Hub is not just a marketplace; it is the foundation
              of trust and excellent trade. Our primary mission is to make the
              buying and selling of livestock extremely easy, transparent, and
              secure for everyone. We directly connect everyone, from small
              farmers to large-scale traders, helping you find the best price
              and the right match for your animals. This is your community,
              where every trade becomes an easy and pleasant experience.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse flex flex-col-reverse lg:mt-15 mt-10 ">
          <div className="mx-4 lg:mt-0 mt-8">
            <img
              className="h-full lg:w-[60vw]  hover:shadow-xl "
              src="/goats.jpg"
              title="Animal Picture"
            />
          </div>
          <div className="text-white px-4">
            <h3 className="font-bold text-2xl mt-6">🌱 Our Story</h3>
            <p className="mt-2 text-2xl lg:w-[50vw]">
              The foundation of the Animal Trade Hub was laid with a very simple
              idea: To help our local farmers and animal lovers. We knew that
              animal trading involved a lot of middlemen and unnecessary
              confusion. That is why we wanted to create a place where everyone
              could buy and sell animals with directness, clarity, and complete
              freedom. This platform is the result of our commitment to making
              every trade safe, affordable, and trustworthy.
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse flex flex-col-reverse lg:mt-15 mt-10 ">
          <div className="mx-4 lg:mt-0 mt-8">
            <img
              className="h-full lg:w-[60vw]  hover:shadow-xl "
              src="/AboutCow.jpg"
              title="Animal Picture"
            />
          </div>
          <div className="text-white px-4">
            <h3 className="font-bold text-2xl mt-6">🛠️ What We Offer</h3>
            <p className="mt-2 text-2xl lg:w-[50vw]">
              At Animal Trade Hub, we provide three essential features to
              complete your trade: Firstly, you can easily upload clear pictures
              and full details of your animal so that buyers can feel confident.
              Secondly, we offer a direct chat system through which you can
              contact buyers and sellers and move the deal forward without any
              hindrance. And lastly, through our location-based search, you can
              find animals near your area, which makes trade affordable and
              logistics (transport) easier.
            </p>
          </div>
        </div>
      </div>

      <Bottom />
    </div>
  );
}

export default page;
