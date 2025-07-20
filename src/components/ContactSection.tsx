import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us during academy hours"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: ["info@dharmiacademy.com", "admissions@dharmiacademy.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Address",
      details: ["123 Cultural Street", "Arts District, Music City", "India - 560001"],
      description: "Visit our beautiful academy"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
      description: "Academy operating hours"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cultural text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="font-elegant text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your journey in Indian classical arts? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="font-cultural text-2xl font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              <p className="font-elegant text-foreground leading-relaxed mb-8">
                We're here to help you start your artistic journey. Whether you have questions about our courses, 
                want to schedule a trial class, or need more information about our programs, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-cultural-cream/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-cultural-gold mt-1">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-cultural text-lg font-semibold text-primary mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-elegant text-sm text-foreground mb-1">
                            {detail}
                          </p>
                        ))}
                        <p className="font-elegant text-xs text-muted-foreground mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-cultural-cream/30 border-cultural-gold/20 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-cultural text-2xl text-primary">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-elegant text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-cultural-gold/30 focus:border-cultural-gold"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-elegant text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background border-cultural-gold/30 focus:border-cultural-gold"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-elegant text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-cultural-gold/30 focus:border-cultural-gold"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-elegant text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background border-cultural-gold/30 focus:border-cultural-gold resize-none"
                    placeholder="Tell us about your interest in our courses or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-elegant"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;