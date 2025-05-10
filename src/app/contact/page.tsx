'use client';

import { useState, useEffect } from 'react';
import { ChitrasantheBanner, Hero } from "@/src/components/common";
import { contactInfo } from "@/src/constants/content";
import { getContactData, submitContactForm, ContactResponse, ContactFormData } from '@/src/services/api/contact.service';
import { toast } from 'react-hot-toast';
import { API_BASE_URL } from '@/src/config/api.config';

export default function ContactPage() {
  const [contactData, setContactData] = useState<ContactResponse | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileError, setMobileError] = useState<string>('');

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data = await getContactData();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
        toast.error('Failed to load contact information');
      }
    };

    fetchContactData();
  }, []);

  const validateMobile = (value: string): boolean => {
    // Remove any non-digit characters
    const numbersOnly = value.replace(/\D/g, '');
    
    // Check if the number is between 10 and 15 digits
    if (numbersOnly.length < 10 || numbersOnly.length > 15) {
      setMobileError('Mobile number must be between 10 and 15 digits');
      return false;
    }
    
    setMobileError('');
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'mobile') {
      // Only allow numbers
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }));
      validateMobile(numbersOnly);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mobile before submission
    if (!validateMobile(formData.mobile)) {
      toast.error('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
      setMobileError('');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getApiImageUrl = (path: string | null | undefined): string | null => {
    if (!path || !API_BASE_URL) return null;
    return `${API_BASE_URL}/${path}`;
  };

  const backgroundImageUrl = getApiImageUrl(contactData?.banner?.banner_img) || 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop';
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero 
        title={contactData?.banner?.name || "Contact Us"}
        subtitle={contactData?.banner?.banner_txt || "Get in touch with us"}
        imageUrl={backgroundImageUrl}
        imageAlt="Contact Us Banner"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#FFD700] font-semibold text-sm uppercase tracking-wider">
              Reach Out To Us
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you&apos;re interested in our programs, have questions about admissions, or want to collaborate, 
              we&apos;re here to help bring your artistic vision to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div 
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">Available Mon-Sat</p>
              </div>
              
              <div 
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">24/7 Support</p>
              </div>
              
              <div 
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="w-12 h-12 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">Campus Tours Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Information */}
      <section id="contact-info" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={15}
                    className={`w-full px-4 py-2 border ${mobileError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent`}
                    placeholder="Enter your mobile number"
                  />
                  {mobileError && (
                    <p className="mt-1 text-sm text-red-500">{mobileError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div id="contact-info" className="bg-white rounded-xl p-8 shadow-lg">
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
      <section id="map-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62214.35711798764!2d77.50282174753387!3d12.946408666487406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0ef88499b7%3A0x34b001f7836bc13a!2sCollege%20Of%20Fine%20Arts%2C%20Karnataka%20Chitrakala%20Parishath!5e0!3m2!1sen!2sin!4v1744046757880!5m2!1sen!2sin"
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
      <ChitrasantheBanner />
    </main>
  );
} 