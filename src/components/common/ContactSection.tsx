'use client';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Have questions about our programs? Our admission team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Phone:</span> +91 1234567890
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> admission@thecfa.art
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span> 123 Art Street, Creative City, 12345
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 