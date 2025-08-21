import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { link } from "fs";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Bharatanatyam Dance",
      description: "Learn the classical South Indian dance form with its intricate movements, expressions, and storytelling through dance.",
      duration: "3-6 months per level",
      students: "8-12 per batch",
      level: "Beginner to Advanced",
      highlights: [
        "Traditional Adavus (basic steps)",
        "Jatiswaram and Tillana",
        "Varnam and Padam",
        "Abhinaya (expressions)",
        "Stage performance training"
      ],
      color: "bg-cultural-cream"
    },
    {
      id: 2,
      title: "Classical Vocal Music",
      description: "Master the art of Carnatic or Hindustani vocal music with proper breathing techniques, ragas, and compositions.",
      duration: "6-12 months per level",
      students: "6-10 per batch",
      level: "Beginner to Advanced",
      highlights: [
        "Breathing and voice training",
        "Swaras and Alankaras",
        "Ragas and Talas",
        "Krithis and Compositions",
        "Concert performance"
      ],
      color: "bg-cultural-beige"
    },
    {
  id: 3,
  title: "Instrument Training",
  description: "Learn to play a wide range of musical instruments with proper techniques, theory, and performance guidance.",
  duration: "3-12 months depending on instrument and level",
  students: "5-10 per batch",
  level: "Beginner to Advanced",
  highlights: [
    "Instrument basics & posture",
    "Finger techniques & scales",
    "Music reading & theory",
    "Solo and group performances",
    "Stage performance training"
  ],
  instruments: [
   'Keyboard',
    "Violin",
    "Flute",
     "etc...."
  ],
  color: "bg-musical-blue"
},
{
  id: 4,
  title: "More Instrument Courses",
  description: "A wide variety of new musical instrument training programs are on the way. Stay tuned for exciting additions to our curriculum!",
  duration: "Varies depending on instrument",
  students: "5-12 per batch",
  level: "Beginner to Advanced",
  highlights: [
    "Fresh new instruments coming soon",
    "Expert trainers for each instrument",
    "Expanded music theory sessions",
    "Solo & group performance practice",
    "Special workshops and masterclasses"
  ],
  instruments: [
    "More instruments... (Coming Soon)"
  ],
  note: "Many more instruments will be introduced gradually!",
  color: "bg-musical-purple"
}


  ];

  return (
    <section  id="courses" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
            Courses Offered
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Embark on a transformative journey through our carefully structured programs designed for all skill levels
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className={`${course.color} border-cultural-gold/20 hover:shadow-xl transition-all duration-500 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="font-cultural text-2xl text-primary">
                    {course.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-cultural-gold/20 text-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
                <p className="font-elegant text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Details */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-cultural-gold" />
                    <span className="font-elegant text-sm text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-cultural-gold" />
                    <span className="font-elegant text-sm text-foreground">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-cultural-gold" />
                    <span className="font-elegant text-sm text-foreground">{course.level}</span>
                  </div>
                </div>

                {/* Course Highlights */}
                <div>
                  <h4 className="font-cultural text-lg font-semibold text-primary mb-3">
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="font-elegant text-sm text-foreground flex items-start">
                        <ArrowRight className="h-3 w-3 text-cultural-gold mt-1 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a href="#contact" className="w-full sm:w-auto">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-elegant"
                  size="lg"
                >
                  Contact Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center bg-gradient-cultural rounded-lg p-8 animate-fade-in">
          <h3 className="font-cultural text-2xl font-semibold text-primary mb-4">
            Flexible Learning Options
          </h3>
          <p className="font-elegant text-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            We offer both Online classes and Offline classes to accommodate different learning preferences. 
            Our curriculum is designed to progress systematically while allowing students to learn at their own pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;