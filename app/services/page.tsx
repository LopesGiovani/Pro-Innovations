import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Facade Renovation & Restoration",
      description: "Repair and preparation of exterior surfaces. We remove old and peeling paint, treat wood, and apply new coatings and paint to protect and renew your home or building facade.",
      image: "/construction.jpg",
      features: [
        "Exterior surface preparation",
        "Paint removal and stripping",
        "Wood treatment and repair",
        "Weather protection coatings",
        "Complete facade restoration",
      ],
    },
    {
      title: "Professional Interior Painting",
      description: "Meticulous interior preparation for painting, including complete protection of floors, furniture, and non-paintable areas. We guarantee high-quality, clean, and efficient finishing to transform any space.",
      image: "/painting.jpg",
      features: [
        "Complete surface preparation",
        "Floor and furniture protection",
        "Premium paint application",
        "Clean and efficient process",
        "Quality finish guarantee",
      ],
    },
    {
      title: "Custom Carpentry & Finishes",
      description: "Construction and installation of interior structures like stairs, walls, and ceilings. We work with various types of wood and finishes to create welcoming and functional environments, including basements and recreational areas.",
      image: "/carpentry.jpg",
      features: [
        "Custom staircase construction",
        "Interior wall framing",
        "Wood ceiling installation",
        "Basement finishing",
        "Recreational area development",
      ],
    },
    {
      title: "Kitchen Renovation & Lighting",
      description: "Complete kitchen transformation, featuring cabinet modernization, new countertop installation, and focused lighting solutions including pendant lights over islands and ambient lighting design.",
      image: "/remodeling.jpg",
      features: [
        "Cabinet modernization",
        "Countertop installation",
        "Kitchen island design",
        "Pendant lighting installation",
        "Ambient lighting solutions",
      ],
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/services-hero.jpg"
              alt="Our Services"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8">
                Comprehensive construction and renovation solutions for your home or business
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                From construction to renovation, we provide comprehensive solutions tailored to your needs
              </p>
            </div>
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Card className="overflow-hidden border-0 shadow-lg relative h-[400px] group hover:shadow-xl transition-all duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                            <Check className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700 text-base">{feature}</span>
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
