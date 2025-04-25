import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Downtown",
    address: "123 Main Street, City Center",
    phone: "(555) 123-4567",
    hours: "11:00 AM - 10:00 PM"
  },
  {
    name: "Westside",
    address: "456 West Avenue, Shopping District",
    phone: "(555) 234-5678",
    hours: "11:00 AM - 11:00 PM"
  },
  {
    name: "Eastside",
    address: "789 East Boulevard, Business Park",
    phone: "(555) 345-6789",
    hours: "11:00 AM - 10:00 PM"
  }
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 bg-kerala-brown/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-kerala-brown text-center mb-12">
          Our Locations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.name} className="p-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-kerala-green mr-2 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-kerala-brown">{location.name}</h3>
                  <p className="text-gray-600 mt-1">{location.address}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-600"><strong>Phone:</strong> {location.phone}</p>
                <p className="text-gray-600"><strong>Hours:</strong> {location.hours}</p>
              </div>
              
              <Button variant="outline" className="w-full border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white">
                Get Directions
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
