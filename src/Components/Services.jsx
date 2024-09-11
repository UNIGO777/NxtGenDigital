import React from 'react';
import Card from './Card';
import { StickyScrollRevealDemo } from '../ui/Stickyfinal';

const Work = ({ serviceRef, pricingRef }) => {
  const projects = [
    {
      title: 'Responsive Website Development',
      description: 'Building dynamic and mobile-friendly websites.',
      image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop',
      link: 'https://www.google.com',
      github: 'https://github.com',
    },
    {
      title: 'E-commerce Platform',
      description: 'Designing high-performance e-commerce websites.',
      image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop',
      link: 'https://www.google.com',
      github: 'https://github.com',
    },
    {
      title: 'Portfolio Showcase',
      description: 'Showcasing creative work in a beautiful portfolio.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60',
      link: 'https://www.google.com',
      github: 'https://github.com',
    },
    {
      title: 'Business Landing Page',
      description: 'Professional landing pages to grow your business.',
      image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop',
      link: 'https://www.google.com',
      github: 'https://github.com',
    },
  ];

  return (
    <section ref={serviceRef} className='transition-all bg-[#1a1a1a] mb-10'>
      <div className='py-10'>
        {/* Services Section Header */}
        <div className='relative flex items-center justify-center overflow-hidden transition-all'>
          <span className='font-bold HeroBold text-[9vw] right-[5vw] -top-[3vw] scale-[0.9] opacity-[1%]'>Services</span>
          <span className='font-bold HeroBold text-[10vw] right-[5vw] top-[5vw] shine'>Services</span>
          <span className='font-bold HeroBold text-[9vw] right-[5vw] top-[13vw] scale-[0.9] opacity-[1%]'>Services</span>
        </div>
      </div>

      {/* Sticky Scroll Section */}
      <div className='py-10'>
        <StickyScrollRevealDemo pricingRef={pricingRef} />
      </div>

     
    </section>
  );
};

export default Work;



 {/* Projects Section */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
        {projects.map((project, index) => (
          <article key={index} className='bg-white shadow-lg rounded-lg p-5'>
            <img
              src={project.image}
              alt={`Preview of ${project.title}`}
              className='rounded-t-lg w-full h-48 object-cover mb-4'
            />
            <h3 className='font-bold text-xl mb-2'>{project.title}</h3>
            <p className='text-gray-700 mb-4'>{project.description}</p>
            <div className='flex justify-between items-center'>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                View Project
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='text-gray-700 hover:underline'>
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div> */}