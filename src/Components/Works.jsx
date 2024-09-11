import React, { useState } from 'react'
import WorkCard from './WorkCard'
import MrhotelsImgs from '../assets/projectImages/Mrhotels'
import MrhotelsVideo from '../assets/projectImages/Mrhotels/demoVdo'
import RentalXImgs from '../assets/projectImages/RentalX'
import RentalXVideo from '../assets/projectImages/RentalX/demoVideo'
import CodeFutionImgs from '../assets/projectImages/CodeFusion'
import CodeFutionVideo from '../assets/projectImages/CodeFusion/demovideo'


const Works = ({workRef}) => {
    const [openedCard, setOpenedCard] = useState(null)


    const projects = [
        {
            name: "CodeFusion",
            description: {
                title: "CodeFusion - Social Media Platform for Coders",
                overview: "CodeFusion is a social media platform tailored for coders, enabling them to connect, collaborate, and share ideas. The platform facilitates communication through direct messaging and allows users to post content, engage in discussions, and build their network within the coding community.",
                techStack: ["React", "Tailwind CSS",
                "Node.js", "Express.js",
                "MongoDB",
                "Firebase"
            ],
                keyFeatures: [
                    {
                        feature: "User Profiles",
                        description: "Coders can create detailed profiles showcasing their skills, projects, and coding interests, helping them connect with like-minded individuals."
                    },
                    {
                        feature: "Messaging System",
                        description: "Users can send direct messages to each other, fostering one-on-one communication and collaboration opportunities."
                    },
                    {
                        feature: "Posts and Feed",
                        description: "Users can post updates, share code snippets, and engage in discussions. The feed displays posts from users' connections and communities they follow."
                    },
                    {
                        feature: "Community and Networking",
                        description: "CodeFusion allows users to join or create communities based on specific programming languages, technologies, or interests, making it easier to network and collaborate."
                    },
                    {
                        feature: "Responsive Design",
                        description: "With Tailwind CSS, CodeFusion is fully responsive, ensuring an optimal user experience across all devices."
                    }
                ],
                outcome: "CodeFusion creates a vibrant space for coders to connect, collaborate, and share their work. By combining social media functionality with a focus on the coding community, the platform fosters meaningful connections and professional growth."
            },
            
           
            images: CodeFutionImgs,
            demoVideo: CodeFutionVideo
        },
        {
            name: "MrHotels",
            description: {
                title: "MrHotels - Hotel Booking Platform",
                overview: "MrHotels is a comprehensive hotel booking platform designed to facilitate seamless room reservations for multiple hotels. The platform allows users to book rooms in specific hotels for selected time periods, ensuring that only available rooms are shown based on the user's requested dates.",
                techStack: ["React", "Tailwind CSS",
                "Node.js", "Express.js",
                "MongoDB",
                "Firebase"
            ],
                keyFeatures: [
                    {
                        feature: "Room Availability Check",
                        description: "Users can select a hotel and choose specific dates to view available rooms. The platform automatically checks room availability, showing only the rooms that are free for the selected time period."
                    },
                    {
                        feature: "Dynamic Room Booking",
                        description: "Implemented a dynamic booking system that updates room availability in real-time. If a room is booked for a specific period, it is automatically removed from the available options for other users."
                    },
                    {
                        feature: "Hotel Management",
                        description: "The platform supports multiple hotels, each with its own set of rooms, pricing, amenities, and descriptions, allowing users to make informed decisions before booking."
                    },
                    {
                        feature: "Responsive Design",
                        description: "Tailwind CSS was used to ensure that the platform is fully responsive, providing an optimal experience across all devices."
                    }
                ],
                outcome: "MrHotels offers a user-friendly interface and efficient room booking process, making it easy for users to find and reserve rooms in their preferred hotels. The combination of a robust tech stack and well-designed features ensures reliability and ease of use."
            },
            gitLink: {
                Frontend: "https://github.com/UNIGO777/MrHotels",
                Backend: "https://github.com/UNIGO777/MrHotels_backEnd"
            },
            demositeLink: "https://mr-hotels.vercel.app",
            images: MrhotelsImgs,
            demoVideo: MrhotelsVideo,

        },
        {
            name: "RentalX",
            description: {
                title: "RentalX - Car Rental Platform",
                overview: "RentalX is a modern car rental platform designed to simplify the process of renting vehicles. Users can book cars for specific dates and times, with the platform showing only available vehicles based on the user's selections. The platform also includes a comprehensive dashboard for car owners to manage their listings and bookings.",
                techStack: ["React", "Tailwind CSS",
                    "Node.js", "Express.js",
                    "MongoDB",
                    "Supabase"
                ],
                keyFeatures: [
                    {
                        feature: "Car Availability Check",
                        description: "Users can select a car and choose specific dates and times to view available vehicles. The platform automatically checks availability, displaying only the cars that are free for the selected period."
                    },
                    {
                        feature: "Dynamic Car Booking",
                        description: "A dynamic booking system that updates car availability in real-time. Once a car is booked for a specific time, it is automatically removed from the available options for other users."
                    },
                    {
                        feature: "Owner Dashboard",
                        description: "Car owners have access to a dashboard where they can add or remove cars, cancel or accept bookings, and view user details, providing full control over their rental operations."
                    },
                    {
                        feature: "Search Functionality",
                        description: "Users can search for cars based on specific dates, times, and preferences. Only available cars that meet the user's criteria are shown in the results."
                    },
                    {
                        feature: "Responsive Design",
                        description: "Tailwind CSS ensures that the platform is fully responsive, offering a seamless experience across all devices."
                    }
                ],
                outcome: "RentalX provides a user-friendly interface and a streamlined car booking process, making it easy for users to find and rent vehicles that meet their needs. The platform's robust features and modern tech stack ensure a reliable and efficient service."
            },
            
            demositeLink: "https://shri-shivam-cars.vercel.app",
            images: RentalXImgs,
            demoVideo: RentalXVideo
        },


    ]
    return (
        <section className='mb-10' ref={workRef}>
            <div className='h-[32vw] relative'>
                <div className={`absolute grid   place-content-center right-10  overflow-hidden  transition-all `}>

                    <div className='flex flex-col justify-center'>
                        <span className='font-bold HeroBold text-[8vw]  relative top-8 md:top-20  scale-[0.9] opacity-[1%]'>OUR TOP WORKS</span>

                        <span className='font-bold HeroBold text-[8vw]  right-[5vw]  shine'>OUR TOP WORKS</span>
                        <span className='font-bold HeroBold text-[8vw]  relative -top-8  md:-top-20  scale-[0.9] opacity-[1%]'>OUR TOP WORKS</span>
                    </div>



                </div>
                {/* <div className='text-center'><h1 className='text-[5vw] font-mono uppercase '>See our works</h1></div> */}
            </div>
                    <p className='w-full lg:hidden text-center mb-14'>( Click on card to see more infomation )</p>
            <div className=' p-3 gap-5 px-10  md:px-10 lg:px-14 grid break-inside-avoid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    projects.map((item, index) => {
                        return <div className=' ' key={index}  ><WorkCard  project={item}  /></div>
                    })
                }


            </div>
        </section>
    )
}

export default Works