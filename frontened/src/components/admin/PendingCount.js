"use client";
import React from 'react'
import {useState, useEffect} from "react";
function PendingCount() {
const [data, setData]=useState(null);
const [loading, setLoading]=useState(true);
const [error, setError]=useState(null);
const fetchData=async()=>{
    try{
        const responce=await fetch("http://localhost:3001/sell-animals/pendingCount");
        const result=await responce.json();
        setData(result);
        setLoading(false);
    }catch(err){
        setError(err.message);
    }
}
useEffect(()=>{
    fetchData();
},[])
  return (
    <div>
        <div className='h-40 w-80 bg-amber-300/10  ml-10 mt-14 text-2xl font-bold font-serif flex flex-col justify-center items-center rounded-2xl shadow-2xl border-6 border-amber-400 gap-4'>
        <p className='text-white'>Pending Approvals</p>    
        <div>{data}</div>
        </div>
    </div>
  )
}

export default PendingCount