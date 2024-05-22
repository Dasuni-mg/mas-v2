import React from 'react';
import { Link } from 'react-router-dom';

const TourSection = (props) => {
  return (
    <div className="mx-auto px-20">
      <header className="text-white text-3xl lg:text-4xl px-4 sm:px-6 mt-10 font-extrabold uppercase text-start">
        MAS Active
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 mt-8 mb-5">
        {/* Tour Section Content */}
        <div className="flex flex-col items-center mb-2">
          <div className="relative aspect-w-4 aspect-h-3 w-full max-w-xs sm:max-w-none rounded-lg shadow-lg border-2 border-gray-400 overflow-hidden">
          <img
                src=""
                alt="product"
                layout="fill"
                objectFit="cover"
              />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
              {/* Visit Button */}
              <a
                href="#"
                className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              >
                <svg
                  className="w-5 h-5 inline mr-1 align-top"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
                Visit
              </a>
              {/* Schedule Button */}
              <Link to="#">
                <a className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                  <svg
                    className="w-5 h-5 inline mr-1 align-top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Schedule
                </a>
              </Link>
            </div>
          </div>
          <div className="px-2 py-4 max-w-xs sm:max-w-none text-center">
            <h4 className="text-lg font-semibold tracking-tight text-white text-center group-hover:underline">
              Bodyline - Horana
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSection;
