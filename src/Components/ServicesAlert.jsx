import React, { useEffect, useRef, useState } from 'react';

const WorkAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Adjust threshold to control when visibility is detected
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
    <section className='mt-16 md:mb-16'>
      <div className='py-10 px-2'>
        <div
          ref={elementRef}
          className={`w-16 lg:w-32 transition-all duration-500 ease-in-out transform ${
            isVisible ? 'rotate-0 text-white opacity-100' : '-rotate-90 text-[#ffffff04] opacity-0'
          } mb-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="Arrow Icon"
            className="w-full h-full"
          >
            <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z" />
          </svg>
        </div>
        <div className='px-5 lg:px-10 font-mono text-xl md:text-2xl uppercase'>
          <h1>
            Websites development / Content Writing / SEO (Search Engine Optimization) / Meta Ads Management / Ecommerce Management
          </h1>
        </div>
      </div>
    </section>
  );
};

export default WorkAlert;
