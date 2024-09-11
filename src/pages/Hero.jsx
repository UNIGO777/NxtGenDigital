import React from 'react'
import { Wave } from 'react-animated-text';
import DopTop from '../animations/DopTop/DopTop';
import BoxToggle from '../animations/BoxToggle/BoxToggle';
import GlowButton from '../animations/GlowButton/GlowButton';
import InputBox from '../animations/InputBox/InputBox';



const Hero = ({ contactRef, scrollToSection }) => {
    
    return (
        <main>
            

                <div className='h-[50vh] lg:h-[100vh]  grid grid-rows-2'>
                    <div className=' relative '>
                        <div className=' h-[15vw]  absolute w-full   bottom-0'>
                            <div className='relative h-full flex  items-center px-10 py-10 md:p-10'>
                                <span className='absolute md:left-[5vw] lg:left-[3vw] -top-5'><DopTop /></span>
                                <span className='text-[15vw] HeroBold z-10' >DREAMS</span>
                                <span className='absolute z-0 right-20 bottom-10 hidden lg:block'><BoxToggle /></span>
                            </div>
                        </div>


                        {/* <div>
                        <span className='absolute md:left-16 lg:left-24 md:bottom-36 lg:bottom-56'><DopTop/></span>
                        <span className='HeroBold  text-[16vw] absolute z-50 h-fit  left-[44%]  md:-bottom-10 lg:-bottom-14 -translate-x-[50%]' >DREAMS</span>
                        <span className='absolute right-[10%] top-[8%] z-10'><BoxToggle/></span></div> */}
                    </div>
                    <div className=' relative '>
                        <div className=' h-[15vw]  absolute w-full    top-3'>
                            <div className='relative h-full flex items-center justify-end   '>
                            <span className='text-[15vw] HeroBold z-10 px-10  relative ' ><p className='text-[30%] absolute top-0 py-[5%]  -left-[3%] md:-left-[8vw]'>into</p>REALITY</span>
                        {/* <p><sup className='text-[2rem] lg:text-[5rem] md:-top-10 md:left-10 lg:left-20 lg:-top-16'>Into</sup><span className='HeroBold  text-[16vw] absolute z-50 left-[58%] -top-10 md:-top-16 lg:-top-20 -translate-x-[50%]'>REALITY</span></p> */}

                        <span className=' absolute -bottom-28 z-10 left-[50%] -translate-x-[50%]'><GlowButton scrollToSection={scrollToSection} contactRef={contactRef} text={"Contect Us"} /></span>

                    </div>
                    </div>
                    </div>

                </div>


            
        </main>
    )
}

export default Hero