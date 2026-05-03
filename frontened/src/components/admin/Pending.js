"use client"
import React from 'react'
import { useState, useEffect } from 'react'
function Pending() {
    const [pendingAnimals, setPendingAnimals]=useState([]);
    useEffect(()=>{
        async function fetchPendingAnimals(){
            try{
                const responce=await fetch("http://localhost:3001/sell-animals/Pending");
                const data=await responce.json();
                setPendingAnimals(data);
            }catch(err){
                console.error("Error fetching pending animals:",err);
            }
        }
        fetchPendingAnimals();
    },[])

    async function approve(id){
        await fetch (`http://localhost:3001/sell-animals/approve/${id}`,{
            method:"PUT"
        })
        setPendingAnimals(pendingAnimals.filter(a=>a.id!==id));
    }

    async function handleDelete(id) {
  try {
    const res = await fetch(`http://localhost:3001/sell-animals/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete animal");
    }

    // Optional: backend ka response
    const data = await res.json();
    console.log("Deleted:", data);

    // Frontend se item remove
    setPendingAnimals(prev =>
      prev.filter(animal => animal.id !== id)
    );

  } catch (err) {
    console.error("Delete Error:", err);
    alert("Failed to delete item!");
  }
}

  return (
    <div>
        <div className="p-8 text-white">
      <h1 className="text-4xl font-bold text-green-500 mb-6 font-serif">
        Pending Approval
      </h1>

      {pendingAnimals.length === 0 ? (
        <p className="text-gray-300">No pending animals.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pendingAnimals.map(animal => (
            <div key={animal.id} className="bg-gray-900 p-5 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">{animal.category}</h2>
              <p>Age: {animal.age}</p>
              <p>Gender: {animal.gender}</p>
              <p>Location: {animal.location}</p>
              <p>Status: {animal.status}</p>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => approve(animal.id)}
                  className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => handleDelete(animal.id)}
                  className="bg-red-600 hover:bg-red-800 px-4 py-2 rounded"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default Pending