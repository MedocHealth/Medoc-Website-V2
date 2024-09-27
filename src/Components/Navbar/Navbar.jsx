import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import medocNav from '../../Images/logo-nav.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-sm custom-nav rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={medocNav} alt="MEDOC" />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex lg:space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/ecosystem">Ecosystem</NavLink>
            <NavLink to="/vitals">Vitals</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
          </div>
          
          {/* Desktop buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <button className="download-btn bg-white text-green-600 border border-green-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Download App
            </button>
            <button className=" text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 contact-us">
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
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
            <MobileNavLink to="/pricing">Pricing</MobileNavLink>
            <MobileNavLink to="/ecosystem">Ecosystem</MobileNavLink>
            <MobileNavLink to="/vitals">Vitals</MobileNavLink>
            <MobileNavLink to="/pricing">Pricing</MobileNavLink>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button className="w-full text-left block bg-white text-green-600 border border-green-600 px-3 py-2 rounded-md text-base font-medium hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Download App
            </button>
            <button className=" w-full text-left block bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mobile-contact-us">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-500 hover:bg-gray-50 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
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