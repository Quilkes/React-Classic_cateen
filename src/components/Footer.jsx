import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <section className='footer-sec-1'>
        <Link to=''>Delivery Information</Link>
        <Link to=''>Site Map</Link>
        <Link to=''>Privacy Policy</Link>
        <Link to=''>FAQ</Link>
      </section>

      <section className='footer-sec-2'>
      <Link to=''>Terms and Condition</Link>
      <Link to=''>Job Opportunity</Link>
      <Link to=''>Patnership</Link>
      <Link to=''>Social Media link</Link>
      </section>
    </footer>
  )
}

export default Footer