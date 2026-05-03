"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import UpdateAnimalModal from "@/components/UpdateAnimalModal";

export default function Page() {
    const params = useParams();
    const router = useRouter();
    const paramId = params?.id ?? null;
    
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    // Derive id (params preferred, fallback to path for dev)
    const getIdFromPath = () => {
        if (typeof window === "undefined") return null;
        const parts = window.location.pathname.split("/").filter(Boolean);
        return parts[parts.length - 1] || null;
    };

    const id = paramId || getIdFromPath();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(Boolean(!animal));
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();
        const fetchAnimal = async () => {
            try {
                setLoading(true);
                setError("");

                const res = await fetch(`http://localhost:3001/sell-animals/${id}`, {
                    signal: controller.signal,
                });

                if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

                const data = await res.json();

                // Normalize response shape
                let animalData = data;
                if (data && typeof data === "object") {
                    if (data.animal) animalData = data.animal;
                    else if (data.data) animalData = data.data;
                    else if (Array.isArray(data) && data.length > 0) animalData = data[0];
                }

                setAnimal(animalData || null);
            } catch (err) {
                if (err.name === "AbortError") return;
                console.error("Error fetching animal:", err);
                setError(err.message || "Failed to load animal details");
            } finally {
                setLoading(false);
            }
        };

        fetchAnimal();

        return () => controller.abort();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <p className="text-white text-2xl">Loading animal details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500 text-2xl mb-6">Error: {error}</p>
                    <Link href="/" className="px-6 py-2 bg-green-600 text-white rounded inline-block">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!animal) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-2xl mb-6">No animal found</p>
                    <Link href="/" className="px-6 py-2 bg-green-600 text-white rounded inline-block">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Helpers
    const formatPrice = (p) => {
        if (p == null || p === "") return "—";
        const num = Number(p);
        if (Number.isNaN(num)) return p;
        return num.toLocaleString();
    };

    const mainImage = (animal.images && animal.images.length > 0 && animal.images[0]) || animal.image || null;

    const handleUpdateSuccess = (updatedData) => {
        // Normalize and set the updated animal data
        let animalData = updatedData;
        if (updatedData && typeof updatedData === "object") {
            if (updatedData.animal) animalData = updatedData.animal;
            else if (updatedData.data) animalData = updatedData.data;
            else if (Array.isArray(updatedData) && updatedData.length > 0) animalData = updatedData[0];
        }
        setAnimal(animalData || animal);
    };

    return (
        <>
            <div className="min-h-screen bg-black py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
                    <div className="bg-gray-100 flex items-center justify-center p-6">
                        {mainImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={mainImage}
                                alt={animal.category || "animal"}
                                className="max-w-full max-h-[70vh] object-contain rounded"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                            />
                        ) : (
                            <div className="w-full h-60 flex items-center justify-center bg-gray-200 rounded">
                                <p className="text-gray-500">No image available</p>
                            </div>
                        )}
                    </div>

                    <div className="p-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{animal.category || "Animal"}</h1>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-3 rounded">
                                <p className="text-sm text-gray-600">Age</p>
                                <p className="text-lg font-semibold text-gray-800">{animal.age ?? "—"} months</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                                <p className="text-sm text-gray-600">Gender</p>
                                <p className="text-lg font-semibold text-gray-800">{animal.gender || "—"}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                                <p className="text-sm text-gray-600">Quantity</p>
                                <p className="text-lg font-semibold text-gray-800">{animal.quantity ?? "—"}</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                                <p className="text-sm text-gray-600">Price</p>
                                <p className="text-xl font-bold text-green-600">Rs. {formatPrice(animal.price)}</p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="text-base text-gray-800">{animal.location || "—"}</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-2">Description</p>
                            <p className="text-gray-700 leading-relaxed">{animal.description || "No description available"}</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => router.back()}
                                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
                            >
                                Back
                            </button>

                            <button
                                onClick={() => setShowUpdateModal(true)}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                Update
                            </button>

                            <Link href={`/order/${id}`} className="flex-1">
                                <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Update Modal */}
        <UpdateAnimalModal
            animal={animal}
            id={id}
            isOpen={showUpdateModal}
            onClose={() => setShowUpdateModal(false)}
            onSuccess={handleUpdateSuccess}
        />
        </>
    );
}