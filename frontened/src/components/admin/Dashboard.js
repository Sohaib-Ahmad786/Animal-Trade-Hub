"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import TotalAnimals from './TotalAnimals';
import Pending from './Pending';
import PendingCount from './PendingCount';
import AnimalsPostedGraph from './AnimalsPostedGraph';
function Dashboard() {
    const [data, setData] = useState(null);
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState(null);
            const fetchData=async()=>{
                 try{
                const responce=await fetch("http://localhost:3001/auth/count");
                const result=await responce.json();
                setData(result);
                setLoading(false);
            }catch(err){
                setError(err.message);
            }
        }
        useEffect(()=>{
            fetchData();
        },[]);
  return (
    <div className='text-white'>
        <h1 className='text-6xl font-bold font-serif ml-10 mt-10 text-green-700'>DashBoard</h1>
        <p className='font-bold font-serif ml-10 mt-2'>Welcome, Sohaib! Here's Overview of Animal Trade Hub</p>
        <div className='flex flex-wrap gap-10'>
            <div className='h-40 w-80 bg-green-400/20 ml-10 mt-14 text-2xl font-bold font-serif flex flex-col justify-center items-center rounded-2xl shadow-2xl border-6 border-green-700 gap-4'>
        <p className='text-white'>Total Users</p>    
        <div>{data}</div>
        </div>
        <div><TotalAnimals/></div>
        <div><PendingCount/></div>
        {/* <div><AnimalsPostedGraph/></div> */}
        </div>
         <div><Pending/></div>
        </div>
  )
}

export default Dashboard