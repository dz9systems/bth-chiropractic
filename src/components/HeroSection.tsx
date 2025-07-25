import React from 'react';
export const HeroSection = () => {
  return <section className="relative w-full bg-gray-100">
      <div className="absolute inset-0 z-0">
        {/* Video background */}
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/Video_for_Chiropractic_Website.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Chiropractor performing treatment on a patient's back" className="w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
          Alameda's trusted Chiropractor helping you get BACK TO HEALTH Since
          2004
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light">
          We've Got Your Back!
        </p>
        <a href="#book" className="inline-block bg-purple-700 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-purple-800 transition-colors shadow-lg">
          Book Appointment
        </a>
      </div>
    </section>;
};