import React, { useEffect, useRef, useState } from 'react'
import "../css/workcard.css"
import WorkDetails from './WorkDetails';



const WorkCard = ({project}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  console.log(project)
  
  
  
  
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
  return (<>
   
<div class="temporary__storage h-fit p-4">
  <div class="card w-[100%] cursor-pointer"  onClick={()=>setIsOpen(true)}>
        <div class="image overflow-hidden rounded-md">
          <img src={project?.images[0]} className='h-full w-full object-cover' alt="" />
        </div>
    <div class="image__overlay"></div>
    <div class="content">
      
      <div class="content__text">
            <span class="stream__title">{ project?.description?.title}</span>
        <div class="content__body ">
          <span class="streamer__name">{project?.name}</span>
          <span class="event h-5  mt-2 mb-2 stream__title">{ project?.description?.overview}...</span>
        </div>
       
        <div class="categories flex  flex-wrap  gap-2">
         
              {
                project?.description?.techStack.map((item) => {
                   return <p class="categories__btn text-nowrap" >{item}</p>
                 })
              }
        </div>
      </div>
    </div>
  </div>
    </div>
    { isOpen && <WorkDetails project={project} forClose={() => setIsOpen(false)} /> } </>
  )
}

export default WorkCard