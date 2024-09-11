import React, { useEffect, useRef, useState } from 'react';

const Creativity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section className="mt-10 lg:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-row justify-center items-center">
          <article className="w-[80%]">
            <h1 className="text-[3rem] font-hero font-mono font-semibold">
              We’ve crafted
            </h1>
            <p className="text-[1.5rem]">
              <span className="text-[1.1em] text-orange-300">Websites</span> with
              complex functionality, featuring diverse interfaces and innovative
              designs tailored to every need.
            </p>
          </article>
        </div>

        <div className="grid place-items-center relative h-[60vh] md:h-[70vh] lg:h-[90vh]">
          <div
            ref={elementRef}
            className={`w-[90%] h-[90%] flex transition-all delay-100 relative ${
              !isVisible && 'scale-[0.5]'
            }`}
          >
            {/* Add meaningful alt descriptions */}
            <img
              src="https://plus.unsplash.com/premium_photo-1681566925312-948c8a896b37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[50%] h-[60%] object-cover absolute top-[50%] left-[60%] z-20 -translate-y-[50%] rounded-2xl -translate-x-[50%]"
              alt="Creative website design with advanced functionality"
            />
            <img
              src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[50%] h-[60%] object-cover absolute top-[40%] -rotate-12 left-[50%] -translate-y-[50%] rounded-2xl -translate-x-[50%]"
              alt="Dynamic and innovative user interface"
            />
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-[50%] h-[60%] object-cover absolute top-[45%] -rotate-6 left-[55%] -translate-y-[50%] rounded-2xl -translate-x-[50%]"
              alt="Visually appealing web design example"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
