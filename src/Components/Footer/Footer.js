import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row  items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0 ">
            <h3 className="text-2xl md:text-2xl sm:text-l font-bold text-white font-sanv">FinEdge</h3>
            <p className="ml-2 text-gray-400 sm:text-m font-sand" >| Revolutionizing Cross-border Payments</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FinEdge. All Rights Reserved. | <span className="underline">Privacy Policy</span> | <span className="underline">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
