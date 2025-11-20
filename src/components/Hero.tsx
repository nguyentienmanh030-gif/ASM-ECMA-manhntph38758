import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 drop-shadow-md max-w-2xl mx-auto">
          Explore breathtaking destinations and unforgettable experiences with our curated travel tours
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg">
            Explore Tours
            <ArrowRight className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg bg-background/80 backdrop-blur-sm border-2 hover:bg-background">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
