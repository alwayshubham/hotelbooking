// const roomCategories = [
//   {
//     name: "Deluxe Room",
//     description: "King-size bed, sea view, complimentary breakfast, and free Wi-Fi.",
//     image: "/images/room-deluxe.jpg",
//   },
//   {
//     name: "Executive Suite",
//     description: "Spacious suite with living area, minibar, smart TV, and balcony.",
//     image: "/images/room-suite.jpg",
//   },
//   {
//     name: "Standard Room",
//     description: "Comfortable room with queen bed, AC, work desk, and flat-screen TV.",
//     image: "/images/room-standard.jpg",
//   },
// ];

// export default function RoomCategories() {
//   return (
//     <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-16 max-w-md">
//         <h1 className="text-4xl font-bold text-center mb-12">Room Categories</h1>

//         {/* Simple list of names */}
//         <ul className="space-y-4 text-lg font-medium">
//           {roomCategories.map((room, index) => (
//             <li key={index} className="bg-white/90 text-gray-900 rounded-md p-4 shadow">
//               {room.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
   
  },
  {
    id: 2,
    name: "Executive Suite",

  },
  {
    id: 3,
    name: "Standard Room",
  
  },
];

export default function RoomCategories() {
  return (
    <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>

        <div className="grid md:grid-cols-3 gap-6 ">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden">
              
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{room.name}</h3>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
