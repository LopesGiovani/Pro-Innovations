'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Modern Home Construction",
      category: "Construction",
      image: "/hero-home.jpg",
      description: "New custom home build with contemporary design featuring open floor plans and energy-efficient systems",
      location: "Hartford, CT",
      date: "2024",
      duration: "8 months",
      featured: true,
    },
    {
      title: "Kitchen Remodeling",
      category: "Remodeling",
      image: "/services-hero.jpg",
      description: "Complete kitchen renovation with custom cabinetry, granite countertops, and modern appliances",
      location: "New Haven, CT",
      date: "2024",
      duration: "6 weeks",
      featured: true,
    },
    {
      title: "Exterior Painting",
      category: "Painting",
      image: "/painting.jpg",
      description: "Full exterior house painting with premium materials and weather protection coating",
      location: "Stamford, CT",
      date: "2023",
      duration: "2 weeks",
      featured: false,
    },
    {
      title: "Custom Carpentry",
      category: "Carpentry",
      image: "/carpentry.jpg",
      description: "Custom built-in shelving and woodwork with premium hardwood materials",
      location: "Bridgeport, CT",
      date: "2024",
      duration: "4 weeks",
      featured: false,
    },
    {
      title: "Commercial Construction",
      category: "Construction",
      image: "/construction.jpg",
      description: "Office space renovation and expansion with modern design and functionality",
      location: "Waterbury, CT",
      date: "2023",
      duration: "12 weeks",
      featured: true,
    },
    {
      title: "Bathroom Renovation",
      category: "Remodeling",
      image: "/remodeling.jpg",
      description: "Luxury bathroom remodel with modern fixtures, heated floors, and custom tile work",
      location: "Norwalk, CT",
      date: "2024",
      duration: "5 weeks",
      featured: false,
    },
  ];

  const categories = ["All", "Construction", "Remodeling", "Painting", "Carpentry"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "12+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Happy Families" },
  ];

  return (
    <>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Our Work Speaks for Itself
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our <span className="text-blue-600">Portfolio</span>
              </h1>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Explore our completed projects and see the quality craftsmanship that sets us apart. 
                Each project represents our commitment to excellence and attention to detail.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Browse through our diverse portfolio of construction, remodeling, and renovation projects
              </p>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600 hover:border-blue-600"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.title} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 z-10 bg-yellow-500 text-white">
                        Featured
                      </Badge>
                    )}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Button className="w-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                These are just a few examples from our extensive portfolio. We have successfully completed 
                many more projects throughout Connecticut. Let us bring your vision to life with the same 
                quality and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-blue-500/30">
                <p className="text-blue-200 text-sm">
                  Licensed & Insured • Serving Connecticut Since 2012 • 100% Satisfaction Guaranteed
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

export default Portfolio;
