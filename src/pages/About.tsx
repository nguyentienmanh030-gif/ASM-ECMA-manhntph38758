import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Calendar, Shield, HeadphonesIcon } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Destinations",
      description: "Access to over 500+ destinations worldwide with expertly curated itineraries and local guides."
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy online booking with flexible cancellation policies and instant confirmation for your peace of mind."
    },
    {
      icon: Shield,
      title: "Travel Protection",
      description: "Comprehensive travel insurance and 24/7 emergency assistance to keep you safe throughout your journey."
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Dedicated support team available around the clock to assist with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About TravelTours
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences since 2010. 
              We're passionate about connecting travelers with the world's most amazing destinations.
            </p>
          </div>

          <div className="mb-20">
            <Card className="border-none shadow-elegant bg-card/50">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At TravelTours, we believe that travel is more than just visiting new places—it's about 
                  creating memories, discovering cultures, and expanding horizons. Our mission is to make 
                  world-class travel experiences accessible to everyone through our comprehensive tour 
                  management system.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with local partners worldwide to ensure authentic experiences while maintaining 
                  the highest standards of safety, comfort, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
