"use client";

import { useState } from "react";
// import { FaDownload } from "react-icons/fa";
import { X } from "lucide-react";

interface DownloadBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadBrochureModal({
  isOpen,
  onClose,
}: DownloadBrochureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Neelkanth Dreamz", // You can set this dynamically as needed
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      return "Please fill in all fields.";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      return "Enter a valid 10-digit phone number.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return "Enter a valid email address.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Trigger download
        const link = document.createElement("a");
        link.href = "/uploads/NeelkanthDreamz.pdf";
        link.download = "NeelkanthDreamz.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        onClose(); // Close modal
        setFormData({ ...formData, name: "", phone: "", email: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to submit. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-6 rounded-xl relative shadow-xl animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Download Brochure
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone number"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-emerald-600 transition cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit & Download"}
          </button>
        </form>
      </div>
    </div>
  );
}
