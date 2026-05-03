import Bottom from '@/components/Bottom'
import ContactPage from '@/components/ContactPage'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <ContactPage/>
        <div className='lg:mt-0 md:mt-0 sm:mt-40 mt-96'>
        <Bottom/>
        </div>
    </div>
  )
}

export default page