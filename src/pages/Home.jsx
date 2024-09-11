import React, { useRef, useState } from 'react'
import Header from '../Components/Header'
import AddNavFotter from '../HOC/AddNavFotter'
import Hero from './Hero'
import Level from '../Components/Level';
import Creativity from '../Components/Creativity';
import ServiceAlert from '../Components/ServicesAlert';
import Services from '../Components/Services';
import Work from '../Components/Works';
import Pricing from '../Components/Pricing';
import ContactUs from '../Components/ContactUs';
import Fotter from '../Components/Fotter';



const Home = () => {
  // Create refs for each section
  const serviceRef = useRef(null);
  const workRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <>
      <div className='h-[96px]  fixed w-full z-50'><Header serviceRef={serviceRef} workRef={workRef} pricingRef={pricingRef} contactRef={contactRef} scrollToSection={scrollToSection} /></div>
      <br /> <br /><br /><br />
      <Hero contactRef={contactRef} scrollToSection={scrollToSection} />
      <Creativity />
      <Level />
      <ServiceAlert />
      <Services serviceRef={serviceRef } pricingRef={pricingRef} />
      <Work workRef={workRef}  />
      <Pricing pricingRef={pricingRef} contactRef={contactRef} scrollToSection={scrollToSection}/>
      <ContactUs contactRef={ contactRef } />
      <div><Fotter serviceRef={serviceRef} workRef={workRef} pricingRef={pricingRef} contactRef={contactRef} scrollToSection={scrollToSection}/></div>

    </>
  )
}

export default Home