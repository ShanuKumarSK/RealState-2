"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBolt } from "react-icons/fa";

export default function ContactSellerCard() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Neelkanth Dreamz", // You can set this dynamically as needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Enter a valid email address.");
      return;
    }

    try {
      // Send data to your backend
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        
        // preserve project field when clearing form values
        setFormData({ ...formData, name: "", phone: "", email: "" }); // clear form
        router.push("/ThankYouPage"); // redirect to thank you page
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to server.");
    }
  };

  return (
    <>
      <div className="w-full max-w-sm mx-auto">
        {/* Highlight Banner */}
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-700 px-3 py-2 rounded-md text-sm font-medium mb-3">
          <FaBolt className="text-amber-500" />
          <span>Awesome! Most liked project in this area</span>
        </div>

        {/* Contact Seller Card */}
        <div className="bg-white p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-700">
            Thinking of Buying
          </h3>

          {/* Seller Info */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/uploads/Logo.png" // Replace with actual logo
              alt="Seller Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <p className="font-medium text-sm text-gray-700">
                Mangalam Builders and Promoters
              </p>
              <p className="text-sm text-gray-500">Agent</p>
              <p className="text-teal-600 font-semibold text-sm">
                +91 9511113578
              </p>
            </div>
          </div>

          <p className="text-base font-semibold text-gray-700 blink-text">
            For latest price & offers
          </p>
          <p className="text-base font-semibold mb-2 text-gray-700">
            Please share your contact
          </p>

          {/* Form Fields */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First and Last Name */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                required
              />
            </div>
            {/* </div> */}

            {/* Phone Number */}
            <div>
              <label
                htmlFor="jobRole"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Enter your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                required
              />
            </div>

            {/* Work email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center ">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={checked1}
                onChange={() => setChecked1(!checked1)}
                className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="agree"
                className="ml-2 text-xs text-gray-600 leading-snug"
              >
                I agree to be contacted by Advit Reality and agents via
                <span className="font-semibold text-green-600 block">
                  WhatsApp, SMS, phone, email etc
                </span>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={checked2}
                onChange={() => setChecked2(!checked2)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label
                htmlFor="agree"
                className="ml-2 text-xs text-gray-600 leading-snug"
              >
                I am interested in{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Home Loans
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white font-medium py-2 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
            >
              Get Contact Details
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
