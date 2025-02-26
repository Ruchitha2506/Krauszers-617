import React from 'react';
import { Utensils, Clock } from 'lucide-react';

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 to-red-600/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-white text-xl md:text-2xl font-medium mb-2">Welcome to</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              KRAUSZERS
              <span className="text-white"> - 617</span>
            </h1>
            <p className="text-white text-sm md:text-base font-medium">
              377 Campbell Avenue
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Utensils className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fresh Ingredients</h3>
              <p className="text-sm text-gray-200">Quality ingredients for the perfect sandwich</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <Clock className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Service</h3>
              <p className="text-sm text-gray-200">Made fresh while you wait</p>
            </div>
          </div>

          {/* Special Notice */}
          <div className="inline-block bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform duration-200">
            Visit Deli for Today's Specials
          </div>
        </div>
      </div>
    </div>
  );
}