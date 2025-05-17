import Image from "next/image";

type RoomProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function RoomCard({ title, description, image, price }: RoomProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image src={image} alt={title} width={400} height={250} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-700">${price}/night</span>
          <a
            href="/booking"
            className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
