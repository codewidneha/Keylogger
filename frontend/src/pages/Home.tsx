import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <section className="hero bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MediCare Hospital</h1>
          <p className="text-xl mb-8">Providing compassionate care and cutting-edge medical services</p>
          <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="features py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <LucideIcons.Clock size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Care</h3>
              <p>Round-the-clock emergency services for your peace of mind.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <LucideIcons.Users size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Medical Team</h3>
              <p>Highly skilled doctors and staff dedicated to your health.</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md text-center">
              <LucideIcons.Stethoscope size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p>State-of-the-art medical equipment for accurate diagnosis and treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
          <p className="text-xl mb-8">Our team of experts is here to help you. Don't hesitate to reach out.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;