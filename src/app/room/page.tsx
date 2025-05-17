import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    id: 1,
    title: "Deluxe King Room",
    description: "Spacious room with city view, king-size bed, and modern amenities.",
    image: "/images/room1.jpg",
    price: 120,
  },
  {
    id: 2,
    title: "Executive Suite",
    description: "Premium suite with living area, balcony, and luxury bath.",
    image: "/images/room2.jpg",
    price: 220,
  },
  {
    id: 3,
    title: "Standard Double Room",
    description: "Cozy room for two, perfect for business or short stays.",
    image: "/images/room3.jpg",
    price: 90,
  },
];

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Rooms</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
}
