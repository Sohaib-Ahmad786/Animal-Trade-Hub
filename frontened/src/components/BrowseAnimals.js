"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

function BrowseAnimals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAnimals = async () => {
    try {
      const res = await fetch("http://localhost:3001/sell-animals");
      if (!res.ok) throw new Error("Failed to fetch animals");
      const data = await res.json();
      setAnimals(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Api Error:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Loading animals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-10 pt-30">
      <div className="flex justify-center">
        <h2 className="text-white text-4xl md:text-6xl font-serif mb-10">
          Animals Listed
        </h2>
      </div>

      {animals.length === 0 ? (
        <div className="flex justify-center">
          <p className="text-white">No animals found.</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {animals.map((item) => (
            <motion.article
              key={item.id}
              className="bg-white p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.category || "Animal image"}
                  className="rounded-xl w-full h-56 object-cover mb-4"
                  onError={(e) => {
                    // hide broken image or set fallback
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}

              <div className="mb-2">
                <h3 className="text-2xl font-bold">Name:</h3>
                <p className="text-2xl ml-30">{item.category || "—"}</p>
              </div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold">Age:</h3>
                <p className="text-2xl ml-30">{item.age ?? "—"} months</p>
              </div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold">Gender:</h3>
                <p className="text-2xl ml-30">{item.gender || "—"}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold">Price:</h3>
                <p className="text-2xl ml-30">{item.price ?? "—"}</p>
              </div>

              <div className="text-2xl font-bold">
                <Link href={`/animal/${item.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
              <div className="text-2xl font-bold"></div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrowseAnimals;
