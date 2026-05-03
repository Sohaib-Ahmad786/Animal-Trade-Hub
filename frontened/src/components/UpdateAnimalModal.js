"use client";
import { useState, useEffect } from "react";

export default function UpdateAnimalModal({ animal, id, isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    category: animal?.category || "",
    age: animal?.age || "",
    gender: animal?.gender || "",
    quantity: animal?.quantity || "",
    price: animal?.price || "",
    location: animal?.location || "",
    description: animal?.description || "",
  });

  const [originalData, setOriginalData] = useState(formData);
  const [newImages, setNewImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [keepExistingImages, setKeepExistingImages] = useState(true);
  const [currentImages, setCurrentImages] = useState(
    (animal?.images && Array.isArray(animal.images) ? animal.images : []) ||
      (animal?.image ? [animal.image] : [])
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  
  useEffect(() => {
    if (animal && isOpen) {
      const newFormData = {
        category: animal.category || "",
        age: animal.age || "",
        gender: animal.gender || "",
        quantity: animal.quantity || "",
        price: animal.price || "",
        location: animal.location || "",
        description: animal.description || "",
      };
      setFormData(newFormData);
      setOriginalData(newFormData);
      setCurrentImages(
        (animal?.images && Array.isArray(animal.images) ? animal.images : []) ||
          (animal?.image ? [animal.image] : [])
      );
      setNewImages([]);
      setImagePreviews([]);
      setKeepExistingImages(true);
    }
  }, [animal, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setNewImages(previews);

    
    setImagePreviews(previews.map((p) => p.preview));
  };

  const removeNewImage = (index) => {
    const updated = newImages.filter((_, i) => i !== index);
    setNewImages(updated);
    setImagePreviews(updated.map((p) => p.preview));
  };

  const removeCurrentImage = (index) => {
    const updated = currentImages.filter((_, i) => i !== index);
    setCurrentImages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    try {
      setLoading(true);

      
      const changedData = {};
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== originalData[key]) {
          changedData[key] = formData[key];
        }
      });

      
      if (Object.keys(changedData).length === 0 && newImages.length === 0 && currentImages.length === animal?.images?.length) {
        setError("No changes made");
        return;
      }

      
      if (newImages.length > 0) {
        
        const base64Images = await Promise.all(
          newImages.map((imgObj) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.onerror = reject;
              reader.readAsDataURL(imgObj.file);
            });
          })
        );

        
        if (!keepExistingImages) {
          
          if (base64Images.length > 0) {
            changedData.image = base64Images[0];
            if (base64Images.length > 1) {
              changedData.images = base64Images;
            }
          }
        } else {
          
          const allImages = [...currentImages, ...base64Images];
          changedData.image = allImages[0];
          if (allImages.length > 1) {
            changedData.images = allImages;
          }
        }
      } else if (keepExistingImages && currentImages.length > 0) {
        
        changedData.image = currentImages[0];
        if (currentImages.length > 1) {
          changedData.images = currentImages;
        }
      }

      console.log("Sending update with data:", changedData);

      
      const res = await fetch(`http://localhost:3001/sell-animals/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changedData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error response:", errorText);
        throw new Error(`Update failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setSuccessMsg("Animal updated successfully!");

      setTimeout(() => {
        if (onSuccess) onSuccess(data);
        onClose();
      }, 1000);
    } catch (err) {
      console.error("Error updating animal:", err);
      setError(err.message || "Failed to update animal");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Update Animal</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          
          {successMsg && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              {successMsg}
            </div>
          )}

        
          {currentImages.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Images
              </label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {currentImages.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={img}
                      alt={`current-${idx}`}
                      className="w-full h-24 object-cover rounded border border-gray-200"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <button
                      type="button"
                      onClick={() => removeCurrentImage(idx)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 opacity-0 group-hover:opacity-100 transition"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={keepExistingImages}
                  onChange={(e) => setKeepExistingImages(e.target.checked)}
                  className="w-4 h-4"
                />
                Keep existing images
              </label>
            </div>
          )}

        
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {keepExistingImages && currentImages.length > 0 ? "Add New Images" : "Upload Images"}
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {newImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-3">
                {imagePreviews.map((preview, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={preview}
                      alt={`preview-${idx}`}
                      className="w-full h-24 object-cover rounded border border-gray-300 border-dashed"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(idx)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 opacity-0 group-hover:opacity-100 transition"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., Cow, Goat, Sheep"
            />
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age (months)
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 24"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 5"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price (Rs.)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 50000"
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., Karachi, Punjab"
            />
          </div>

          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe the animal in detail..."
            />
          </div>

          
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Animal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
