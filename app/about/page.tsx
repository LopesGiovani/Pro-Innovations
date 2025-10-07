import { Award, Users, TrendingUp, Heart, CheckCircle, Shield, Clock, Star, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project is executed with precision and attention to detail.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you throughout the entire project.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We stay updated with the latest techniques and materials to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "Built on honesty and transparency, we've earned the trust of countless Connecticut homeowners.",
    },
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Serving Connecticut communities"
    },
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successful renovations and constructions"
    },
    {
      number: "100%",
      label: "Customer Satisfaction",
      description: "Guaranteed quality and service"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Emergency and consultation services"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your complete protection and peace of mind."
    },
    {
      icon: Star,
      title: "Experienced Team",
      description: "Skilled craftsmen with years of experience in all aspects of construction and renovation."
    },
    {
      icon: Building,
      title: "Quality Materials",
      description: "We use only premium materials from trusted suppliers to ensure lasting results."
    },
    {
      icon: Wrench,
      title: "Local Expertise",
      description: "Deep knowledge of Connecticut building codes and local requirements."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and complete projects within agreed timelines."
    },
    {
      icon: CheckCircle,
      title: "Warranty Guarantee",
      description: "All our work comes with comprehensive warranties for your peace of mind."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image 
                src="/logo.png" 
                alt="Pro Innovations" 
                width={100} 
                height={100} 
                className="mx-auto mb-6 rounded-full shadow-lg" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Pro Innovations
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Building Excellence, Delivering Quality - For over a decade, we've been transforming homes 
              and businesses across Connecticut with professional construction and renovation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Connecticut Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-slate-800 mb-1">{achievement.label}</div>
                  <div className="text-sm text-slate-600">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p>
                  Pro Innovations was founded with a simple mission: to provide Connecticut homeowners and 
                  businesses with construction and renovation services that exceed expectations. What started 
                  as a small local contractor has grown into a trusted name across the state.
                </p>
                <p>
                  Our team of skilled craftsmen brings decades of combined experience to every project. 
                  Whether it's new construction, a kitchen remodel, custom carpentry, or a fresh coat of paint, 
                  we approach each job with the same dedication to quality and customer satisfaction.
                </p>
                <p>
                  We believe that your home or business deserves the best. That's why we use only premium materials, 
                  employ skilled professionals, and stand behind our work with comprehensive warranties. 
                  When you choose Pro Innovations, you're choosing quality that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Pro Innovations</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Discover what sets us apart from other contractors in Connecticut
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Let's discuss your vision and bring it to life. Contact us today for a free consultation 
              and discover how Pro Innovations can transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Get Free Quote
              </a>
              <a 
                href="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-colors duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
