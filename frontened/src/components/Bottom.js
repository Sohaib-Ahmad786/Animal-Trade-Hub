import React from 'react'

function Bottom() {
  return (
    <div className='bg-black text-white mt-20 flex flex-col items-center'>
        <h2 className='text-4xl font-serif'>Stay Updated with the Latest Animals & News!</h2>
        <p className='mt-3'>Get notifications on new listings, market trends, and animal Care tips straight</p>
        <div className='mt-3'>
          <label htmlFor='email' className='text-2xl'></label>
            <input id="email" type='email' placeholder='Enter Your Email' className='text-white border px-38 hover:shadow-xl outline-green-800 py-2 rounded-xl ml-2'/>
        </div >
        <div className='lg:flex md:flex gap-15 mt-12'>
        <div className='flex sm:justify-center lg:mb-0 md:mb-0 sm:mb-6 mb-6 justify-center sm:gap-20 gap-20'>
           <ul>
          <li>Home</li>
          <li>About</li>
          </ul>
          <ul >
          <li>Browse Animals</li>
          <li>Sell</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className='lg:h-20 lg:w-px md:h-20 md:w-px sm:w-[80vw] sm:h-px w-[90vw] h-px bg-white'>
          
        </div>
        <div className='flex gap-20 justify-center sm:mt-6 lg:mt-0 md:mt-0 mt-6'>
        <div>
        <p>@AnimalsGroup.pk</p>
        <p>Phool Nagaar Zila Kasur</p>
        <p>Had Balloki</p>
        <p>0316-6073020</p>
        </div>
        <div>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
        </div>
        </div>
        <div className='mt-16'>
          <h1 className='font-bold sm:text-4xl lg:text-7xl md:text-5xl text-4xl mb-8 font-serif'>Animals Trade Hub</h1>
        </div>
        <div className='h-px w-full bg-white'>

        </div>
        <div className='py-6'>
          <p>@2025 Animals Trade Hub All rights reserved</p>
        </div>
    </div>
  )
}

export default Bottom