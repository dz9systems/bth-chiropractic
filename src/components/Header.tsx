import React, { useState } from 'react';
import { PhoneIcon, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size="medium" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-gray-700 hover:text-purple-700 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-purple-700 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a href="tel:5105235000" className="flex items-center text-purple-700 font-medium">
            <PhoneIcon className="w-4 h-4 mr-2" />
            (510) 523-5000
          </a>
          <a href="#book" className="bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-800 transition-colors">
            Book Appointment
          </a>
        </div>
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <Logo size="medium" />
              <button className="text-gray-700" onClick={toggleMenu}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mb-8">
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="block text-lg text-gray-700 hover:text-purple-700 transition-colors" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="block text-lg text-gray-700 hover:text-purple-700 transition-colors" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="block text-lg text-gray-700 hover:text-purple-700 transition-colors" onClick={toggleMenu}>
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block text-lg text-gray-700 hover:text-purple-700 transition-colors" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="space-y-4">
              <a href="tel:5105235000" className="flex items-center text-purple-700 font-medium">
                <PhoneIcon className="w-4 h-4 mr-2" />
                (510) 523-5000
              </a>
              <a href="#book" className="block w-full bg-purple-700 text-white px-5 py-3 rounded-md text-center hover:bg-purple-800 transition-colors">
                Book Appointment
              </a>
            </div>
          </div>
        </div>}
    </header>;
};