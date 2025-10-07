import { Award, Users, Clock, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Decades of experience delivering superior quality workmanship on every project.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Skilled craftsmen dedicated to bringing your vision to life with precision.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to completing projects on schedule without compromising quality.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your complete peace of mind.",
    },
  ];

  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-primary mb-6 text-3xl md:text-4xl font-bold">Why Choose Pro Innovations</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for all construction and remodeling needs in Connecticut. 
            We combine expertise, reliability, and exceptional service to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
