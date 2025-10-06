import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Construction Services",
      description: "Professional construction solutions for residential and commercial projects.",
      image: "/construction.jpg",
      features: [
        "New home construction",
        "Home additions and extensions",
        "Commercial construction",
        "Foundation and structural work",
        "Project management",
      ],
    },
    {
      title: "Painting Services",
      description: "Transform your space with expert interior and exterior painting.",
      image: "/painting.jpg",
      features: [
        "Interior painting",
        "Exterior painting",
        "Commercial painting",
        "Color consultation",
        "Surface preparation and finishing",
      ],
    },
    {
      title: "Carpentry Services",
      description: "Custom woodwork and carpentry crafted to perfection.",
      image: "/carpentry.jpg",
      features: [
        "Custom cabinets",
        "Trim and molding installation",
        "Door and window installation",
        "Deck and porch construction",
        "Custom furniture",
      ],
    },
    {
      title: "Remodeling Services",
      description: "Complete renovation services to transform your home.",
      image: "/remodeling.jpg",
      features: [
        "Kitchen remodeling",
        "Bathroom renovation",
        "Basement finishing",
        "Whole home remodels",
        "Room additions",
      ],
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/services-hero.jpg"
              alt="Our Services"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 gradient-hero"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-background mb-4">Our Services</h1>
              <p className="text-background/90 text-xl">
                Comprehensive construction and renovation solutions for your home or business
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="overflow-hidden border-0 shadow-lg relative h-[400px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="text-primary mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
  );
};

export default Services;
