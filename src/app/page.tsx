import Hero from "@/components/Hero";
import PackagesPage from "@/components/Package";
import RoomCategories from "@/components/Roomcategory";
import RoomsPage from "@/components/Roomdetails";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <RoomsPage />
      <RoomCategories />
      <PackagesPage />
      {/* Add About, Features, Testimonials here later */}
    </div>
  );
}
