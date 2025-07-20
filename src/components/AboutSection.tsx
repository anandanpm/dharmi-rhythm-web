import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Music } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-cultural">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
            About Dharmi Academy
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preserving the sacred traditions of Indian classical arts while nurturing the next generation of artists
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in">
            <h3 className="font-cultural text-2xl md:text-3xl font-semibold text-primary">
              Our Mission
            </h3>
            <p className="font-elegant text-foreground leading-relaxed">
              At Dharmi Academy, we believe that Indian classical music and dance are not just art forms, 
              but sacred traditions that connect us to our cultural heritage. Our mission is to provide 
              authentic, comprehensive training in these timeless arts while fostering creativity, 
              discipline, and spiritual growth.
            </p>
            <p className="font-elegant text-foreground leading-relaxed">
              Founded with a vision to preserve and promote the rich traditions of Bharatanatyam and 
              Indian classical music, we offer a nurturing environment where students of all ages can 
              explore their artistic potential under the guidance of experienced teachers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            <Card className="bg-card/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-cultural-gold mx-auto mb-4" />
                <h4 className="font-cultural text-lg font-semibold text-primary mb-2">
                  Expert Teachers
                </h4>
                <p className="font-elegant text-sm text-muted-foreground">
                  Learn from accomplished artists and certified instructors
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-cultural-gold mx-auto mb-4" />
                <h4 className="font-cultural text-lg font-semibold text-primary mb-2">
                  Authentic Training
                </h4>
                <p className="font-elegant text-sm text-muted-foreground">
                  Traditional methods passed down through generations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-cultural-gold mx-auto mb-4" />
                <h4 className="font-cultural text-lg font-semibold text-primary mb-2">
                  Nurturing Environment
                </h4>
                <p className="font-elegant text-sm text-muted-foreground">
                  Supportive community fostering artistic growth
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Music className="h-8 w-8 text-cultural-gold mx-auto mb-4" />
                <h4 className="font-cultural text-lg font-semibold text-primary mb-2">
                  Performance Opportunities
                </h4>
                <p className="font-elegant text-sm text-muted-foreground">
                  Regular recitals and cultural events
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Founders/Teachers Section */}
        <div className="text-center animate-fade-in">
          <h3 className="font-cultural text-2xl md:text-3xl font-semibold text-primary mb-8">
            Our Esteemed Faculty
          </h3>
          <p className="font-elegant text-foreground max-w-3xl mx-auto leading-relaxed">
            Our academy is led by dedicated artists who have devoted their lives to mastering and 
            sharing the beauty of Indian classical arts. With years of training under renowned 
            gurus and extensive performance experience, our faculty brings authentic knowledge 
            and passionate teaching to every class.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;