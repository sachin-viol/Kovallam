'use client';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-kerala-brown text-center mb-12">
            About Kovallam
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')] bg-cover bg-center rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-kerala-brown mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Kovallam brings the authentic flavors of South India to your table. Our journey began with a simple mission: to share the rich culinary heritage of Kerala through carefully crafted dishes and an immersive dining experience.
              </p>
              <p className="text-gray-600 mb-6">
                Each dish at Kovallam tells a story - a story of tradition, passion, and the art of South Indian cooking passed down through generations.
              </p>
              <Button className="bg-kerala-gold hover:bg-kerala-gold/90">
                Book a Table
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-kerala-brown mb-4">
                Our Ingredients
              </h3>
              <p className="text-gray-600">
                We source the finest spices directly from Kerala, ensuring authentic flavors in every dish.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-kerala-brown mb-4">
                Our Chefs
              </h3>
              <p className="text-gray-600">
                Expert chefs with decades of experience in traditional South Indian cuisine.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-kerala-brown mb-4">
                Our Promise
              </h3>
              <p className="text-gray-600">
                A commitment to excellence in food quality, service, and dining atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;