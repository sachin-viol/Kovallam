
const Footer = () => {
  return (
    <footer className="bg-kerala-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kovallam</h3>
            <p className="text-white/80">
              Experience authentic South Indian cuisine in an elegant setting.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-white/80 hover:text-kerala-gold transition-colors">Menu</a></li>
              <li><a href="#locations" className="text-white/80 hover:text-kerala-gold transition-colors">Locations</a></li>
              <li><a href="#about" className="text-white/80 hover:text-kerala-gold transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Email: info@kovallam.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-white/80">
              <li>Mon-Thu: 11:00 AM - 10:00 PM</li>
              <li>Fri-Sat: 11:00 AM - 11:00 PM</li>
              <li>Sun: 11:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Kovallam Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
