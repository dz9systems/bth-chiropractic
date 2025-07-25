import React, { useEffect, useState } from 'react';
export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Check if screen is mobile sized on component mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Initial check
    checkScreenSize();
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
  // Video sources
  const desktopVideo = 'https://firebasestorage.googleapis.com/v0/b/smart-lead-agent-9f41e.appspot.com/o/bth-web.mp4?alt=media&token=798d4d70-50a7-4313-92a9-4b8493a19fd9';
  const mobileVideo = 'https://firebasestorage.googleapis.com/v0/b/smart-lead-agent-9f41e.appspot.com/o/mobile-video.mp4?alt=media&token=3fdb624f-ec70-4512-a1a5-49182b0b6c14';
  // Fallback images
  const desktopFallback = 'https://firebasestorage.googleapis.com/v0/b/smart-lead-agent-9f41e.appspot.com/o/bth-chiropractic.jpg?alt=media&token=7b782582-c3a6-4f87-afbf-9f3e1a1f4235';
  const mobileFallback = 'https://firebasestorage.googleapis.com/v0/b/smart-lead-agent-9f41e.appspot.com/o/bth-chiropractic-mobile.jpg?alt=media&token=7b782582-c3a6-4f87-afbf-9f3e1a1f4235';
  return <section className="relative w-full bg-gray-100">
      <div className="absolute inset-0 z-0">
        {/* Video background with responsive source */}
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={isMobile ? mobileVideo : desktopVideo} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src={isMobile ? mobileFallback : desktopFallback} alt="Chiropractor performing treatment on a patient" className="w-full h-full object-cover" />
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