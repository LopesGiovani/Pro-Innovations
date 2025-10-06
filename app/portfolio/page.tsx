import { Card } from "@/components/ui/card";
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Home Construction",
      category: "Construction",
      image: "/hero-home.jpg",
      description: "New custom home build with contemporary design",
    },
    {
      title: "Kitchen Remodeling",
      category: "Remodeling",
      image: "/services-hero.jpg",
      description: "Complete kitchen renovation with custom cabinetry",
    },
    {
      title: "Exterior Painting",
      category: "Painting",
      image: "/painting.jpg",
      description: "Full exterior house painting with premium materials",
    },
    {
      title: "Custom Carpentry",
      category: "Carpentry",
      image: "/carpentry.jpg",
      description: "Custom built-in shelving and woodwork",
    },
    {
      title: "Commercial Construction",
      category: "Construction",
      image: "/construction.jpg",
      description: "Office space renovation and expansion",
    },
    {
      title: "Bathroom Renovation",
      category: "Remodeling",
      image: "/remodeling.jpg",
      description: "Luxury bathroom remodel with modern fixtures",
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-primary mb-4">Our Portfolio</h1>
              <p className="text-muted-foreground text-xl">
                Explore our completed projects and see the quality craftsmanship that sets us apart
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden hover-lift group border-0 shadow-md">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Note Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground">
                These are example projects. Our portfolio includes many more successful projects throughout Connecticut. 
                Contact us to learn more about our work and how we can help with your project.
              </p>
            </div>
          </div>
        </section>
      </>
  );
};

export default Portfolio;
