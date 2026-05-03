"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function AnimalsPostedGraph() {
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3001/sell-animals/per-day");
      const result = await res.json();

      const formatted = result.map((item) => ({
        date: item.date,
        count: Number(item.count),
      }));

      setData(formatted);
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p className="text-white">Loading graph...</p>;

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-white text-3xl font-bold mb-6">
        Animals Posted Per Day
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="blue" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnimalsPostedGraph