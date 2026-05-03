import Bottom from '@/components/Bottom'
import BrowseAnimals from '@/components/BrowseAnimals'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className='bg-black h-screen'>
        <Navbar/>
        <BrowseAnimals/>
        <Bottom/>
    </div>
  )
}

export default page