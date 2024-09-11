"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../lib/util";
import ExploreBtn from "../animations/ExploreBtn/ExploreBtn";
import BoxToggle from "../animations/BoxToggle/BoxToggle";
import { Player } from "@lottiefiles/react-lottie-player";




export const StickyScroll = ({
  content,
  pricingRef,
  contentClassName
}: {
  content: {
    link: any;
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
    contentClassName?: string;
    
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
     
      className="h-[32rem] scroll-hidden overflow-y-auto  flex justify-center  relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-1 md:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className={`${index > 0 && "my-20"} `}>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold  flex justify-between items-center pr-4  text-slate-100"
              >
                      {item.title}
                      {/* <span className="hidden md:inline ml-3"><ExploreBtn link={`${item.link}`} /></span> */}
                     
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-lg mt-5 mb-10"
              >
                {item.description}
                  </motion.p>
                  
                  {/* <span className="  "><ExploreBtn link={`${item.link}`} /></span> */}
                  
                  <span className="   "><ExploreBtn title={"Pricing"}  onClick={scrollToSection} pricingRef={pricingRef}  /></span>
                  
            </div>
          ))}
          <div className="md:h-20 lg:h-32" />
        </div>
      </div>
      <div
        
        className={cn(
          "hidden md:block h-[full] relative lg:h-[full] bg-black bg-opacity-15  w-[50vw] rounded-md backdrop-blur-md sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
      <div className="w-full h-full absolute flex items-center  justify-center z-10"><iframe src="https://lottie.host/embed/4eadbbd7-0b85-48d9-8c0a-0af55d87e5e1/cGTZaRwURp.json"></iframe> </div>
        <div className="w-full h-full z-20 relative">{content[activeCard].content ?? null}</div>
      </div>
    </motion.div>
  );
};
