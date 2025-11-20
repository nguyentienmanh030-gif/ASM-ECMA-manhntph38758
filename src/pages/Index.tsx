import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import tourMountains from "@/assets/tour-mountains.jpg";
import tourCity from "@/assets/tour-city.jpg";
import tourIsland from "@/assets/tour-island.jpg";

const Index = () => {
  const tours = [
    {
      image: tourMountains,
      title: "Alpine Adventure",
      location: "Swiss Alps",
      duration: "7 Days",
      price: "$2,499",
      description: "Experience the majestic peaks and pristine mountain trails of the Swiss Alps with expert guides.",
    },
    {
      image: tourCity,
      title: "Historic Europe",
      location: "Multiple Cities",
      duration: "10 Days",
      price: "$3,299",
      description: "Journey through centuries of history in charming European cities filled with culture and tradition.",
    },
    {
      image: tourIsland,
      title: "Tropical Paradise",
      location: "Pacific Islands",
      duration: "5 Days",
      price: "$1,899",
      description: "Relax in crystal-clear waters and pristine beaches in this ultimate tropical getaway.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      
      {/* Tour Management System Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            TOUR MANAGEMENT SYSTEM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Streamline your travel operations with our comprehensive tour management platform. 
            From booking to itinerary planning, we've got you covered.
          </p>
        </div>
      </section>
      
      <section id="tours" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured Tours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations that promise unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
