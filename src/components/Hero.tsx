import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Authentic South Indian
          <span className="block text-kerala-gold">Fine Dining</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the rich flavors and traditions of Kerala cuisine in an elegant setting
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-kerala-gold text-white hover:bg-kerala-gold/90">
            View Menu
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-kerala-terracotta hover:bg-white hover:text-kerala-brown">
            Book a Table
          </Button>
        </div>
      </div>
    </div>

  );
};

export default Hero;
