

const packages = [
    {
        id: 1,
        title: "Romantic Getaway",
        description: "2 nights in a deluxe room with romantic dinner & spa treatment for two.",
        price: "₹12,999",
        image: "/images/package-romantic.jpg",
    },
    {
        id: 2,
        title: "Family Fun Package",
        description: "3 nights stay with kids’ activities, pool access, and breakfast included.",
        price: "₹9,499",
        image: "/images/package-family.jpg",
    },
    {
        id: 3,
        title: "Weekend Special",
        description: "1 night in a luxury suite with breakfast buffet and late checkout.",
        price: "₹6,499",
        image: "/images/package-weekend.jpg",
    },
];

export default function PackagesPage() {
    return (

        <section className="relative bg-[url('/images/room-bg.jpg')] bg-cover bg-center min-h-screen text-white" >
            <div className=" container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Hotel Packages</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-black shadow rounded-lg overflow-hidden">
                        <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                        <div className="p-5 space-y-2">
                            <h3 className="text-xl font-semibold">{pkg.title}</h3>
                            <p className="text-gray-100">{pkg.description}</p>
                            <p className="text-blue-600 font-bold">{pkg.price}</p>
                            <a href="/booking" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
