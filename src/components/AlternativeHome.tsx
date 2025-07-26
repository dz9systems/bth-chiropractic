import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight, CheckCircle, Clock, Calendar, Users, Activity, Heart, Award } from 'lucide-react';
export const AlternativeHome = ({
  showAlternative,
  setShowAlternative
}) => {
  return <div className="w-full min-h-screen bg-white font-sans">
      <Header showAlternative={showAlternative} setShowAlternative={setShowAlternative} />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                  Precision Care for Pain Relief
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Specialized chiropractic treatment tailored to your unique
                  needs, providing effective relief and promoting long-term
                  wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#book" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-800 transition-colors">
                    Book Appointment
                  </a>
                  <a href="#learn" className="inline-flex items-center text-purple-700 font-medium px-6 py-3">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/bth-chiropractic/neck-crack.jpg" alt="Chiropractor examining patient's back" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* Treatment Approach Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden">
                <img src="/bth-chiropractic/neck-adjustment.jpg" alt="Chiropractor performing neck adjustment" className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                  Embrace Holistic Health Through Natural Care
                </h2>
                <p className="text-gray-600 mb-8">
                  Our approach integrates advanced chiropractic techniques with
                  personalized care plans to address the root cause of your
                  discomfort, not just the symptoms.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Personalized Treatment Plans
                      </h3>
                      <p className="text-gray-600">
                        Tailored specifically to your unique condition and
                        health goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Advanced Techniques
                      </h3>
                      <p className="text-gray-600">
                        Using the latest evidence-based methods for optimal
                        results
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Holistic Approach
                      </h3>
                      <p className="text-gray-600">
                        Addressing your whole health for lasting wellness and
                        recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Expert Healthcare Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Expert Healthcare for Your Recovery
              </h2>
              <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 relative">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold absolute -top-5 left-8">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 mt-4">
                  Initial Assessment
                </h3>
                <p className="text-gray-600">
                  Comprehensive evaluation of your condition, medical history,
                  and specific concerns to develop a targeted treatment
                  approach.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 relative">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold absolute -top-5 left-8">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 mt-4">
                  Targeted Treatment
                </h3>
                <p className="text-gray-600">
                  Precise adjustments and therapies designed to address your
                  specific pain points and restore proper function to your body.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 relative">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold absolute -top-5 left-8">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 mt-4">
                  Ongoing Care
                </h3>
                <p className="text-gray-600">
                  Continuous support with preventative strategies and
                  maintenance care to ensure lasting results and optimal health.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Treatment Expertise Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Treatment Expertise
              </h2>
              <div className="w-20 h-1 bg-purple-700 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We specialize in a range of treatments designed to address
                various conditions and promote overall wellness.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/back-crack1.jpg" alt="Spinal Adjustment" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Spinal Adjustment
                  </h3>
                  <p className="text-gray-600">
                    Precise manual techniques to correct spinal alignment,
                    improve mobility, and relieve pressure on nerves.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/soft-tissue.jpg" alt="Soft Tissue Therapy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Soft Tissue Therapy
                  </h3>
                  <p className="text-gray-600">
                    Targeted massage and myofascial release techniques to reduce
                    muscle tension and improve circulation.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/shoulder.jpg" alt="Rehabilitation Exercises" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Rehabilitation Exercises
                  </h3>
                  <p className="text-gray-600">
                    Customized exercise programs to strengthen supporting
                    muscles and prevent future injuries.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/spinal-twist2.jpg" alt="Posture Correction" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Posture Correction
                  </h3>
                  <p className="text-gray-600">
                    Assessment and training to improve alignment and reduce
                    strain on your spine and joints.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/nutritional-guidance.jpeg" alt="Nutritional Guidance" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Nutritional Guidance
                  </h3>
                  <p className="text-gray-600">
                    Dietary recommendations to support healing, reduce
                    inflammation, and promote overall wellness.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80" alt="Lifestyle Advice" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Lifestyle Advice
                  </h3>
                  <p className="text-gray-600">
                    Practical recommendations for daily activities to prevent
                    pain and support your treatment goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Trusted Experience Matters
              </h2>
              <div className="w-20 h-1 bg-purple-700 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">5000+</h3>
                    <p className="text-gray-600 text-sm">Satisfied Patients</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  We've successfully treated thousands of patients with various
                  conditions, helping them regain mobility and live pain-free.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      19+ Years
                    </h3>
                    <p className="text-gray-600 text-sm">Of Experience</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  With nearly two decades of experience, our practice has
                  developed expertise in treating a wide range of conditions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Top Rated
                    </h3>
                    <p className="text-gray-600 text-sm">5-Star Service</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our commitment to exceptional care has earned us consistent
                  5-star ratings and glowing testimonials from our patients.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Values of Working With Us
                </h2>
                <p className="text-gray-600 mb-8">
                  At BTH Chiropractic, we're committed to providing exceptional
                  care that goes beyond just treating symptoms. Our approach is
                  built on core values that prioritize your health and
                  well-being.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Heart className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        Patient-Centered Care
                      </h3>
                      <p className="text-gray-600">
                        Your needs and goals are at the center of everything we
                        do, with treatment plans tailored specifically to you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Activity className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        Evidence-Based Approach
                      </h3>
                      <p className="text-gray-600">
                        Our treatments combine the latest research with
                        extensive clinical experience for optimal results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        Dedicated Time & Attention
                      </h3>
                      <p className="text-gray-600">
                        We never rush appointments, ensuring you receive the
                        focused care and attention you deserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/bth-chiropractic/nurse-doctor.avif" alt="Professional chiropractor performing neck adjustment" className="w-full h-auto object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section id="book" className="py-16 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference that personalized chiropractic care can
              make in your life. Schedule your appointment now.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:5105235000" className="bg-white text-purple-700 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
                Call (510) 523-5000
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Blog & Articles
              </h2>
              <div className="w-20 h-1 bg-purple-700 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our latest insights on chiropractic care, pain
                management, and maintaining a healthy lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/spinal-health.jpeg" alt="Spinal health tips" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    5 Daily Habits for Better Spinal Health
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Simple practices you can incorporate into your routine to
                    maintain a healthy spine and prevent pain.
                  </p>
                  <a href="#" className="text-purple-700 font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src="/bth-chiropractic/desktop-ergonomics.webp" alt="Desk ergonomics" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Desk Ergonomics: Preventing Work-Related Pain
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How to set up your workspace to avoid neck, back, and wrist
                    pain during long hours at the computer.
                  </p>
                  <a href="#" className="text-purple-700 font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Stretching exercises" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Essential Stretches for Back Pain Relief
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Simple yet effective stretching routines you can do at home
                    to alleviate back pain and improve flexibility.
                  </p>
                  <a href="#" className="text-purple-700 font-medium inline-flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};