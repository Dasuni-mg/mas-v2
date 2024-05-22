import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "./components/ui/alert-dialog"

import Home1 from "./components/Home1";

function App() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10 font-prompt"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#000] bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-3xl font-extrabold uppercase text-white"
                          >
                            Welcome to the Virtual Tour of our MAS Facilities!
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-400 mt-3">
                              Welcome to the Virtual Tour of MAS Holdings. We
                              pleased to be walking you through our facility
                              today.
                            </p>
                            <p className="text-sm text-gray-400 mt-3">
                              The information and the content disclosed during
                              this virtual tour is confidential and proprietary
                              to MAS Holdings (Private) Limited. It is strictly
                              forbidden to share any recording or screenshots of
                              this virtual tour with any third party, without
                              prior written consent of MAS Holdings (Private)
                              Limited.
                            </p>
                            <p className="text-sm text-gray-400 mt-3">
                              Upon acceptance of these terms, you will be
                              allowed to enter the tour.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <Button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-black focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Accept
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <section className="text-gray-400 bg-neutral-900 body-font overflow-auto flex-1">
          <div className="flex">
            <div className="flex-col w-full ...">
            <nav className="bg-black border-white shadow-lg border-b-4 rounded-b-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Side: Logo (if applicable) */}
          <div className="flex items-center">
            {/* Logo or Branding (if needed) */}
            {/* <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-4" /> */}
          </div>

          {/* Right Side: User Profile and Notifications */}
          <div className="flex items-center">
            {/* User Profile Avatar and Name */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="bg-black text-white rounded-full p-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <Avatar>
                  <AvatarImage src="/avatar.png" alt="User profile" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
              <div className="text-white">
                <h1 className="text-sm font-semibold">Demo User</h1>
                {/* Display user's name */}
                {/* <h1 className="text-sm font-semibold">{name}</h1> */}
              </div>
            </div>

            {/* Notifications Icon (if needed) */}
            <button
              type="button"
              className="ml-4 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  
              <header>
                <div className="relative aspect-[4000/1512]">
                  <img src="/c3.jpg" alt="Picture of the author" />
                  {/* <Carousel>
                <div>
                  <img src="/c1.jpg" alt="image1" />
                </div>
                <div>
                  <img src="/c2.jpg" alt="image2" />
                </div>
                <div>
                  <img src="/c3.jpg" alt="image3" />
                </div>
              </Carousel> */}
                </div>
              </header>

              <div className="container  mx-auto justify-items-center -mt-10">
                <div className="flex flex-wrap  text-center py-24 justify-center justify-items-center  ">
                
          {/* Card 1 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-white hover:border-white cursor-pointer shadow-2xl rounded-3xl flex flex-col items-center justify-center h-64">
              <Link to="/tours">
                <img
                  src="/2.png"
                  alt="Virtual Tour App"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h2 className="title-font font-medium text-md text-white">
                  Virtual Tour App
                </h2>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-white hover:border-white cursor-pointer shadow-2xl rounded-3xl flex flex-col items-center justify-center h-64">
              <Link to="/analytics">
                <img
                  src="/3.png"
                  alt="Analytics"
                  width={90}
                  height={90}
                  className="mb-4"
                />
                <h2 className="title-font font-medium text-md text-white">
                  Analytics
                </h2>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-white hover:border-white cursor-pointer shadow-2xl rounded-3xl flex flex-col items-center justify-center h-64">
              <Link to="/user-guide">
                <img
                  src="/4.png"
                  alt="User Guide"
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h2 className="title-font font-medium text-md text-white">
                  User Guide
                </h2>
              </Link>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
