import Bottom from '@/components/Bottom'
import Navbar from '@/components/Navbar'
import SellAnimals from '@/components/SellAnimals'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col bg-black'>
      <div>
        <Navbar/>
        </div>
        <div >
        <SellAnimals/>
        </div>
        <div className='lg:mt-20 md:mt-20 sm:mt-20 mt-20'>
        <Bottom/>
        </div>
    </div>
  )
}

export default page