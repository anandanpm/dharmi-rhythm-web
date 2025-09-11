import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye, Calendar, Users } from "lucide-react";
import instrumentsGallery from "@/assets/instruments-gallery.jpg";
import danceClass from "@/assets/dance-class.jpg";
import musicPerformance from "@/assets/music-performance.jpg";
import inauguration1 from "@/assets/inauguration-1.jpg";
import inauguration2 from "@/assets/inauguration-2.jpg";
import inauguration3 from "@/assets/inauguration-3.jpg";
import inauguration4 from "@/assets/inauguration-4.jpg";
import Autoplay from "embla-carousel-autoplay";

const GallerySection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const inaugurationPhotos = [
    {
      id: 1,
      image: inauguration1,
      title: "Academy Inauguration",
      description: "Grand opening ceremony with traditional rituals"
    },
    {
      id: 2,
      image: inauguration2,
      title: "Ribbon Cutting Ceremony",
      description: "Official inauguration with traditional decorations"
    },
    {
      id: 3,
      image: inauguration3,
      title: "Lamp Lighting Ceremony",
      description: "Auspicious beginning with classical traditions"
    },
    {
      id: 4,
      image: inauguration4,
      title: "Blessing Ceremony",
      description: "Traditional blessings for the academy"
    }
  ];

  const galleryItems = [
    {
      id: 5,
      image: instrumentsGallery,
      title: "Classical Instruments",
      description: "Our collection of traditional Indian musical instruments",
      category: "Music",
      date: "December 2024"
    },
    {
      id: 6,
      image: danceClass,
      title: "Bharatanatyam Class",
      description: "Students practicing traditional dance forms",
      category: "Dance",
      date: "November 2024"
    },
    {
      id: 7,
      image: musicPerformance,
      title: "Musical Performance",
      description: "Students showcasing their musical talents",
      category: "Music",
      date: "October 2024"
    }
  ];

  return (
    <section className="py-20 px-4 bg-cultural-cream/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Glimpses of our vibrant community, classes, and performances that showcase the beauty of Indian classical arts
          </p>
        </div>

        {/* Inauguration Photos Carousel */}
        <div className="mb-16 animate-fade-in">
          <h3 className="font-cultural text-2xl font-semibold text-primary mb-8 text-center">
            Academy Inauguration
          </h3>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {inaugurationPhotos.map((photo) => (
                <CarouselItem key={photo.id}>
                  <Card className="border-cultural-gold/20 bg-card/80 backdrop-blur-sm">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                        <h4 className="font-cultural text-xl font-semibold text-white mb-2">
                          {photo.title}
                        </h4>
                        <p className="font-elegant text-white/90 text-sm">
                          {photo.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group overflow-hidden border-cultural-gold/20 hover:shadow-xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-primary/60 transition-opacity duration-300 ${
                  hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <Badge 
                  className="absolute top-4 left-4 bg-cultural-gold text-primary font-elegant"
                >
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-cultural text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-elegant text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span className="font-elegant">{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span className="font-elegant">Academy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-cultural rounded-lg p-8 border border-cultural-gold/20">
            <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
              Join Our Community
            </h3>
            <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              Be part of our growing family of artists and experience the joy of learning classical Indian arts. 
              Follow us on social media to see more photos and videos from our classes and events.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
                Instagram
              </Badge>
              <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
                YouTube
              </Badge>
              <Badge variant="outline" className="border-cultural-gold text-primary hover:bg-cultural-gold hover:text-primary-foreground cursor-pointer px-4 py-2">
                Facebook
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;