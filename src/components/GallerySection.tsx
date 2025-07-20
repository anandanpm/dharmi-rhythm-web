import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar, Users } from "lucide-react";
import instrumentsGallery from "@/assets/instruments-gallery.jpg";
import danceClass from "@/assets/dance-class.jpg";
import musicPerformance from "@/assets/music-performance.jpg";

const GallerySection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: instrumentsGallery,
      title: "Classical Instruments",
      description: "Our collection of traditional Indian musical instruments",
      category: "Music",
      date: "December 2024"
    },
    {
      id: 2,
      image: danceClass,
      title: "Bharatanatyam Class",
      description: "Students practicing traditional dance forms",
      category: "Dance",
      date: "November 2024"
    },
    {
      id: 3,
      image: musicPerformance,
      title: "Annual Concert",
      description: "Students performing at our annual cultural event",
      category: "Performance",
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