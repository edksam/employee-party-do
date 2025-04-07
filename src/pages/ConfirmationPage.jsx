import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const API_HEADERS = {
  Authorization: "Bearer your-auth-token",
  Accept: "application/json",
};

const ConfirmationPage = () => {
  const [bookedEmployees, setBookedEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("/api/bookings", {
        headers: API_HEADERS,
      });
      const data = await res.json();
      setBookedEmployees(data);
    };
    fetchBookings();
  }, []);

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="p-10 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-green-600">Booking Successful!</h2>
      <div className="bg-white shadow rounded p-4">
        <h3 className="font-semibold mb-2">Already Booked Employees:</h3>
        <ul className="list-disc list-inside">
          {bookedEmployees.map((emp, index) => (
            <li key={index}>{emp.employeeId} - Event {emp.eventId}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={() => navigate("/")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Home
        </button>
        <button onClick={() => navigate("/book")} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
          Book Again
        </button>
      </div>
    </motion.div>
  );
};

export default ConfirmationPage;
