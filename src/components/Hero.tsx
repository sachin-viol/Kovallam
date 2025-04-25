import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <div className="w-full h-16"/>
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Authentic South Indian
          <span className="block text-kerala-gold">Fine Dining</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Experience the rich flavors and traditions of Kerala cuisine in an elegant setting
        </motion.p>
        <motion.div 
          className="flex flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-kerala-gold hover:bg-kerala-gold/90 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white  hover:bg-white hover:text-kerala-brown transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Book a Table
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="animate-bounce text-white/80">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
