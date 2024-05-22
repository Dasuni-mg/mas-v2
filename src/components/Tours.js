import React from "react";
import Slider from "react-slick";
import { CardTitle, CardDescription, CardHeader, Card } from "./ui/card";
import logo from "../bg.jpg";
import iconImage from "../bodyline-horana.jpg";

import { Button } from "./ui/button";

import { Checkbox } from "./ui/checkbox";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "./ui/table";
import { Badge } from "./ui/badge";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Component() {
  const albums = [
    { coverImage: logo },
    { coverImage: logo },
    { coverImage: logo },
    { coverImage: logo },
    { coverImage: logo },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold ml-3" id="made-for-you-heading">
            Available Tours
          </h1>
         
        </div>
        <section aria-labelledby="made-for-you-heading">
          <Slider {...settings} className="mt-4">
            {albums.map((album, index) => (
              <div
                key={index}
                style={{
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  marginTop: "16px",
                }}
              >
                {/* Conditionally render a heading above the first 3 cards */}
                {index === 0 && (
                  <h3 className="text-xl font-bold  ml-3">
                    Cluster A
                  </h3>
                )}
                {index === 3 && (
                  <h3 className="text-xl font-bold ml-3">
                   Cluster B
                  </h3>
                )}
                {index !== 0 && index !== 3 && <div className="mt-9" />}

                <div style={{ marginBottom: "16px", position: "relative" }}>
                  <Card className="m-2">
                    {/* Icon positioned in the upper left corner */}
                    <img
                      alt={`${album.title} album cover`}
                      className="w-full h-auto"
                      src={album.coverImage}
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay color
                        zIndex: "1",
                      }}
                    >
                      <img
                        src={iconImage}
                        alt="Icon"
                        style={{ width: "90px", height: "65px", padding: "10px",marginLeft:"10px",objectFit: "cover" }}
                      />
                    
                    </div>
                  
                  </Card>
                </div>

                {/* Apply pt-3 to cards without headings */}
              </div>
            ))}
          </Slider>
        </section>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold ml-3" id="made-for-you-heading">
            Sheduled Meetings
          </h1>
          <a href="/createshedule" className="mr-3 focus:outline text-black bg-white hover:bg-white focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Shedule</a>
         
        </div>
        <section aria-labelledby="made-for-you-heading">
        <div className="border shadow-sm p-3 m-3 rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] hidden sm:table-cell">
                   
                  </TableHead>
                  <TableHead className="text-white">Meeting</TableHead>
                  <TableHead className="hidden md:table-cell text-white">
                    Status
                  </TableHead>
                  <TableHead className="hidden lg:table-cell text-white">
                    Sheduled At
                  </TableHead>
                  <TableHead className="text-right text-white">
                  
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                  1812855c-b693-4ad5-95a5-a421fc385fcc
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                  <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-center">
                    ...
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="hidden sm:table-cell">
                    <Checkbox className="text-white" />
                  </TableCell>
                  <TableCell className="font-medium text-white">
                  1812855c-b693-4ad5-95a5-a421fc385fcc
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-white">
                  <Badge
                      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                      variant="outline"
                    >
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-white">
                    April 30, 2023
                  </TableCell>
                  <TableCell className="text-center">
                    ...
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}
