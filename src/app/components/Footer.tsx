import React from 'react';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="w-full h-[4px] bg-blue-600 mb-10"></div>
        <p className="text-center">Top-movies | 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
