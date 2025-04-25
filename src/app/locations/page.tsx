import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Downtown",
    address: "123 Main Street, City Center",
    phone: "(555) 123-4567",
    hours: "11:00 AM - 10:00 PM",
    specialFeatures: ["Valet Parking", "Private Dining Room", "Full Bar"]
  },
  {
    name: "Westside",
    address: "456 West Avenue, Shopping District",
    phone: "(555) 234-5678",
    hours: "11:00 AM - 11:00 PM",
    specialFeatures: ["Outdoor Seating", "Live Music", "Catering Services"]
  },
  {
    name: "Eastside",
    address: "789 East Boulevard, Business Park",
    phone: "(555) 345-6789",
    hours: "11:00 AM - 10:00 PM",
    specialFeatures: ["Family Section", "Party Hall", "Express Lunch"]
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-kerala-brown text-center mb-12">
            Our Locations
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.name} className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-kerala-green mt-1" />
                  <div>
                    <h2 className="text-xl font-semibold text-kerala-brown">
                      {location.name}
                    </h2>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-kerala-gold" />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-kerala-gold" />
                    <span className="text-gray-600">{location.hours}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-kerala-brown">Special Features:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {location.specialFeatures.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mt-6 bg-kerala-green hover:bg-kerala-green/90">
                  Get Directions
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Locations;