import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className='text-center mt-5 mb-0 p-5 bg-dark '>
            <p><small>copyrights reserved © {year}</small></p>
      </footer>
    </div>
  );
};

export default Footer;