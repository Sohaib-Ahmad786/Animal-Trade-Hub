"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function SellAnimals() {
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !category ||
      !age ||
      !gender ||
      !quantity ||
      !price ||
      !location ||
      !description ||
      !images
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/sell-animals/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          age,
          gender,
          quantity,
          price,
          location,
          description,
          image: images,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert("Animal listed for sale successfully");
        window.location.href = "/Browse";
      } else {
        alert(data.message || "Failed to listed animal for sale");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImages(reader.result); // Base64 string
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="text-black h-full flex flex-col items-center w-full ">
      <div className=" lg:w-[60vw]  bg-white rounded-2xl mt-30 pt-10">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center text-3xl font-bold">
            <h2>Sell Your Animals</h2>
          </div>
          <div className="flex flex-col mx-10 my-10 ">
            <label htmlFor="category " className="ml-2">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            >
              <option value="">Select Category</option>
              <option value="Hen">Hen</option>
              <option value="Goat">Goat</option>
              <option value="Cow">Cow</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Sheep">Sheep</option>
              <option value="pigeon">Pigeon</option>
              <option value="Duck">Duck</option>
            </select>
            <label className="mt-4">Age</label>
            <input
              type="number"
              placeholder="Enter Animal age in Months"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            />
            <label className="mt-4">Gender</label>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="mt-4">Quantity</label>
            <input
              type="number"
              placeholder="Enter Animals Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            />
            <label className="mt-4">Price</label>
            <input
              type="number"
              placeholder="Enter Animals Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            />
            <label className="mt-4">location</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            />
            <label className="mt-4">Description</label>
            <textarea
              value={description}
              placeholder="Enter Animal information"
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 mt-2 py-2 rounded-md px-2"
              required
            />
            <label className="mt-4 ml-2">Image</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="border-2 mt-2 py-2 rounded-md px-2 mb-4"
            />
            <Button type="submit">Post Animal</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellAnimals;
