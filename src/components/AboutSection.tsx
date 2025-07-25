import React from 'react';
import { UserIcon, BookOpenIcon, HeartIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          ABOUT US
        </h2>
        <div className="w-20 h-1 bg-purple-700 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <UserIcon className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
              The Importance of Your Health
            </h3>
            <p className="text-gray-600 text-center">
              Our chiropractors put your specific needs first. We are proud to
              provide high-quality care of exceptional standards through our
              experience and commitment to listening to all our patients. Our
              goal is to improve your lifestyle by caring for your health.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <BookOpenIcon className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
              Experienced Knowledge
            </h3>
            <p className="text-gray-600 text-center">
              With years of experience, our chiropractors are skilled in
              analyzing your body and creating personalized treatment and
              rehabilitation plans to benefit your health. We understand the
              importance of educating you to help you get better so that you can
              heal quickly.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartIcon className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
              Chiropractors Who Care
            </h3>
            <p className="text-gray-600 text-center">
              Not only will our team treat your existing conditions, we strive
              to prevent pain and illness from disrupting your life. We want to
              help improve your quality of life, and reach your wellness goals
              and help your body achieve its best life possible.
            </p>
          </div>
        </div>
      </div>
    </section>;
};