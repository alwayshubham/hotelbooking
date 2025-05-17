const roomCategories = [
  {
    name: "Deluxe Room",
    description: "King-size bed, sea view, complimentary breakfast, and free Wi-Fi.",
    image: "/images/room-deluxe.jpg",
  },
  {
    name: "Executive Suite",
    description: "Spacious suite with living area, minibar, smart TV, and balcony.",
    image: "/images/room-suite.jpg",
  },
  {
    name: "Standard Room",
    description: "Comfortable room with queen bed, AC, work desk, and flat-screen TV.",
    image: "/images/room-standard.jpg",
  },
];
export default function RoomCategories() {
  return (
    <section className="relative min-h-screen bg-[url('/images/room-bg.jpg')] bg-cover bg-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Room Categories</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {roomCategories.map((room, index) => (
            <div key={index} className="bg-white/90 text-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-sm mt-2 text-gray-700">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
