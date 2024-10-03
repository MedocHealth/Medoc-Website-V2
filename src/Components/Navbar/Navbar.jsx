import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import medocNav from '../../Images/logo-nav.png';
import './Navbar.css';

const Navbar = ({ scrollToHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="shadow-xl bg-white custom-nav rounded-lg z-50 sticky top-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={medocNav} alt="MEDOC" />
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:space-x-4">
            <NavLink to="/" className="nav-link hover:text-teal-500" onClick={scrollToHome}>
              Home
            </NavLink>
            <NavLink to="http://blog.medochealth.in" className="nav-link">
              Vitals
            </NavLink>
            <NavLink to="http://blog.medochealth.in/pricing" className="nav-link">
              Pricing
            </NavLink>
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <button
              className="download-btn bg-white border border-black-600 px-3 py-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 hover:scale-105 transition ease-in-out"
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/dev?id=5749449385881385609&hl=en_IN',
                  '_blank'
                )
              }
            >
              Download App
            </button>
            <button
              className="text-white px-3 py-1 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 contact-us hover:scale-105 transition ease-in-out"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="http://blog.medochealth.in">Vitals</MobileNavLink>
            <MobileNavLink to="http://blog.medochealth.in/pricing">Pricing</MobileNavLink>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              className="w-1/2 text-left block bg-white text-black-600 border px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-50"
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/dev?id=5749449385881385609&hl=en_IN',
                  '_blank'
                )
              }
            >
              Download App
            </button>
            <button
              className="w-full text-left block text-white px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-50 mobile-contact-us"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    {...props}
    className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 mx-4 px-3 py-2 rounded-md text-sm font-medium hover:border-b-2 border-[#41C1BA] transition ease-in-out"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
