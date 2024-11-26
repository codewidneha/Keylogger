import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/login" className="hover:text-blue-300">Patient Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Phone size={18} className="mr-2" /> (555) 123-4567</li>
              <li className="flex items-center"><Mail size={18} className="mr-2" /> info@medicare-hospital.com</li>
              <li className="flex items-center"><MapPin size={18} className="mr-2" /> 123 Health St, Medical City, MC 12345</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-blue-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;