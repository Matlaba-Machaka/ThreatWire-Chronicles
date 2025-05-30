import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-full py-8 items-center justify-between text-[14px] text-gray-700 dark:text-gray-500'>
      <p>© {new Date().getFullYear()} ThreatWire Chronicles. All rights reserved.</p>
      <div className='flex gap-5'>
        <Link to='/contact'>Contact</Link>
        <Link to='/terms'>Terms of Service</Link>
        <Link to='/privacy'>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
