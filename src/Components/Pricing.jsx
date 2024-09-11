import React from 'react';
import Card from './Card';

const Pricing = ({ pricingRef, contactRef, scrollToSection }) => {
  const pricingList = [
    {
      title: "Website Development",
      subTitle: "Crafting responsive and engaging websites tailored to your needs.",
      startingPrice: "9,999",
      monthlyCharge: false,
    },
    {
      title: "E-commerce Management",
      subTitle: "Optimizing and managing your online store for success.",
      startingPrice: "4,999",
      monthlyCharge: true,
    },
    {
      title: "SEO (Search Engine Optimization)",
      subTitle: "Boosting your website's visibility with targeted SEO strategies.",
      startingPrice: "4,999",
      monthlyCharge: true,
    },
    {
      title: "Meta Ads Management",
      subTitle: "Maximizing your online reach with expert Meta Ads management.",
      startingPrice: "4,999",
      monthlyCharge: false,
    },
  ];

  return (
    <section className='mb-10' ref={pricingRef} aria-labelledby="pricing-heading">
      
      <div className='h-[32vw] relative'>
        <div className="absolute grid place-content-center left-10 overflow-hidden transition-all">
          <div className='flex flex-col justify-center'>
            <h2 id="pricing-heading" className='sr-only'>Our Pricing Plans</h2>
            <span className='font-bold HeroBold text-[8vw] relative top-8 md:top-20 scale-[0.9] opacity-[1%]'>PRICING</span>
            <span className='font-bold HeroBold text-[8vw] right-[5vw] shine'>PRICING</span>
            <span className='font-bold HeroBold text-[8vw] relative -top-8 md:-top-20 scale-[0.9] opacity-[1%]'>PRICING</span>
          </div>
        </div>
      </div>

 
      <div className='cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10'>
        {pricingList.map((item, key) => (
          <Card 
            item={item} 
            contactRef={contactRef} 
            scrollToSection={scrollToSection} 
            key={key}  
            aria-label={`Pricing for ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
