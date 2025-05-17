import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <ContactForm />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Royal Phoenicia Hotel</h3>
          <p>123 Royal Street, Cityname</p>
          <p>Email: contact@royalphoenicia.com</p>
          <p>Phone: +123-456-7890</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="300"
            className="rounded"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
