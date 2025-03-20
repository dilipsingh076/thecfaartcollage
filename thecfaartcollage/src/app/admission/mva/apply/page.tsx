'use client';

export default function MVAApplyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            MVA Admission Form
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Apply for Master of Visual Arts (MVA) Program
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
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
                        required
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
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Educational Background */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Educational Background</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="bvaDegree" className="block text-sm font-medium text-gray-700 mb-2">
                        BVA Degree Details
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          id="bvaDegree"
                          name="bvaDegree"
                          placeholder="Institution Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                          required
                        />
                        <input
                          type="number"
                          id="bvaYear"
                          name="bvaYear"
                          placeholder="Year of Passing"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-2">
                        BVA Percentage/CGPA
                      </label>
                      <input
                        type="text"
                        id="percentage"
                        name="percentage"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Research Proposal */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Research Proposal</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="researchTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Proposed Research Title
                      </label>
                      <input
                        type="text"
                        id="researchTitle"
                        name="researchTitle"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="researchProposal" className="block text-sm font-medium text-gray-700 mb-2">
                        Research Proposal (max 1000 words)
                      </label>
                      <textarea
                        id="researchProposal"
                        name="researchProposal"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Address Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Complete Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                          PIN Code
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Upload */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Documents Upload</h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                        Passport Size Photo
                      </label>
                      <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="bvaMarksheet" className="block text-sm font-medium text-gray-700 mb-2">
                        BVA Marksheet
                      </label>
                      <input
                        type="file"
                        id="bvaMarksheet"
                        name="bvaMarksheet"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio
                      </label>
                      <input
                        type="file"
                        id="portfolio"
                        name="portfolio"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Declaration */}
                <div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="declaration" className="text-sm text-gray-600">
                      I hereby declare that all the information provided by me is true and correct. 
                      I understand that any false information may result in the rejection of my application.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 