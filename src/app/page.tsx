import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationsSection from "@/components/LocationsSection";
import MenuPreview from "@/components/MenuPreview";
import Navbar from "@/components/Navbar";
import OrderSection from "@/components/OrderSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MenuPreview />

      {/* New Special Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-kerala-brown text-center mb-12">
            Special Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-kerala-brown mb-4">Private Dining</h3>
              <p className="text-gray-600 mb-4">Host your special occasions in our elegant private dining rooms.</p>
              <Button variant="outline" className="w-full cursor-pointer">Learn More</Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-kerala-brown mb-4">Cooking Classes</h3>
              <p className="text-gray-600 mb-4">Join our expert chefs and learn the art of South Indian cooking.</p>
              <Button variant="outline" className="w-full cursor-pointer">Book Now</Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-kerala-brown mb-4">Catering</h3>
              <p className="text-gray-600 mb-4">Bring the taste of Kerala to your events with our catering service.</p>
              <Button variant="outline" className="w-full cursor-pointer">Get Quote</Button>
            </Card>
          </div>
        </div>
      </section>

      <OrderSection />
      <LocationsSection />

      {/* New Awards & Recognition Section */}
      <section className="py-20 bg-kerala-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-kerala-brown mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-kerala-gold mb-2">2023</div>
              <p className="text-kerala-brown">Best South Indian Restaurant</p>
              <p className="text-gray-600">Culinary Excellence Awards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-kerala-gold mb-2">2022</div>
              <p className="text-kerala-brown">Chef of the Year</p>
              <p className="text-gray-600">Food & Wine Magazine</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-kerala-gold mb-2">2021</div>
              <p className="text-kerala-brown">Best Fine Dining</p>
              <p className="text-gray-600">City Restaurant Awards</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-kerala-gold mb-2">2020</div>
              <p className="text-kerala-brown">Customer Choice</p>
              <p className="text-gray-600">Dining Excellence</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
