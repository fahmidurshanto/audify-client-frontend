import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Adify.cloud</h3>
          <p>The easiest way to create ad creatives.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Features</a></li>
            <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Social</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2025 Adify.cloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
