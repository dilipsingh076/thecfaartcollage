'use client';

import { contactInfo } from "@/src/constants/content";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our programs or campus
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Address</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>{contactInfo.address.line1}</p>
                    <p>{contactInfo.address.line2}</p>
                    <p>{contactInfo.address.line3}</p>
                    <p>{contactInfo.address.line4}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Phone</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Email</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.004968047831!2d77.54831131533015!3d12.952459989818228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7a06f8483d%3A0x100bdee2c1c3b1c3!2sCollege%20of%20Fine%20Arts!5e0!3m2!1sen!2sin!4v1648123456789!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 