import React from "react";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
function ContactPage() {
  return (
    <div className="bg-black h-screen px-20 ">
      <div className="pt-20">
        <div className="flex justify-center text-6xl font-bold">
          <h1 className="text-white">Contact Us</h1>
        </div>
        <h3 className="text-white text-2xl font-bold mt-4">
          ⭐ “Have a question? We’re always here to help you with your hens and
          eggs needs. Contact us anytime!” ⭐
        </h3>
        <h5 className="text-white text-2xl mt-2">
          📩 We love to hear from you!
        </h5>
        <p className="text-white mt-2 text-2xl">
          Whether you want to buy healthy hens, need farm guidance, or have any
          questions — just message us. Our team will respond as soon as
          possible! 🐔✨
        </p>
      </div>
      <div className="mt-12">
        <div className="flex flex-col gap-3">
          <h5 className="text-green-800 flex font-black gap-2 text-2xl ">
            <p className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
              <FaHome className="" />
            </p>
            Address
          </h5>
          <p className="text-white pl-12">Lahore Ali Town Punjab Pakistan</p>
          <h5 className="text-green-800 flex font-black gap-2 text-2xl ">
            <p className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
              <IoCall className="" />
            </p>
            Phone
          </h5>
          <p className="text-white pl-12">03166073020</p>
          <h5 className="text-green-800 flex font-black gap-2 text-2xl ">
            <p className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
              <MdOutgoingMail className="" />
            </p>
            Gmail
          </h5>
          <p className="text-white pl-12">sohaibahmad.dev@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
