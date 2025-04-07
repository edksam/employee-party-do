import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const API_HEADERS = {
  Authorization: "Bearer your-auth-token",
  Accept: "application/json",
};

const BookingPage = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [eventId, setEventId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://ec2-18-130-199-163.eu-west-2.compute.amazonaws.com:8084/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
      },
      auth: {
        username: "admin",
        password: "adminQwer"
      },
      body: JSON.stringify({ employeeId, eventId }),
    });
    navigate("/confirmation");
  };

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Book Your Spot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Event ID"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Submit Booking
        </button>
      </form>
    </motion.div>
  );
};

export default BookingPage;