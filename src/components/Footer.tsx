import React from 'react';
import { Logo } from './Logo';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo size="large" color="#7e22ce" textColor="#ffffff" />
          </div>
          <div className="mb-8">
            <a href="#book" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition-colors">
              Schedule an Appointment
            </a>
          </div>
          <div className="max-w-lg mx-auto mb-8">
            <p className="text-gray-400 mb-4">
              BTH Chiropractic is dedicated to helping you achieve optimal
              health through professional chiropractic care.
            </p>
            <p className="text-gray-400">
              Our team of experienced professionals is committed to providing
              personalized treatment plans that address your specific needs.
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} BTH Chiropractic. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};