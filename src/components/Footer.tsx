import { Heart, Music, Instagram, Youtube, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/bdcbdf2a-a401-4247-8522-abac40862a5b.png" 
                alt="Dharmi Academy Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-cultural text-xl font-bold">Dharmi</h3>
                <p className="font-elegant text-sm opacity-90">Academy of Music and Dance</p>
              </div>
            </div>
            <p className="font-elegant text-sm leading-relaxed opacity-90">
              Preserving the sacred traditions of Indian classical arts while nurturing the next generation of artists.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cultural text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 font-elegant text-sm">
              <li><a href="#about" className="hover:text-cultural-gold transition-colors duration-300">About Us</a></li>
              <li><a href="#courses" className="hover:text-cultural-gold transition-colors duration-300">Courses</a></li>
              <li><a href="#gallery" className="hover:text-cultural-gold transition-colors duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-cultural-gold transition-colors duration-300">Contact</a></li>
              <li><a href="#contact" className="hover:text-cultural-gold transition-colors duration-300">Admissions</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-cultural text-lg font-semibold">Connect With Us</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 font-elegant text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cultural-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cultural-gold" />
                <span>info@dharmiacademy.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <p className="font-elegant text-sm font-medium">Follow Us:</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="hover:text-cultural-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-cultural-gold transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-cultural-gold transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 font-elegant text-sm">
              <span>© 2024 Dharmi Academy. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 font-elegant text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-cultural-gold" />
              <span>for Indian Classical Arts</span>
              <Music className="h-4 w-4 text-cultural-gold" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;