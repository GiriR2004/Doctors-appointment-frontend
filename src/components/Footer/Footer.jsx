import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm">Medical Center</p>
          <p className="text-sm"> Main Street</p>
          <p className="text-sm">Coimbatore</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm">Facebook</a>
            <a href="#" className="text-sm">Twitter</a>
            <a href="#" className="text-sm">Instagram</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <a href="#" className="text-sm mb-1">Home</a>
          <a href="#" className="text-sm mb-1">Doctors</a>
          <a href="#" className="text-sm mb-1">Services</a>
          <a href="#" className="text-sm">Contact</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 Doctor's Appointment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
