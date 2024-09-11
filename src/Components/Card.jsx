import React, { useEffect, useRef, useState } from 'react';

const Card = ({ item, contactRef, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Visibility threshold
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <article ref={elementRef} className={`transition-all w-full h-full ${!isVisible && 'scale-[0.5]'} `}>
      <div className="flex flex-col black-glass-background relative h-full shadow-lg transition-all hover:shadow-[#c5c5c5bb] rounded-3xl">
        
        {/* Card Content */}
        <header className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h1 className="text-lg font-medium tracking-tighter text-white lg:text-3xl mb-2">
                {item.title}
              </h1>
              <p className="mt-2 text-sm text-white">{item.subTitle}</p>
              <h2 className="text-lg cursor-pointer font-medium tracking-tighter text-white lg:text-2xl mt-4">
                Starting At
              </h2>
            </div>

            <div className="mt-2">
              <p>
                <span className="text-5xl font-light tracking-tight text-white">
                  ₹{item.startingPrice}
                </span>
                {item.monthlyCharge && (
                  <span className="text-base font-medium text-white"> /mo </span>
                )}
              </p>
            </div>
          </div>
        </header>

        {/* Contact Button */}
        <footer className="flex w-full px-6 pb-8 sm:px-8">
          <button
            onClick={() => scrollToSection(contactRef)}
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full inline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
          >
            Contact us
          </button>
        </footer>

      </div>
    </article>
  );
};

export default Card;
