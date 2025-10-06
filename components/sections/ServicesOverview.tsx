import Link from "next/link";
import Image from "next/image";
import { Hammer, Paintbrush, Wrench, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesOverview = () => {
  const services = [
    {
      title: "Construction Services",
      description: "New construction, home additions, and commercial projects with professional quality.",
      icon: Hammer,
      image: "/construction.jpg",
    },
    {
      title: "Painting Services",
      description: "Interior and exterior painting that transforms your space with lasting beauty.",
      icon: Paintbrush,
      image: "/painting.jpg",
    },
    {
      title: "Carpentry Services",
      description: "Custom woodwork, trim installation, and cabinet craftsmanship.",
      icon: Wrench,
      image: "/carpentry.jpg",
    },
    {
      title: "Remodeling Services",
      description: "Complete kitchen, bathroom, and whole home renovation services.",
      icon: Home,
      image: "/remodeling.jpg",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive construction and renovation services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="overflow-hidden hover-lift group border-0 shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-10 w-10 text-background" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="default" className="group">
            <Link href="/Services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
