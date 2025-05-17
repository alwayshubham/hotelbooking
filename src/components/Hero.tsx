"use client";
import { Parallax } from "react-parallax";

export default function Hero() {
  return (
    <Parallax
      bgImage="/images/room-bg.jpg"
      strength={400}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="h-[80vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Royal Phoenicia</h1>
          <p className="mt-4 text-lg md:text-2xl">Experience luxury like never before</p>
          <a
            href="/booking"
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium"
          >
            Book Now
          </a>
        </div>
      </section>
    </Parallax>
  );
}
