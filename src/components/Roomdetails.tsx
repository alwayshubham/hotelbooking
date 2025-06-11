const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with sea view, king bed, ensuite bath, and Wi-Fi.",
    price: "₹5,999/night",
    image: "/images/room-deluxe.jpg",
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Luxurious suite with lounge area, minibar, smart TV, and balcony.",
    price: "₹8,999/night",
    image: "/images/room-suite.jpg",
  },
  {
    id: 3,
    name: "Standard Room",
    description: "Comfortable room with queen bed, work desk, and AC.",
    price: "₹3,999/night",
    image: "/images/room-standard.jpg",
  },
];

export default function RoomsPage() {
  return (
    <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Rooms</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden h-72 transition-all duration-300"
            >
              {/* Image (hidden by default, shown on hover) */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-36 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="p-5 space-y-2">
                {/* Room Name (always visible) */}
                <h3 className="text-xl font-semibold">{room.name}</h3>

                {/* Description + Price (hidden by default, shown on hover) */}
                <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {room.description}
                </p>
                <p className="text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {room.price}
                </p>

                {/* Book Now Button */}
                <a
                  href="/booking"
                  className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
