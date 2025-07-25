import React from 'react';
import { PhoneIcon, Mail, Clock, MapPin, Facebook } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          CONTACT US
        </h2>
        <div className="w-20 h-1 bg-purple-700 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Call to Schedule an Appointment
            </h3>
            <p className="text-gray-600 mb-6">
              Please contact us directly with any questions or scheduling
              inquiries you may have.
            </p>
            <div className="flex justify-center mb-4">
              <a href="tel:5105235000" className="inline-flex items-center text-purple-700 font-bold text-xl">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (510) 523-5000
              </a>
            </div>
            <p className="text-gray-600 mb-6">
              Fax any documents to (510) 364-4041
            </p>
            <div className="flex justify-center mb-8">
              <a href="mailto:bth@example.com" className="inline-flex items-center text-purple-700">
                <Mail className="w-5 h-5 mr-2" />
                info@bthchiropractic.com
              </a>
            </div>
            <div className="flex justify-center mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Monday:</p>
                  <p className="text-gray-600">9 to 5:30</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Tuesday:</p>
                  <p className="text-gray-600">9 to 6</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Wednesday:</p>
                  <p className="text-gray-600">9 to 5:30</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Thursday:</p>
                  <p className="text-gray-600">9 to 5:30</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-purple-700 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Fri, Sat, Sun:</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};