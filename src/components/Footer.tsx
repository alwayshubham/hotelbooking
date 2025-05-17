export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-3">Royal Phoenicia Hotel</h4>
          <p className="text-sm">
            Experience luxurious hospitality with world-class amenities and unforgettable service.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/src/app/page.tsx" className="hover:text-blue-400"></a>Home</li>
            <li><a href="/rooms" className="hover:text-blue-400">Rooms</a></li>
            <li><a href="/booking" className="hover:text-blue-400">Book Now</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">123 Royal Street, Cityname</p>
          <p className="text-sm">Email: contact@royalphoenicia.com</p>
          <p className="text-sm">Phone: +123-456-7890</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Royal Phoenicia Hotel. All rights reserved.
      </div>
    </footer>
  );
}
