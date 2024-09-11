"use client";
import React from "react";
import { StickyScroll } from "./Sticky";
import ExploreBtn from "../animations/ExploreBtn/ExploreBtn";


const content = [
  {
    title: "Web Development",
    description:
      " Our website development services are tailored to create visually stunning, responsive, and high-performance websites. Whether you need a corporate site, an online portfolio, or a complex web application, we build solutions that are aligned with your brand identity and business objectives. From concept to launch, we ensure your website is optimized for user experience and search engine visibility.",
    content: (
        <video src="https://cdn.pixabay.com/video/2019/10/09/27706-365890968_large.mp4" className="w-full  h-full object-cover" autoPlay loop muted  ></video>
        ),
    link: "work/explore/webdevlopment"
    },
    {
        title: "Content Writing for Websites",
        description:
        "High-quality content is the backbone of any successful website. Our content writing services focus on crafting compelling, SEO-optimized copy that engages your audience and drives conversions. We understand the importance of tone and messaging, and we tailor our content to reflect your brand’s voice, ensuring that every word resonates with your target audience.",
        content: (
        <video src="https://videos.pexels.com/video-files/4496268/4496268-hd_1920_1080_25fps.mp4" className="w-full  h-full object-cover" autoPlay loop muted  ></video>
        
        ),
        link: "work/explore/contentwriting"
    },
    {
        title: "SEO (Search Engine Optimization)",
        description:
        "Enhance your online presence with our comprehensive SEO services. We optimize your website to rank higher on search engines, driving organic traffic and increasing visibility. Our strategies include keyword research, on-page optimization, technical SEO, and link-building, all designed to improve your site’s search engine rankings and deliver long-term results.",
        content: (
        <video src="https://cdn.pixabay.com/video/2022/12/30/144763-785265042_large.mp4" className="w-full  h-full object-cover" autoPlay loop muted  ></video>
        
        ),
        link: "work/explore/seo"
        
    },
    {
        title: "Meta Ads Management",
        description:
        "Maximize your digital reach with our Meta ads management services. We create and optimize ads on platforms like Facebook, Instagram, and other Meta products, targeting the right audience to drive traffic, increase engagement, and boost sales. Our data-driven approach ensures that your ad campaigns are cost-effective and deliver measurable results.",
        content: (
        <video src="https://videos.pexels.com/video-files/5075216/5075216-uhd_2732_1440_25fps.mp4" className="w-full  h-full object-cover" autoPlay loop muted  ></video>
        
        ),
        link: "work/explore/metaadsmanagement"
    },
    {
        title: "E-commerce Management",
        description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <video src="https://videos.pexels.com/video-files/8937981/8937981-hd_1920_1080_30fps.mp4" className="w-full  h-full object-cover" autoPlay loop muted  ></video>
            
        ),
        link: "e_commerce_management"
  },
];
export function StickyScrollRevealDemo({pricingRef}) {
    
  return (
    <div className="p-13">
          <StickyScroll content={content} pricingRef={pricingRef} />
        
      </div>
      
  );
}
