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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div className="text-center">
              <h3 className="font-cultural text-2xl font-semibold text-primary mb-6">
                Get In Touch
              </h3>
              <p className="font-elegant text-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                We're here to help you start your artistic journey. Whether you have questions about our courses, 
                want to schedule a trial class, or need more information about our programs, don't hesitate to reach out.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-cultural-cream/50 border-cultural-gold/20 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-cultural-gold mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <h4 className="font-cultural text-lg font-semibold text-primary mb-3">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-elegant text-sm text-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                    <p className="font-elegant text-xs text-muted-foreground mt-3">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;