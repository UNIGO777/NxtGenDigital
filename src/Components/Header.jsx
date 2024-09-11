import React, { useEffect, useRef, useState } from 'react';
import Logo from "../assets/img/Logo.png";
import useScrollLock from '../CostomHooks/StopScrolling';
import { useParams } from 'react-router-dom';

const Header = ({ serviceRef, workRef, pricingRef, contactRef, scrollToSection }) => {
  const menuref = useRef(null);
  const [menu, setMenu] = useState(false);
  const param = useParams();

  const menuClick = (e) => {
    setMenu(e.target.checked);
  };

  useEffect(() => {
    menuref.current.checked = false;
    setMenu(false);
  }, [param]);

  useScrollLock(menu);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 769 && menu) {
      setMenu(false);
      menuref.current.checked = false;
    }
  }, [windowWidth]);

  const Links = [
    { title: 'Works', ref: workRef },
    { title: 'Services', ref: serviceRef },
    { title: 'Pricing', ref: pricingRef },
    { title: 'Contact', ref: contactRef },
  ];

  return (
    <>
      <header id="header" className="w-full min-h-10 flex justify-between black-glass-background py-7 px-5 md:px-16 lg:px-24">
        <div className="Logo max-w-[30%] md:max-w-[15%] max-h-10 text-xl flex items-center">
          <img src={Logo} alt="NexgenDigitals Logo" />
        </div>

        <nav id="Links" className="hidden md:flex text-lg font-mono gap-10 items-center">
          {Links.map((item, key) => (
            <p
              key={key}
              onClick={() => scrollToSection(item.ref)}
              className="cursor-pointer opacity-80 hover:opacity-100 hover:scale-[1.2] transition-all navbar-links"
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

        <button
          className="max-h-10 md:hidden relative z-10 p-2"
          aria-label="Toggle navigation menu"
          onClick={() => setMenu(!menu)}
        >
          <input type="checkbox" id="checkbox" ref={menuref} onClick={menuClick} aria-expanded={menu ? "true" : "false"} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </button>

        {menu && (
          <nav className="h-screen grid place-items-center absolute top-0 left-0 w-screen black-glass-background">
            <div className="grid gap-10">
              {Links.map((item, key) => (
                <p
                  key={key}
                  onClick={() => {
                    menuref.current.checked = false;
                    setMenu(false);
                    scrollToSection(item.ref);
                  }}
                  className="opacity-80 hover:opacity-100 hover:scale-[1.2] transition-all navbar-links"
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      menuref.current.checked = false;
                      setMenu(false);
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
    </>
  );
};

export default Header;
