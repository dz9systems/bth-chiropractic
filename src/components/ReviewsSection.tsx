import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
export const ReviewsSection = () => {
  const reviews = [{
    id: 1,
    name: 'Verified by Google Reviews',
    text: 'Transformed by Google Platinum, very professional service (5 stars)',
    date: '10/24/2023'
  }, {
    id: 2,
    name: 'Carol Baker',
    text: 'This customer did write a review.',
    date: '7/12/2023'
  }, {
    id: 3,
    name: 'Loretta Marquez (Office Manager of Oakland)',
    text: 'Great service with great experience!',
    date: '6/15/2023'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextReview = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  return <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          REVIEWS
        </h2>
        <div className="w-20 h-1 bg-purple-700 mx-auto mb-6"></div>
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-3xl font-bold ml-2 mr-4 text-gray-800">
              5.0
            </span>
          </div>
          <div>
            <p className="text-gray-700 font-medium">
              Back to Health Chiropractic Center
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
            </div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {reviews.map(review => <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                    </div>
                    <p className="text-gray-700 text-center mb-6 text-lg">
                      "{review.text}"
                    </p>
                    <div className="text-center">
                      <p className="font-medium text-gray-800">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" aria-label="Previous review">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" aria-label="Next review">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-purple-700' : 'bg-gray-300'}`} aria-label={`Go to review ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};