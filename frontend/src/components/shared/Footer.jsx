// FOOTER.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Job Hunt</h3>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-600 hover:text-black">
            <FaFacebookF size={18} />
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-black">
            <FaTwitter size={18} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-black">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
