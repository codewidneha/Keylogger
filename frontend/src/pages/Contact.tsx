import React from 'react';
import * as LucideIcons from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <LucideIcons.Phone size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <LucideIcons.Mail size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@medicare-hospital.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <LucideIcons.MapPin size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Health St, Medical City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <LucideIcons.Clock size={24} className="text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;