import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-10">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Party Booking App</h2>
      <button
        onClick={() => navigate("/book")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Book a Party
      </button>
    </motion.div>
  );
};

export default HomePage;
