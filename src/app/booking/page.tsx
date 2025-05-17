import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Book Your Stay</h2>
      <BookingForm />
    </div>
  );
}
