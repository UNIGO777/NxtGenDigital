import React from 'react';

const Level = () => {
  const List = ["web development", "digital marketing", "lead generation", "wordpress website"];
  const extendedList = [...List, ...List, ...List, ...List, ...List, ...List];

  return (
    <section className='flex mb-5 items-center h-24 md:h-[16vh] lg:h-[25vh] relative overflow-x-hidden'>
      {List && (
        <>
          {/* First Rotated Section */}
          <div className='h-10 bg-[#ffffff39] w-[104vw] -left-2 rotate-[5deg] absolute flex items-center'>
            <div className='scroll-container'>
              <ul className='scroll-content-right uppercase'>
                {extendedList.map((item, index) => (
                  <li key={index} className='scroll-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second Rotated and Scrollable Section */}
          <div className='h-10 bg-[#ffffff3d] -left-2 w-[104vw] -rotate-[5deg] absolute flex items-center'>
            <div className='scroll-container'>
              <ul className='scroll-content-left uppercase'>
                {extendedList.map((item, index) => (
                  <li key={index} className='scroll-item'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Level;
