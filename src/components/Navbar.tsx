import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Menu } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-kerala-cream/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-kerala-brown">Kovallam</div>
          
          <div className="hidden md:flex items-center space-x-8">
          <Link href="/menu" className="text-kerala-brown hover:text-kerala-gold transition-colors">Menu</Link>
            <Link href="/locations" className="text-kerala-brown hover:text-kerala-gold transition-colors">Locations</Link>
            <Link href="/about" className="text-kerala-brown hover:text-kerala-gold transition-colors">About</Link>
            <Button className="bg-kerala-green text-white hover:bg-kerala-green/90">
              <MapPin className="mr-2 h-4 w-4" />
              Select Location
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#menu" className="block text-kerala-brown hover:text-kerala-gold transition-colors">Menu</a>
            <a href="#locations" className="block text-kerala-brown hover:text-kerala-gold transition-colors">Locations</a>
            <a href="#about" className="block text-kerala-brown hover:text-kerala-gold transition-colors">About</a>
            <Button className="w-full bg-kerala-green text-white hover:bg-kerala-green/90">
              <MapPin className="mr-2 h-4 w-4" />
              Select Location
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;