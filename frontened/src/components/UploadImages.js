"use client";
import React, { useState } from "react";

function UploadImages() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...selectedImages]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-4 text-white">
      <label className="block font-bold text-2xl mb-2">
        Upload Animal Images
      </label>

      <label className="flex flex-col items-center justify-center w-[50vw] py-10 border-2 border-dashed border-green-500 rounded-xl cursor-pointer hover:bg-green-900/20">
        <span className="text-gray-300 text-2xl">Click to upload or drag & drop images</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img.preview}
              alt="animal"
              className="rounded-lg h-32 w-full object-cover  border"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadImages;
