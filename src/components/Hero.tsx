"use client";

export default function Hero() {
  return (
    <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hero animate-zoomPan bg-cover bg-center z-0" />

      {/* Overlay content */}
      <div className="relative z-10  bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl text-black md:text-6xl font-bold">Welcome to Royal Phoenicia</h1>
        <p className="mt-4 text-lg text-black md:text-2xl">Experience luxury like never before</p>
        <a
          href="/booking"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium"
        >
          Book Now
        </a>
      </div>

      <style jsx>{`
        .bg-hero {
          background-image: url('/images/hero.jpg');
        }

        @keyframes zoomPan {
          0% {
            transform: scale(1) translateX(0);
          }
          50% {
            transform: scale(1.1) translateX(20px);
          }
          100% {
            transform: scale(1) translateX(0);
          }
        }

        .animate-zoomPan {
          animation: zoomPan 15s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}


// <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white">
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>
