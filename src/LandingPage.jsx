import React, { useState, useEffect } from 'react';
import { Plus, FileText, CheckCircle, Briefcase, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // ✅ redirect to path
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating Task Icons */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce delay-300">📝</div>
      <div className="absolute top-40 right-20 text-5xl opacity-25 animate-bounce delay-700">✅</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce delay-1000">📋</div>
      <div className="absolute top-60 right-10 text-4xl opacity-15 animate-bounce delay-500">🎯</div>

      {/* Navigation */}
      <nav className="z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
<div className="flex items-center space-x-2">
  <div className="w-10 h-10 rounded-lg overflow-hidden">
    <img 
      src="/logo.webp"   // 👈 put your image path here
      alt="Logo"
      className="w-full h-full object-cover"
    />
  </div>
  <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
    My Tasks
  </span>
</div>


            {/* Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Features
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Contact
              </button>
            </div>

            {/* ✅ Try Now button navigates */}
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="bg-gradient-to-r from-pink-300 to-purple-400 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Try Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-4 py-2">
                <span className="text-yellow-500 animate-pulse">✨</span>
                <span className="text-sm font-medium text-indigo-700">New: Smart Task Organization</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to Your{' '}
                  <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                    Productivity Journey
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your daily chaos into organized success. My Tasks helps you stay focused, 
                  prioritize what matters, and achieve your goals with elegant simplicity.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* ✅ Start Organizing button navigates */}
                <button 
                  onClick={() => handleNavigation('/dashboard')}
                  className="bg-gradient-to-r from-pink-300 to-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Organizing</span>
                  <span>🚀</span>
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="border-2 border-indigo-200 text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - App Mockup */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                
                {/* Main Mockup */}
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-md mx-auto">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-pink-300 to-purple-400 p-6 text-white">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚀</span>
                      <h3 className="text-xl font-bold">Today's Tasks</h3>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-gray-900">8</div>
                        <div className="text-xs text-gray-600">Total</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-green-600">5</div>
                        <div className="text-xs text-gray-600">Done</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                        <div className="text-2xl font-bold text-orange-600">3</div>
                        <div className="text-xs text-gray-600">Pending</div>
                      </div>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="p-6 space-y-4">
                    {[
                      { text: "Review project proposal", completed: true },
                      { text: "Team meeting at 2 PM", completed: true },
                      { text: "Prepare presentation slides", completed: false },
                      { text: "Call client about feedback", completed: false }
                    ].map((task, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          task.completed 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}>
                          {task.completed && <span className="text-white text-xs">✓</span>}
                        </div>
                        <span className={`flex-1 ${
                          task.completed 
                            ? 'text-gray-500 line-through' 
                            : 'text-gray-900'
                        }`}>
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
