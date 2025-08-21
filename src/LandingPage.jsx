import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">📝</span>
          <span className="font-bold text-xl text-indigo-600">My Tasks</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>

        {/* Try Now Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="px-5 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition"
        >
          Try Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 py-20">
        {/* Left Column */}
        <div className="max-w-xl text-white space-y-6">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
            ✨ New: Smart Task Organization
          </span>
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to Your <br /> Productivity Journey
          </h1>
          <p className="text-lg text-white/80">
            Transform your daily chaos into organized success. My Tasks helps
            you stay focused, prioritize what matters, and achieve your goals
            with elegant simplicity.
          </p>

          {/* Buttons */}
          <div className="space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              Start Organizing
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column - Animated Task Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto mt-12 md:mt-0"
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <span>🚀</span>
              <span>Today's Tasks</span>
            </h3>
          </div>

          {/* Stats */}
          <div className="p-6 grid grid-cols-3 gap-4 bg-gray-50 border-b">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-xs text-gray-600">Total</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-xs text-gray-600">Done</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-xs text-gray-600">Pending</div>
            </div>
          </div>

          {/* Task List */}
          <div className="p-6 space-y-4">
            {[
              { text: "Review project proposal", completed: true },
              { text: "Team meeting at 2 PM", completed: true },
              { text: "Prepare presentation slides", completed: false },
              { text: "Call client about feedback", completed: false },
            ].map((task, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    task.completed
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {task.completed && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <span
                  className={`flex-1 ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
