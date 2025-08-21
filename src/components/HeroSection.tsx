import { Button } from "@/components/ui/button";
import { Music, Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/bdcbdf2a-a401-4247-8522-abac40862a5b.png" 
            alt="Dharmi Academy Logo"
            className="mx-auto h-32 w-auto mb-6 animate-cultural-glow"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="font-cultural text-5xl md:text-7xl font-bold text-primary mb-6 animate-slide-in">
          Dharmi
        </h1>
        
        <h2 className="font-elegant text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in">
          Academy of Music and Dance
        </h2>
        
        {/* Tagline */}
        <p className="font-elegant text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Celebrating the rhythm of tradition through the timeless art of Indian classical music and dance
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
  <a href="#courses" className="w-full sm:w-auto">
    <Button 
      size="lg" 
      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-elegant px-8 py-3"
    >
      <Music className="mr-2 h-5 w-5" />
      Explore Courses
    </Button>
  </a>

  <a href="#contact" className="w-full sm:w-auto">
    <Button 
      variant="outline" 
      size="lg" 
      className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-elegant px-8 py-3"
    >
      <Heart className="mr-2 h-5 w-5" />
      Learn More
    </Button>
  </a>
</div>

        
        {/* Floating Musical Notes */}
        <div className="absolute top-20 left-10 text-cultural-gold/30 text-2xl animate-bounce">♪</div>
        <div className="absolute top-32 right-16 text-cultural-gold/40 text-3xl animate-bounce delay-300">♫</div>
        <div className="absolute bottom-32 left-20 text-cultural-gold/35 text-2xl animate-bounce delay-700">♪</div>
        <div className="absolute bottom-20 right-12 text-cultural-gold/30 text-3xl animate-bounce delay-500">♫</div>
      </div>
    </section>
  );
};

export default HeroSection;