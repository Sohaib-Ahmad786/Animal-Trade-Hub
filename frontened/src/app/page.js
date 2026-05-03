import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BackgroundImage from "@/components/BackgroundImage";
import PopularCategories from "@/components/PopularCategories";
import LeftPopular from "@/components/LeftPopular";
import Bottom from "@/components/Bottom";
function Home() {
  return (
    <div className="bg-black flex flex-col">
      <Navbar />
      <div className="md:mt-8 ">
        <BackgroundImage />
      </div>
      <div className="bg-black text-green-800 text-3xl font-bold px-10 pt-4 pb-4">
        <h1>Popular Categories</h1>
      </div>
      <div className="lg:flex md:flex bg-black">
        <LeftPopular />
        <div className="lg:flex md:flex lg:justify-end lg:w-full md:w-full sm:w-[80vw] mx-20">
          <PopularCategories />
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Home;
