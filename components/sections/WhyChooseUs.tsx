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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Why Choose Pro Innovations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner for all construction and remodeling needs in Connecticut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
