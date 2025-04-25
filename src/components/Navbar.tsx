'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md text-kerala-brown' : 'bg-transparent text-kerala-gold'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold  hover:text-kerala-gold transition-colors duration-300"
          >
            Kovallam
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/menu" className=" hover:text-kerala-gold/75 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-kerala-gold after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Menu</Link>
            <Link href="/locations" className=" hover:text-kerala-gold/75 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-kerala-gold after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Locations</Link>
            <Link href="/about" className=" hover:text-kerala-gold/75 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-kerala-gold after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About</Link>
            <Button className="bg-kerala-green hover:bg-kerala-sage transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-4 shadow-lg">
            <Link href="/menu" className="block px-4 py-2 text-kerala-brown hover:text-kerala-gold transition-colors duration-300 hover:bg-kerala-cream/50">Menu</Link>
            <Link href="/locations" className="block px-4 py-2 text-kerala-brown hover:text-kerala-gold transition-colors duration-300 hover:bg-kerala-cream/50">Locations</Link>
            <Link href="/about" className="block px-4 py-2 text-kerala-brown hover:text-kerala-gold transition-colors duration-300 hover:bg-kerala-cream/50">About</Link>
            <div className="px-4">
              <Button className="w-full bg-kerala-green hover:bg-kerala-sage transition-colors duration-300 shadow-md">
                <MapPin className="mr-2 h-4 w-4" />
                Select Location
              </Button>
            </div>
          </div>
        </div>      </div>
    </nav>
  );
};

export default Navbar;