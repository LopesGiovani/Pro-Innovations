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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-primary mb-6 text-3xl md:text-4xl font-bold">Our Expert Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            From new construction to complete renovations, we deliver comprehensive solutions 
            tailored to your unique vision and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="overflow-hidden hover-lift group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold text-lg mb-1">{service.title}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      Learn More →
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific needs and create a tailored approach that exceeds your expectations.
          </p>
          <Button asChild size="lg" variant="default" className="group shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/services">
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
