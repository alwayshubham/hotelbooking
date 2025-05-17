"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data:", form);
    alert("Your booking request has been submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Check-In Date</label>
          <input
            type="date"
            name="checkIn"
            required
            value={form.checkIn}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Check-Out Date</label>
          <input
            type="date"
            name="checkOut"
            required
            value={form.checkOut}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Room Type</label>
        <select
          name="roomType"
          required
          value={form.roomType}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
        >
          <option value="">-- Select Room --</option>
          <option value="Standard Double">Standard Double</option>
          <option value="Deluxe King">Deluxe King</option>
          <option value="Executive Suite">Executive Suite</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Special Requests</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-md"
          placeholder="Any preferences or notes..."
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Booking
      </button>
    </form>
  );
}
