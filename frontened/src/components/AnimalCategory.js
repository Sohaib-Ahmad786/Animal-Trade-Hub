"use client";
import React from 'react'
import { useState } from 'react'
function AnimalCategory() {
    const [Category, setCategory]=useState("");
    const categories=[
        "Hen","Goat","Cow","Buffalo","Sheep", "Pigeon","Duck",
    ];
  return (
    <div className='text-white lg:w-[40vw] w-full lg:ml-0 ml-12'>
      <label className='text-2xl '>Animal Category :</label>  
      <select className='border lg:ml-28 ml-24 px-10 py-3 rounded-lg bg-black focus:ring-2 focus:ring-blue-500' value={Category}
       onChange={(e)=>
        setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((Animals)=>(
                <option  key={Animals} value={Animals}>
                    {Animals}
                </option>
            ))}
        </select>
    </div>
  )
}

export default AnimalCategory