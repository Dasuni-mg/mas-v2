import React, { useState } from 'react';
import TourSection from './TourSections';
import { Button } from "./ui/button";
export default function Home1(props) {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleButtonClick = () => {
    // Toggle the state to show or hide the additional content
    setShowAdditionalContent(!showAdditionalContent);
  };

  return (
    <section className="text-gray-400 bg-black body-font overflow-auto flex-1">
      <div className="flex">
        <div className="flex-1 flex-col">
          <div className="flex flex-wrap justify-center p-12 mt-5">
            <Button
              className="focus:outline-none text-white bg-red-600 hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={handleButtonClick}
            >
              Upcoming Tours
            </Button>
          </div>
           {/* Conditionally render the additional content */}
           {showAdditionalContent && (
            <div className=" mt-5">
              {/* Add your additional content here */}
              <div className="text-white">
              <h1 className="text-white justify-center font-extrabold uppercase text-5xl px-20 mt-10">
              UPCOMING SCHEDULES
            </h1>
            <div className='px-20'>
              <h3>No Upcoming schedules</h3>
            </div>
              </div>
            </div>
          )}
          <header>
            <h1 className="text-white justify-center font-extrabold uppercase text-5xl px-20 mt-10">
              Virtual Tours
            </h1>
          </header>
         
          <TourSection />
          <TourSection />
          <TourSection />
        </div>
      </div>
    </section>
  );
}
