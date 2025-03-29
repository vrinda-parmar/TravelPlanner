import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-12 bg-gradient-to-r from-gray-900 to-blue-950 -mt-20 w-full ">
      <div className="container mx-auto flex flex-col items-center text-center px-4 md:px-8">
        {/* Contact Info */}
        <h2 className="text-3xl font-bold mb-4 text-blue-400 pt-10">Contact Me</h2>
        <p className="text-lg">Vrinda Parmar</p>
        <p className="text-lg">📧 <a href="mailto:vrindaparmar115@gmail.com" className="text-blue-400 hover:underline">vrindaparmar115@gmail.com</a></p>
        <p className="text-lg">📞 <a href="tel:9138467720" className="text-blue-400 hover:underline">9138467720</a></p>

        {/* Divider */}
        <div className="w-full sm:w-3/4 md:w-1/2 border-t border-gray-600 my-6"></div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm sm:text-base">&copy; {new Date().getFullYear()} Vrinda Parmar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
