import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  description: string;
}

const TourCard = ({ image, title, location, duration, price, description }: TourCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
        
        <div className="flex items-center gap-4 mb-3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">From</span>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
          <Button variant="default">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourCard;
