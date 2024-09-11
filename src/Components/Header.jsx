import React, { useEffect, useState } from 'react';
import Logo from "../assets/img/Logo.png";
import useScrollLock from '../CostomHooks/StopScrolling';
import { useParams } from 'react-router-dom';

const Header = ({ serviceRef, workRef, pricingRef, contactRef, scrollToSection }) => {
  const [menu, setMenu] = useState(false);
  const param = useParams();
  
  // Ensure scroll lock is applied when menu is open
  useScrollLock(menu);

  // Track window width to handle responsive behavior
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close the menu when resizing to a width greater than 769px
  useEffect(() => {
    if (windowWidth > 769 && menu) {
      setMenu(false);
    }
  }, [windowWidth]);

  // Close the menu on route change
  useEffect(() => {
    setMenu(false);
  }, [param]);

  const Links = [
    { title: 'Works', ref: workRef },
    { title: 'Services', ref: serviceRef },
    { title: 'Pricing', ref: pricingRef },
    { title: 'Contact', ref: contactRef },
  ];

  return (
    <header id="header" className="w-full min-h-10 flex justify-between items-center black-glass-background py-7 px-5 md:px-16 lg:px-24">
      <div className="Logo max-w-[30%] md:max-w-[15%] max-h-10 text-xl flex items-center">
        <img src={Logo} alt="NexgenDigitals Logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex text-lg font-mono gap-10 items-center">
        {Links.map((item, key) => (
          <p
            key={key}
            onClick={() => scrollToSection(item.ref)}
            className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-[1.2] transition-all"
            role="button"
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === 'Enter') scrollToSection(item.ref);
            }}
          >
            {item.title}
          </p>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden z-20 p-3  text-white rounded focus:outline-none"
        aria-label="Toggle navigation menu"
        onClick={() => setMenu(!menu)} // Toggle menu state
      >
        {/* Add icon or simple bars for the button */}
        {menu? <div className="w-6 h-6 flex flex-col relative justify-between">
          <span className="block w-full h-1 rotate-45 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white"></span>
          <span className="block w-full h-1 -rotate-45 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white"></span>
        
        </div>:
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className="block w-full h-1 bg-white"></span>
          <span className="block w-full h-1 bg-white"></span>
          <span className="block w-full h-1 bg-white"></span>
        </div>}

      </button>

      {/* Mobile Menu */}
      {menu && (
        <nav className="h-screen grid place-items-center absolute top-0 left-0 w-screen black-glass-background z-10">
          <div className="grid gap-10">
            {Links.map((item, key) => (
              <p
                key={key}
                onClick={() => {
                  setMenu(false); // Close menu on link click
                  scrollToSection(item.ref);
                }}
                className="opacity-80 hover:opacity-100 hover:scale-[1.2] transition-all"
                role="button"
                tabIndex="0"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setMenu(false); // Close menu on Enter keypress
                    scrollToSection(item.ref);
                  }
                }}
              >
                {item.title}
              </p>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
