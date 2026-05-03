import React from 'react'
import { Button } from "@/components/ui/button"
import { GiPlasticDuck } from "react-icons/gi";
import { GiGoat, GiCamel ,GiBuffaloHead} from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { LiaDogSolid } from "react-icons/lia";
function LeftPopular() {
  return (
    <div className='bg-black text-white flex flex-col justify-start lg:mt-8 md:mt-6 sm:mt-4 lg:ml-20 md:ml-10 sm:ml-15 ml-10 font-bold w-full'>
    <h1 className='text-4xl'>Explore Our Best Trades</h1>
    <div className='space-y-1 mt-6 lg:ml-15 md:ml-4 ml-15'>
    <p className='flex gap-2 text-2xl'><GoDotFill className='text-green-700 text-2xl' /><GiBuffaloHead className='text-white text-2xl'/>Cows & Buffaloes</p>
    <p className='flex gap-2 text-2xl'><GoDotFill className='text-green-700 text-2xl' /><GiGoat  className='text-white text-2xl'/>Goats & Sheep</p>
    <p className='flex gap-2 text-2xl'><GoDotFill className='text-green-700 text-2xl' /><LiaDogSolid  className='text-white text-2xl'/>Pets & Dogs</p>
    <p className='flex gap-2 text-2xl'><GoDotFill className='text-green-700 text-2xl' /><GiPlasticDuck className='text-white text-2xl' />Poultry (Hens, Ducks, etc!)</p>
    <p className='flex gap-2 text-2xl'><GoDotFill className='text-green-700 text-2xl' /><GiCamel  className='text-white text-2xl' />Horses & Camels</p>
    </div>
    <Button className="bg-green-800 mt-6 lg:w-full w-[80vw] sm:w-[80vw] md:w-full">View All Categories</Button>
    </div>
  )
}

export default LeftPopular